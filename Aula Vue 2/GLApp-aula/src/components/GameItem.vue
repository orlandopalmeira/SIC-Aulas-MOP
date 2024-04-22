<template>
    <article class="game">
        <h2>{{ game.name }}</h2>
        <div class="info">
            <span>{{ game.year }} - {{ game.platform }} ({{ game.user }})</span>
            <div>
                <a 
                    class="btn btn-secondary mx-2" 
                    data-bs-toggle="collapse" 
                    :href="'#collapse' + game.id" 
                    role="button" 
                    aria-expanded="false" 
                    :aria-controls="'collapse' + game.id">Show</a>
                <button class="btn btn-secondary" @click="removeGame(game.id)">Remove</button>
            </div>
        </div>
    </article>
    <div class="collapse" :id="'collapse' + game.id">
        <div class="card card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">User</th>
                        <th scope="col">Name</th>
                        <th scope="col">Year</th>
                        <th scope="col">Platform</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ game.user }}</td>
                        <td>{{ game.name }}</td>
                        <td>{{ game.year }}</td>
                        <td>{{ game.platform }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: ['game'],
    emits: ['remove'],
    methods: {
        removeGame(id) {
            this.$emit('remove', id);
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
</style>