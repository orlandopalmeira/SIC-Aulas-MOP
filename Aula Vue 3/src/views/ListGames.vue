<template>
  <main>
    <ThePagination v-if="filteredGames.length > pageSize"
      :games="filteredGames" :pageSize="pageSize" :currentPage="currentPage"
      @change-page="onChangePage" />
    <GameItem 
      v-for="game in paginatedGames" 
      :key="game.id" :game="game" 
      @remove="removeGame" />
    <ThePagination  v-if="filteredGames.length > pageSize"
      :games="filteredGames" :pageSize="pageSize" :currentPage="currentPage"
      @change-page="onChangePage" />
    <router-view></router-view>
  </main>
  <aside>
    <GamesFilter :games="filteredGames" @year="changeYear" @platform="changePlatform"></GamesFilter>
  </aside>
</template>

<script>
import GameItem from '@/components/GameItem.vue';
import GamesFilter from '@/components/GamesFilter.vue';
import ThePagination from '@/components/ThePagination.vue';
export default {
  props: ['games', 'user'],
  emits: ['remove', 'add'],
  components: {
    GameItem,
    GamesFilter,
    ThePagination
  },
  data: function () {
    return {
      pageSize: 5,
      currentPage: 1,
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
      const filterGames = (game) =>
               ((!this.yearFilter || game.year === parseInt(this.yearFilter)) 
             && (!this.platformFilter || game.platform === this.platformFilter)
             && (!this.user || game.user === this.user));
      return this.games.filter(filterGames);
/*      return this.games.filter(game => {
        return ((!this.yearFilter || game.year === parseInt(this.yearFilter)
        ) && (!this.platformFilter || game.platform === this.platformFilter))
      });*/
    },
    paginatedGames() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.filteredGames.slice(start, start + this.pageSize);
    },
    lastPage() {
      return Math.ceil(this.filteredGames.length / this.pageSize);
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


