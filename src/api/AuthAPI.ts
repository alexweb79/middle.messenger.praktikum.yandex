import {BaseAPI} from './BaseAPI';

export type SignUpData = {
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  phone: string;
  password: string;
}

export type SignInData = {
  login: string;
  password: string;
}

export type GetUserInfoData = {
  id: number;
  email: string;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string;
  phone: string;
  avatar: string;
}

class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  public signUpApi(data: SignUpData) {
    return this.HTTP.post('/signup', { data });
  }

  public signInApi(data: SignInData) {
    return this.HTTP.post('/signin', { data });
  }

  public getUserInfoApi() {
    return this.HTTP.get('/user');
  }

  public logoutApi() {
    return this.HTTP.post('/logout');
  }
}

export default new AuthAPI();
