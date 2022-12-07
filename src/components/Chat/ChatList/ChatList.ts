import {Block, Props} from '../../../services/Block';
import chatListTmpl from './ChatList.tmpl';
import Store, {StoreEvents} from "../../../services/Store/Store";
import {isEqual} from "../../../utils/isEqual";
import {chatPage} from "../../../pages/ChatPage";

export class ChatList extends Block {
  constructor(...propsAndChild: Props[]) {
    super('div', {...propsAndChild,
      attr: { class: 'chat-list__chat-items' },
      chats: [],
      events: {
        click: (e: Event) => {
          let t = e.currentTarget
          e.preventDefault();
          e.stopPropagation();
          if (t) {
            // @ts-ignore
            const dataChatId = t.dataset.id;
            // @ts-ignore
            const dataUserId = Store.getState().user.id;
            this.startChatWebSocket(dataUserId, dataChatId)
          }
        },
      },
    })

    let prevState: any = Store.getState();
    Store.on(StoreEvents.Updated, () => {
      const stateProps = Store.getState();
      if (isEqual(prevState, stateProps)) {
        return
      }
      prevState = stateProps;
      this.setProps({...stateProps});
    });
  }

  startChatWebSocket(userId: number, chatId: number) {
    chatPage.startChatWebSocket(userId, chatId)
  }

  addEvents() {
    this._element.querySelectorAll('.chat-items__chat-item').forEach((button: HTMLElement) => {
      button.addEventListener('click', (<Props>this)._props.events.click);
    });
    super.addEvents();
  }

  render() {
    return this.compile(chatListTmpl, this._props);
  }
}
