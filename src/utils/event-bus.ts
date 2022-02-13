export type Event = string;
export type EventListener = (event: Event, ...arguments_: any[]) => void;

export class EventBus {
  listeners: { [key: Event]: EventListener[] };

  constructor() {
    this.listeners = {};
  }

  on(event: Event, callback: EventListener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: Event, callback: EventListener) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );
  }

  emit(event: Event, ...arguments_: any[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    for (const listener of this.listeners[event]) {
      listener(event, ...arguments_);
    }
  }
}
