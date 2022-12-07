import UserAPI, {UserPasswordData, UserProfileData} from "../api/UserAPI";
import Store from "../services/Store/Store";

class UserController {

  public async changeUserProfile(data: UserProfileData) {
    try {
      const res = await UserAPI.changeUserProfileApi(data);
      if (res.status === 200) {
        const user = JSON.parse(res.response);
        Store.setState('user', user);
        // return JSON.parse(res.response);
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('UserController.changeUserProfile error: ', error.message,)
    }
  }

  public async changeUserAvatar(data: FormData) {
    try {
      const res = await UserAPI.changeUserAvatarApi(data);
      if (res.status === 200) {
        await Store.setState('user', JSON.parse(res.response));
        return JSON.parse(res.response);
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('UserController.changeUserAvatar error: ', error.message,)
    }
  }

  public async changeUserPassword(data: UserPasswordData) {
    try {
      const res = await UserAPI.changeUserPasswordApi(data);
      if (res.status === 200) {
        return true;
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('UserController.changeUserPassword error: ', error.message,)
    }
  }

  public async getUserById(id: number) {
    try {
      const res = await UserAPI.getUserByIdApi(id);
      if (res.status === 200) {
        return JSON.parse(res.response);
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('UserController.getUserById error: ', error.message,)
    }
  }

  public async searchForUserByLogin(login: string) {
    try {
      const res = await UserAPI.searchForUserByLoginApi({login: `${login}`});
      if (res.status === 200) {
        return JSON.parse(res.response);
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('UserController.searchForUserByLogin error: ', error.message,)
    }
  }

}

export default new UserController();
