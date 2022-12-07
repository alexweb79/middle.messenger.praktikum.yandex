import {BaseAPI} from './BaseAPI';

export type UserProfileData = {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string
}

export type UserPasswordData = {
  oldPassword: string;
  newPassword: string;
}

class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  public changeUserProfileApi(data: UserProfileData) {
    return this.HTTP.put('/profile', { data });
  }

  public changeUserAvatarApi(data: FormData) {
    return this.HTTP.put('/profile/avatar', { data });
  }

  public changeUserPasswordApi(data: UserPasswordData) {
    return this.HTTP.put('/password', { data });
  }

  public getUserByIdApi(id: number) {
    return this.HTTP.get(`/${id}`);
  }

  public searchForUserByLoginApi(data: { login: string }) {
    return this.HTTP.post('/search', { data });
  }
}

export default new UserAPI();
