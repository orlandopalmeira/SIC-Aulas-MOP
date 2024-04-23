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
export default {
    data: function () {
        return {
            userName: "",
            password: ""
        }
    },
    emits: ['login'],
    methods: {
        login() {
            this.$emit('login', this.userName);
            this.userName = "";
            this.password = "";
        }
    },
    created() {
        this.$root.userName = ""    // Clear user name when login page is loaded;
    }
}   
</script>