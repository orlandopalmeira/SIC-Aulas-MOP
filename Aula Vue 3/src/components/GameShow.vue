<template>
    <div>
        <h3>{{ game.name }}</h3>
        <p>
            Id: {{ game.id }}<br>
            Year: {{ game.year }}<br>
            Platform: {{ game.platform }}<br>
            User: {{ game.user }}
        </p>
        <RouterLink :to="{ name: 'ListGames' }">Close</RouterLink>
    </div>
</template>

<script>
export default {
    props: ['user', 'id'],
    data: function () {
        return {
            game: {name: "", year: 0, platform: "", user: ""}
        }
    },
    created() {
        const fg = this.$root.games.find(g => g.id === this.id);
        if (fg !== undefined) {
            this.game = fg;
        }
    },
    watch: {
        id(newId) {
            const fg = this.$root.games.find(g => g.id === newId);
            if (fg !== undefined) {
                this.game = fg;
            }
        }
    }
}
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    min-width: 50%;
    padding: 10px;
    margin: 10px;
    float: left;
}
</style>