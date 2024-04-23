<template>
    <article class="game">
        <h2>{{ game.name }}</h2>
        <div class="info">
            <span>{{ game.year }} - {{ game.platform }} ({{ game.user }})</span>
            <div>
                <button
                    v-if="user" 
                    @click="removeGame(game.id)" class="button-style">Remove</button>
                <router-link :to="{ name: 'GameShow', params: { id: game.id } }" class="button-style">Show</router-link>
            </div>
        </div>
    </article>
</template>

<script>
import { useSessionStore } from '../stores/userStore.js'
export default {
    props: ['game'],
    emits: ['remove'],
    methods: {
        removeGame(id) {
            this.$emit('remove', id);
        }
    },
    computed: {
        user() {
            return useSessionStore().user
        }
    }
}
</script>

<style scoped>
.game {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;

    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

button {
    margin-right: 10px;
}

.button-style {
    display: inline-block;
    padding: 5px 5px;
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
    text-decoration: none;
    outline: none;
    background-color: aliceblue;
    border: none;
    border-radius: 5px;
}

.button-style:hover {
    background-color: lightblue;
}
</style>