<template>
    <main>
        <h1>Login</h1>
        <form>
            <label for="userName">User Name:</label>
            <input type="text" id="userName" v-model="userName">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password">
            <button @click="login" :disabled="userName === '' || password === ''">Login</button>
        </form>
    </main>
</template>

<script>
import { useSessionStore } from '../stores/userStore.js'
export default {
    data: function () {
        return {
            userName: "",
            password: ""
        }
    },
    methods: {
        login() {
            useSessionStore().setUser(this.userName)
            this.$router.push('/listGames')
        }
    },
    created() {
        useSessionStore().user = ''
    }
}   
</script>