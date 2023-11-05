import { defineStore } from 'pinia';

interface UserState {
  username: string;
  id: number;
  firstname: string;
  lastname: string;
  imageurl: string;
  token: string;
  gender: string;
  email: string;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    username: 'null',
    id: null,
    firstname: 'null',
    lastname: 'null',
    imageurl: 'null',
    token: 'null',
    gender: 'null',
    email: 'null',
  }),
  actions: {
    setUser(user: UserState) {
      this.username = user.username;
      this.id = user.id;
      this.firstname = user.firstname;
      this.lastname = user.lastname;
      this.imageurl = user.imageurl;
      this.token = user.token;
      this.gender = user.gender;
      this.email = user.email;
    },
  },
});
