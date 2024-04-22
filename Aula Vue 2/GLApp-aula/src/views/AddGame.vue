<template>
    <main>
        <form>
            <div class="mb-3">
                <label class="form-label" for="name">Game name</label>
                <input class="form-control" type="text" placeholder="Game name" v-model="newGame.name">
            </div>

            <div class="mb-3">
                <label class="form-label" for="year">Year</label>
                <input class="form-control" type="number" placeholder="Year" v-model="newGame.year">
            </div>

            <div class="mb-3">
                <label class="form-label" for="platform">Platform</label>
                <input class="form-control" type="text" placeholder="Platform" v-model="newGame.platform">
            </div>

            <button class="btn btn-primary" type="button" @click="addGame">Add Game</button>
        </form>
    </main>
</template>

<script>
import { ref } from "vue";
export default {
    data: function () {
        return {
            newGame: {
                name: "",
                year: 0,
                platform: "",
                user: ""
            }
        }
    },
    emits: ["updateList"],
    methods: {
        addGame() {
            const url = "http://localhost:3000/games";
            const request = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.newGame)
            };
            fetch(url, request)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response not ok");
                }
                return response.json();
            })
            .then(() => this.$emit("updateList", this.$route.params.user))
            .then(() => this.$router.push({name: "ListGamesUser", params: {user: this.$route.params.user}}))
            .catch(error => console.error("Error adding game", error));

        }
    },
    mounted() {
        this.newGame.user = this.$route.params.user
    }
}
</script>