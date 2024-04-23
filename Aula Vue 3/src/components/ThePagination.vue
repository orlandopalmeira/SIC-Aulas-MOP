<template>
    <div class="pagination">
      <button @click="changePage(1)" :disabled="page === 1">|&lt;</button>
      <button @click="changePage(page-1)" :disabled="page === 1">&lt;</button>
      <button v-for="p in lastPage" :key="page" @click="changePage(p)" 
              :class="{current: page===p}">{{ p }}</button>
      <button @click="changePage(page+1)" :disabled="page * pageSize >= games.length">&gt;</button>
      <button @click="changePage(lastPage)" :disabled="page === lastPage">&gt;|</button>
    </div>
</template>

<script>
export default {
    props: ['games', 'pageSize', 'currentPage'],
    emits: ['changePage'],
    data: function () {
        return {
            page: this.currentPage
        }
    },
    computed: {
        lastPage() {
            return Math.ceil(this.games.length / this.pageSize);
        }
    },
    methods: {
        changePage(newPage) {
            this.page = newPage;
            this.$emit('changePage', newPage);
        }
    },
    watch: {
        currentPage() {
            this.page = this.currentPage;
        }
    }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: right;
  gap: 2px;
}
.current {
  background-color: var(--light-background);
  font-weight: bold;
}
</style>