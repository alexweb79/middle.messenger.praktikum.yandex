import Store from "../services/Store/Store";

export class ChatsWebSocketAPI {
  protected _endPoint: string;
  protected _WS: any;
  protected _timer: NodeJS.Timeout;

  public startWS(userId = '', chatId = '', token = '') {
    this._endPoint = 'wss://ya-praktikum.tech/ws/chats/' + `${userId}/${chatId}/${token}/`;
    this._WS = new WebSocket(this._endPoint);
    this.message();
    this.error();
  }

  public open() {
    this._WS.addEventListener('open', () => {
      console.log('Соединение установлено');
      this.clearPingPong(this._timer);
      this.pingPong();
      this.getOldMessages();
    });
  }

  public message() {
    this._WS.addEventListener('message', (e: MessageEvent) => {
      const data = JSON.parse(e.data);
      if (data) {
        if (Array.isArray(data)) {
          Store.setState('messages', data.reverse());
        } else {
          if (data.type === 'message') {
            // @ts-ignore
            Store.setState('messages', [...Store.getState().messages, data])
          }
        }
        console.log('Получены данные: ', data);
      }
    });
  }

  public close() {
    this._WS.addEventListener('close', (e: CloseEvent) => {
      if (e.wasClean) {
        Store.setState('messages', [])
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }

      console.log(`Код: ${e.code} | Причина: ${e.reason}`);
    });
  }

  public error() {
    this._WS.addEventListener('error', (e: ErrorEvent) => {
      console.error('Ошибка: ', e.message);
    });
  }

  private pingPong() {
    this._timer = setInterval(() => {
      this._WS.send(JSON.stringify({
        type: 'ping'
      }));
    }, 5000);
  }

  private clearPingPong(timer: NodeJS.Timeout) {
    if ((timer as unknown as number) % 2 === 0) {
      clearTimeout(timer);
    }
  }

  public getOldMessages(count = '0'): void {
    this._WS.send(JSON.stringify({
        content: count,
        type: 'get old',
      })
    );
  }

  public sendMessage(message: string) {
    this._WS.send(JSON.stringify({
        content: message,
        type: 'message',
      })
    );
  }

}

export default new ChatsWebSocketAPI();
