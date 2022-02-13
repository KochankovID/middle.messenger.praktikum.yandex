import { EventBus } from "./event-bus";
import pug, { compileTemplate } from "pug";

export default abstract class Block<Properties extends {}> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  protected template: string;

  protected _element: string | undefined;
  protected props: Properties;
  protected eventBus: EventBus;
  private compiledTemplate: compileTemplate;

  protected constructor(template: string, properties: Properties) {
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

  get element(): string {
    return this._element!;
  }

  private _render() {
    this._element = this.render();
  }

  render(): string {
    return this.compiledTemplate(this.props);
  }

  private makePropsProxy(properties: Properties): Properties {
    return new Proxy(properties ?? {}, {
      get(target: Properties, property: string): any {
        // @ts-ignore
        const value = target[property];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set: (target: Properties, property: string, value: any): boolean => {
        // @ts-ignore
        target[property] = value;

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
