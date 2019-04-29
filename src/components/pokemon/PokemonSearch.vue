<template>
  <div>
    <h2>{{ title }}</h2>

    <form @submit.prevent="search">
      <label for="search">Pokemon ID:</label>
      <br>
      <!-- v-model directive creates two-way data binding on form input -->
      <input class="input" type="number" v-model.number="id" v-focus placeholder="enter pokemon ID">
      <br>
      <button type="submit" class="button is-primary">Search</button>
    </form>

    <template v-if="details">
      <pokemon-card v-bind:pokemon="details" ></pokemon-card>
    </template>
    <template v-else>{{ message }}</template>

  </div>
</template>

<script>
import PokemonCard from '@/components/pokemon/PokemonCard'

export default {
  name: 'pokemon-search',
  components: {
    pokemonCard: PokemonCard
  },
  data () {
    return {
      title: 'Search by ID',
      id: 1,
      details: null, // Set details to null, details get updated with search function
      message: ''
    }
  },
  methods: {
    // Pokemon Search Function
    search: function () {
      this.details = null
      this.message = 'loading pokémon data...'

      this.axios.get(`pokemon/${this.id}`) // Get pokemon by id from https://pokeapi.co/api/v2/pokemon/{{id}}
        .then(response => {
          this.details = response.data // details data is set to response
          this.message = ''
        })
        .catch(error => { // If ID is not valid give error message
          this.message = `Failed loading Pokémon data with message: ${error.message}`
        })
    }
  }
}
</script>

<style>
.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 1s;
}

.fade-leave {
    /*opacity: 1;*/
}

.fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
}
</style>
