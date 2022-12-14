export class EventBus {
  public listeners: any;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: object): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: object): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener: object) => listener !== callback,
    );
  }

  emit(event: string, ...args: object[]): void {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener: any) => {
      listener(...args);
    });
  }
}
