import {Block, Props} from '../../services/Block';
import chatPageTmpl from './ChatPage.tmpl';
import {chatProfileLink} from "../../components/Chat/ChatProfileLink";
import {chatSearch} from "../../components/Chat/ChatSearch";
import {chatInfo} from "../../components/Chat/ChatInfo";
import {chatSendMessage} from "../../components/Chat/ChatSendMessage";
import ChatController from "../../controllers/ChatController";
import {ChatUsersData, UserToChatData} from "../../api/ChatAPI";
import {Button} from "../../components/Button/Button";
import {ModalCreateChat} from "../../components/Modal/ModalCreateChat/ModalCreateChat";
import {ModalRemoveChat} from "../../components/Modal/ModalRemoveChat/ModalRemoveChat";
import {chatPage} from "./index";
import {ModalDeleteUserFromChat} from "../../components/Modal/ModalDeleteUserFromChat/ModalDeleteUserFromChat";
import {ModalAddUserToChat} from "../../components/Modal/ModalAddUserToChat/ModalAddUserToChat";
import Store, {StoreEvents} from "../../services/Store/Store";
import {ChatList} from "../../components/Chat/ChatList/ChatList";
import WSTransport from "../../api/ChatsWebSocketAPI";
import {ChatBox} from "../../components/Chat/ChatBox/ChatBox";
import {isEqual} from "../../utils/isEqual";

export class ChatPage extends Block {
  constructor(...propsAndChild: Props[]) {
    super('div', {...propsAndChild,
      'chat-profile-link': chatProfileLink,
      'chat-search': chatSearch,
      'chat-list': new ChatList(),
      'chat-info': chatInfo,
      'chat-box': new ChatBox(),
      'chat-send-message': chatSendMessage,
      'chat-show': false,
      'chat-hide': true,
      'button-open-modal-create-chat': new Button('button', {
        attr: { class: 'button button-primary', type: 'button', style: 'display:inline-block; margin:10px;' },
        text: '+ чат',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            chatPage.openModalCreateChat()
          },
        },
      }),
      'button-open-modal-remove-chat': new Button('button', {
        attr: { class: 'button button-primary', type: 'button', style: 'display:inline-block; margin:10px;' },
        text: '- чат',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            chatPage.openModalRemoveChat()
          },
        },
      }),
      'modal-create-chat': new ModalCreateChat({
        attr: { class: 'modal__wrap', title: 'title chat' },
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            chatPage.closeModalCreateChat();
          },
        },
      }),
      'modal-remove-chat': new ModalRemoveChat({
        attr: { class: 'modal__wrap', title: 'id chats' },
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            chatPage.closeModalRemoveChat();
          },
        },
      }),
      'modal-add-user-to-chat': new ModalAddUserToChat({
        attr: { class: 'modal__wrap', title: 'id chats' },
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            chatPage.closeModalAddUserToChat();
          },
        },
      }),
      'modal-delete-user-from-chat': new ModalDeleteUserFromChat({
        attr: { class: 'modal__wrap', title: 'id chats' },
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            chatPage.closeModalDeleteUserFromChat();
          },
        },
      }),
    })

    this.getChats(100, 100, 'getChats title');

    let prevState: any = Store.getState();
    Store.on(StoreEvents.Updated, () => {
      const stateProps: any = Store.getState();
      if (isEqual(prevState, stateProps)) {
        return
      }
      prevState = stateProps;
      this.setProps({...stateProps});
    });

  }

  async startChatWebSocket(userId: number, chatId: number) {
    await Store.setState('currentChatId', chatId);
    const token = await this.getChatToken(chatId);

    await WSTransport.startWS(userId.toString(), chatId.toString(), token)
    await WSTransport.open();

    setTimeout( () => {
      this._children['chat-box']._props.messages = [];

      if (!Store.getState().messages) {
        WSTransport.getOldMessages();
      }

      setTimeout(() => {
        (<any>Store).getState().messages?.forEach((message: any) => {
          if (userId == message.user_id) {
            message['current-user'] = true;
          } else {
            message['not-current-user'] = true;
          }
        })
        this._children['chat-box']._props.messages = (<any>Store).getState().messages
      }, 100)
    }, 500)


    this._props['chat-show'] = true
    this._props['chat-hide'] = false

    setTimeout(() => {
      const box = this._children['chat-box']._element;
      box.scrollTop = box.scrollHeight
    }, 1000)
  }

  getChatToken(id: number) {
    const data = { id }
    return ChatController.getChatToken(data).then(res => {
      Store.setState('token', res.token);
      return res.token;
    })
  }

  async sendMessage(message: string) {
    WSTransport.sendMessage(message);
    const mess = {
      content: message, type: 'message', 'current-user': 'true',
      time: new Date().toISOString().substring(0,19).replace("T"," ")
    }
    this._children['chat-box']._props.messages = [...this._children['chat-box']._props.messages, mess];
  }

  async getChats(offset: number = 1, limit: number = 1, title: string = '') {
    let data = { offset, limit, title }

    await ChatController.getChats(data).then(chats => {
      this._children['chat-list']._props.chats = [...this._children['chat-list']._props.chats, ...chats]
    })

  }

  getChatUsers(data: ChatUsersData) {
    ChatController.getChatUsers(data).then(res => console.log('getChatUsers: ', res))
  }

  getNewMessagesCount(id: number) {
    const data = { id }
    ChatController.getNewMessagesCount(data).then(res => console.log('getNewMessagesCount: ', res))
  }

  addUserToChat(data: UserToChatData) {
    ChatController.addUserToChat(data).then(res => console.log('addUserToChat: ', res))
  }

  deleteUserFromChat(data: UserToChatData) {
    ChatController.deleteUserFromChat(data).then(res => console.log('deleteUserFromChat: ', res))
  }

  createChat(title: string = 'Новый чат') {
    const data = { title }
    ChatController.createChat(data).then(chats => console.log('createChat: ', chats))
  }

  deleteChatById(chatId: number) {
    const data = { chatId }
    ChatController.deleteChatById(data).then(chats => console.log('deleteChatById: ', chats))
  }

  openModalCreateChat() {
    this._children['modal-create-chat']._element.classList.add('active');
  }
  closeModalCreateChat() {
    this._children['modal-create-chat']._element.classList.remove('active');
  }

  openModalRemoveChat() {
    this._children['modal-remove-chat']._element.classList.add('active');
  }
  closeModalRemoveChat() {
    this._children['modal-remove-chat']._element.classList.remove('active');
  }

  openModalAddUserToChat() {
    this._children['modal-add-user-to-chat']._element.classList.add('active');
  }
  closeModalAddUserToChat() {
    this._children['modal-add-user-to-chat']._element.classList.remove('active');
  }

  openModalDeleteUserFromChat() {
    this._children['modal-delete-user-from-chat']._element.classList.add('active');
  }
  closeModalDeleteUserFromChat() {
    this._children['modal-delete-user-from-chat']._element.classList.remove('active');
  }

  render() {
    return this.compile(chatPageTmpl, this._props);
  }
}
