<template>
    <main>
        <form>
            <fieldset id="addGame">
                <legend>Add Game</legend>
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="newGame.name">
                <label for="year">Year:</label>
                <input type="number" id="year" v-model="newGame.year">
                <label for="platform">Platform:</label>
                <input type="text" id="platform" v-model="newGame.platform">
                <button @click="addGame" :disabled="newGame.name === '' || newGame.platform === ''">Add Game</button>
            </fieldset>
        </form>
    </main>
</template>

<script>
export default {
    emits: ['add'],
    data: function () {
        return {
            newGame: { name: "", year: new Date().getFullYear(), platform: "" }
        }
    },
    methods: {
        addGame() {
            this.$emit('add', this.newGame);
            this.newGame = { name: "", year: new Date().getFullYear(), platform: "" };
        }
    }
}
</script>