<template>
    <main>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" @click="decPage()">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li v-for="i in pages" class="page-item"><a class="page-link" href="#" @click="pageNum = i">{{ i }}</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next" @click="incPage()">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
        <GameItem v-for="game in filteredGames.slice(pageNum*5-5, pageNum*5)" :key="game.id" :game="game" @remove="removeGame"></GameItem>
    </main>
    <aside>
        <GamesFilter 
        :games="filteredGames" 
        @year="changeYear" @platform="changePlatform"></GamesFilter>
    </aside>
</template>

<script>
import GameItem from '@/components/GameItem.vue';
import GamesFilter from '@/components/GamesFilter.vue';
export default {
    props: ['games', 'user'],
    emits: ['remove', 'add'],
    components: {
        GameItem,
        GamesFilter
    },
    data: function () {
        return {
            pageNum: 1,
            yearFilter: "",
            platformFilter: "",
            newGame: { name: "", year: new Date().getFullYear(), platform: "" }
        }
    },
    computed: {
        years() {
            return [...new Set(this.games.map(game => game.year))].sort();
        },
        platforms() {
            return [...new Set(this.games.map(game => game.platform))].sort();
        },
        filteredGames() {
            return this.games.filter(game => {
                return ((!this.yearFilter || game.year === parseInt(this.yearFilter)
                ) && (!this.platformFilter || game.platform === this.platformFilter))
            });
        },
        pages() {
            return Math.ceil(this.filteredGames.length / 5);
        }
    },
    methods: {
        removeGame(gameId) {
            this.$emit('remove', gameId);
        },
        addGame() {
            this.$emit('add', this.newGame);
            this.newGame = { name: "", year: new Date().getFullYear(), platform: "" };
        },
        changeYear(year) {
            console.log("Ano: "+year);
            this.yearFilter = year;
            this.currentPage = 1;
        },
        changePlatform(platform) {
            this.platformFilter = platform;
            this.currentPage = 1;
        },
        onChangePage(page) {
            this.currentPage = page;
        },
        incPage(){
            if(this.pageNum < this.pages)
                this.pageNum++;
        },
        decPage(){
            if(this.pageNum > 1)
                this.pageNum--;
        }
    },
    watch: {
        user() {
            this.yearFilter = "";
            this.platformFilter = "";
            this.currentPage = 1;
        }
    }
}
</script>
