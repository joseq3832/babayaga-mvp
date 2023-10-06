
  import { AxiosResponse } from 'axios';
  import HttpClient from '@/lib/HttpClient';

  const UserService = {
    // Sustituir any por IResponseUser
    async request<T = any, R = AxiosResponse<T>>() {
      return await HttpClient.get<T, R>('user');
    }
  };

  export default UserService;
  