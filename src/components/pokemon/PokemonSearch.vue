<template>
  <div class="search-form">
    <h2>{{ title }}</h2>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <!-- Was in the process of using this numberCount
           function to update the search field-->
      <p>{{numberCount}}</p>
    <form @submit.prevent="search">
      <label for="search">Pokemon ID:</label>
      <br>
      <!-- v-model directive creates two-way data binding on form input -->
      <input class="input" type="number" v-focus @input="$v.input.$touch()" v-model.number="id" placeholder="Pokémon ID">
      <br>
      <br>
      <button type="submit" class="button is-primary">Search</button>
    </form>

    <template v-if="details">
      <transition name="fade" mode="out-in">
        <pokemon-card v-bind:pokemon="details" ></pokemon-card>
      </transition>
    </template>

    <template v-else>{{ message }}</template>

  </div>
</template>

<script>
import PokemonCard from '@/components/pokemon/PokemonCard'

import Vue from 'vue'
import Vuex from 'vuex'
// import { mapState } from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

import { required, lengthrange } from 'vuelidate/lib/validators'
export default {
  name: 'pokemon-search',
  components: {
    pokemonCard: PokemonCard
  },
  data () {
    return {
      title: 'Search by ID',
      details: null, // Set details to null, details get updated with search function
      id: 1,
      message: ''
    }
  },
  validations: {
    input: {
      required,
      lengthrange
    }
  },
  computed: {
    numberCount () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
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
          this.message = `Failed loading Pokémon`
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
