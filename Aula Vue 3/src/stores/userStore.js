import { defineStore } from 'pinia';
export const useSessionStore = defineStore('session', {
    state: () => ({
        user: ''
    }),
    actions: {
        setUser(user) {
            this.user = user;
        }
    },
    getters: {
        isValidUser() {
            return this.user !== ''
        }
    }
});