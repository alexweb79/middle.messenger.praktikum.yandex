import ChatAPI, {ChatsData, ChatUsersData, UserToChatData} from "../api/ChatAPI";
import Store from "../services/Store/Store";

class ChatController {

  public async getChats(data: ChatsData) {
    try {
      const res = await ChatAPI.getChatsApi(data);
      if (res.status === 200) {
        const chats = JSON.parse(res.response);
        Store.setState('chats', chats);
        return JSON.parse(res.response);
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('UserController.getChats error: ', error.message,)
    }
  }

  public async getChatUsers(data: ChatUsersData) {
    try {
      const res = await ChatAPI.getChatUsersApi(data);
      if (res.status === 200) {
        return JSON.parse(res.response);
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('ChatController.getChatUsers error: ', error.message,)
    }
  }

  public async getChatToken(data: {id: number}) {
    try {
      const res = await ChatAPI.getChatTokenApi(data);
      if (res.status === 200) {
        return  JSON.parse(res.response);
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('ChatController.getChatToken error: ', error.message,)
    }
  }

  public async getNewMessagesCount(data: {id: number}) {
    try {
      const res = await ChatAPI.getNewMessagesCountApi(data);
      if (res.status === 200) {
        return JSON.parse(res.response);
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('ChatController.getNewMessagesCount error: ', error.message,)
    }
  }

  public async createChat(data: {title: string}) {
    try {
      const res = await ChatAPI.createChatApi(data);
      if (res.status === 200) {
        return JSON.parse(res.response);
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('ChatController.createChat error: ', error.message,)
    }
  }

  public async deleteChatById(data: { chatId: number }) {
    try {
      const res = await ChatAPI.deleteChatByIdApi(data);
      if (res.status === 200) {
        return JSON.parse(res.response);
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('ChatController.deleteChatById error: ', error.message,)
    }
  }

  public async uploadChatAvatar(data: FormData) {
    try {
      const res = await ChatAPI.uploadChatAvatarApi(data);
      if (res.status === 200) {
        await Store.setState('user', JSON.parse(res.response));
        return JSON.parse(res.response);
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('ChatController.uploadChatAvatar error: ', error.message,)
    }
  }

  public async addUserToChat(data: UserToChatData) {
    try {
      const res = await ChatAPI.addUserToChatApi(data);
      if (res.status === 200) {
        return res.response;
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('ChatController.addUserToChat error: ', error.message,)
    }
  }

  public async deleteUserFromChat(data: UserToChatData) {
    try {
      const res = await ChatAPI.deleteUserFromChatApi(data);
      if (res.status === 200) {
        return res.response;
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('ChatController.deleteUserFromChat error: ', error.message,)
    }
  }

}

export default new ChatController();
