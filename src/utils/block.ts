import { EventBus } from "./event-bus";
import pug from "pug";

export default abstract class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  protected template: string;

  protected _element: HTMLElement | undefined;
  protected props: Record<string, any>;
  protected eventBus: EventBus;
  private compiledTemplate: (locals: { [key: string]: any }) => HTMLElement;

  protected constructor(
    template: string,
    properties: Record<string, any> = {}
  ) {
    this.props = this.makePropsProxy(properties);
    this.eventBus = new EventBus();
    this.template = template;

    this.registerEvents();
    this.eventBus.emit(Block.EVENTS.INIT);
    this.compiledTemplate = pug.compile(this.template);
  }

  private registerEvents() {
    this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this.compiledTemplate = pug.compile(this.template);
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  get element(): HTMLElement {
    return this._element!;
  }

  private _render() {
    this._element = this.render();
  }

  render(): HTMLElement {
    return this.compiledTemplate(this.props);
  }

  private makePropsProxy(properties: Record<string, any>): Record<string, any> {
    return new Proxy(properties, {
      get(target: Record<string, any>, properties: string): any {
        const value = target[properties];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set: (
        target: Record<string, any>,
        properties: string,
        value: any
      ): boolean => {
        target[properties] = value;

        this.eventBus.emit(Block.EVENTS.FLOW_RENDER, { ...target }, target);
        return true;
      },
      deleteProperty(): never {
        throw new Error("Нет доступа");
      },
    });
  }

  show() {
    this._element!.style.display = "block";
  }

  hide() {
    this._element!.style.display = "none";
  }
}
