import { defineStore } from 'pinia';

interface UserState {
  username: string;
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  gender: string;
  email: string;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    username: '',
    id: null,
    firstName: '',
    lastName: '',
    image: '',
    gender: '',
    email: '',
  }),
  actions: {
    setUser(user: UserState) {
      this.username = user.username;
      this.id = user.id;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.image = user.image;
      this.gender = user.gender;
      this.email = user.email;
    },
  },
});
