import AuthAPI, {SignInData, SignUpData} from "../api/AuthAPI";
import Router from "../services/Router/Router";
import Store from "../services/Store/Store";

class AuthController {

  public async signUp(data: SignUpData) {
    try {
      const res = await AuthAPI.signUpApi(data);
      if (res.status === 200) {
        await AuthAPI.getUserInfoApi();
        Router.go('/settings');
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('AuthController.signUp error: ', error.message,)
    }
  }

  public async signIn(data: SignInData) {
    try {
      const res = await AuthAPI.signInApi(data);
      if (res.status === 200) {
        await AuthAPI.getUserInfoApi();
        Router.go('/messenger');
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('AuthController.signIn error: ', error.message)
      if (error.message == 'User already in system') {
        Router.go('/messenger');
      }
    }
  }

  public async getUserInfo() {
    try {
      const res = await AuthAPI.getUserInfoApi();
      if (res.status === 200) {
        const user = JSON.parse(res.response);
        Store.setState('user', user);
        return JSON.parse(res.response);
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      if (!Store.getState().user) {
        Router.go('/');
      }
      console.error('AuthController.getUserInfo error: ', error.message)
    }
  }

  public async logout() {
    try {
      const res = await AuthAPI.logoutApi();
      if (res.status === 200) {
        Store.clearState();
        Router.go('/');
      } else {
        throw new Error(JSON.parse(res.response).reason)
      }
    } catch (error) {
      console.error('AuthController.logout error: ', error.message)
    }
  }

}

export default new AuthController();
