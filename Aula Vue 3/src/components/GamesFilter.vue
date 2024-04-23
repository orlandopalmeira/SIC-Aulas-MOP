<template>
  <form>
    <fieldset>
      <legend>Filter</legend>
      <!-- v-model faz bind bidirecional - subsitui v-bind e @change -->
      <select v-model="yearFilter" @change="yearSelected">
        <option value="">Year...</option>
        <option v-for="y in years" v-bind:key="y">{{ y }}</option>
      </select>
      <select v-model="platformFilter" @change="platformSelected">
        <option value="">Platform...</option>
        <option v-for="p in platforms" :key="p">{{ p }}</option>
      </select>
      <button @click.prevent="resetFilters">Reset</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  props: ['games'],
  emits: ['year', 'platform'],
  data: function () {
    return {
      yearFilter: "",
      platformFilter: ""
    }
  },
  computed: {
    years() {
      return [...new Set(this.games.map(game => game.year))].sort();
    },
    platforms() {
      return [...new Set(this.games.map(game => game.platform))].sort();
    }
  },
  methods: {
    resetFilters() {
      this.yearFilter = "";
      this.platformFilter = "";
      this.$emit('year', '');
      this.$emit('platform', '');
    },
    yearSelected(event) {
      this.$emit('year', event.target.value);
    },
    platformSelected(event) {
      this.$emit('platform', event.target.value);
    }
  }
}
</script>
