import {BaseAPI} from './BaseAPI';

export type ChatsData = {
  offset: number;
  limit: number;
  title: string;
}

export type ChatUsersData = {
  id: number;
  offset: number;
  limit: number;
  name: string;
  email: string;
}

export type UserToChatData = {
  users: number[];
  chatId: number;
}

class ChatAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  public getChatsApi(data: ChatsData) {
    return this.HTTP.get('/', { data });
  }

  public getChatUsersApi(data: ChatUsersData) {
    return this.HTTP.get(`/${data.id}/users`, { data });
  }

  public getChatTokenApi(data: {id: number}) {
    return this.HTTP.post(`/token/${data.id}`, { data });
  }

  public getNewMessagesCountApi(data: {id: number}) {
    return this.HTTP.get(`/new/${data.id}`, { data });
  }

  public createChatApi(data: { title: string }) {
    return this.HTTP.post('/', { data });
  }

  public deleteChatByIdApi(data: { chatId: number }) {
    return this.HTTP.delete('/', { data });
  }




  public addUserToChatApi(data: UserToChatData) {
    return this.HTTP.put('/users', { data });
  }

  public deleteUserFromChatApi(data: UserToChatData) {
    return this.HTTP.delete('/users', { data });
  }

}

export default new ChatAPI();
