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
import Store, {Indexed, StoreEvents} from "../../services/Store/Store";
import {ChatList} from "../../components/Chat/ChatList/ChatList";
import WSTransport from "../../api/ChatsWebSocketAPI";
import {ChatBox} from "../../components/Chat/ChatBox/ChatBox";
import {isEqual} from "../../utils/isEqual";
import {ModalUploadAvatarChat} from "../../components/Modal/ModalUploadAvatarChat/ModalUploadAvatarChat";

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
      'button-open-modal-upload-avatar-chat': new Button('button', {
        attr: { class: 'button button-primary', type: 'button', style: 'display:block;margin: 5px auto 10px;' },
        text: 'Изменить аватар чата',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            chatPage.openModalUploadAvatarChat()
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
      'modal-upload-avatar-chat': new ModalUploadAvatarChat({
        attr: { class: 'modal__wrap', title: 'chat id' },
        events: {
          click: (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            chatPage.closeModalUploadAvatarChat();
          },
        },
      }),
    })

    this.getChats(100, 100, 'getChats title');

    let prevState: Indexed = Store.getState();
    Store.on(StoreEvents.Updated, () => {
      const stateProps = Store.getState();
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

  async getChats(offset = 1, limit = 1, title = '') {
    const data = { offset, limit, title }

    await ChatController.getChats(data).then(chats => {
      if (chats) {
        this._children['chat-list']._props.chats = [...this._children['chat-list']._props.chats, ...chats]
      }
      this._children['chat-list']._props.chats.forEach((chat: any) => {
        chat.avatar = chat.avatar ? 'https://ya-praktikum.tech/api/v2/resources' + chat.avatar : chat.avatar;
      })
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

  createChat(title = 'Новый чат') {
    const data = { title }
    ChatController.createChat(data).then(chats => console.log('createChat: ', chats))
  }

  deleteChatById(chatId: number) {
    const data = { chatId }
    ChatController.deleteChatById(data).then(chats => console.log('deleteChatById: ', chats))
  }

  uploadAvatarChat(data: FormData) {
    ChatController.uploadChatAvatar(data).then(res => console.log('uploadChatAvatar: ', res))
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

  openModalUploadAvatarChat() {
    this._children['modal-upload-avatar-chat']._element.classList.add('active');
  }
  closeModalUploadAvatarChat() {
    this._children['modal-upload-avatar-chat']._element.classList.remove('active');
  }

  render() {
    return this.compile(chatPageTmpl, this._props);
  }
}
