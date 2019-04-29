<template>
  <div class="pokemon-paged">
    <button type="button" @click.prevent="prev()" v-bind:disabled="! hasPrev">Previous</button>
    <button type="button" @click.prevent="next()" v-bind:disabled="! hasNext">Next</button>

    <div class="pokemon-paged-page">
      <template v-if="pokemons.length">
        <ul>
          <li v-for="pokemon in pokemons" v-bind:key="pokemon.id">
            {{pokemon.name}} {{pokemon.id}}
          </li>
        </ul>
      </template>
      <template v-else>
        <p>Loading...</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pokemon-paged',
  data: function () {
    return {
      data: null
    }
  },
  created: function () {
    const limit = 20
    const offset = 0 * limit
    const url = `pokemon/?offset=${offset}&limit=${limit}`

    this.axios.get(url)
      .then(response => {
        this.data = response.data
      })
      .catch(error => console.error(error))
  },
  computed: {
    pokemons: function () {
      if (this.data && this.data.results) {
        return this.data.results
      } else {
        return []
      }
    },
    hasPrev: function () {
      return this.data && this.data.previous
    },
    hasNext: function () {
      return this.data && this.data.next
    }
  },
  methods: {
    prev: function () {
      if (!this.hasPrev) { return }

      this.axios.get(this.data.previous)
        .then(response => {
          this.data = response.data
        })
        .catch(error => console.error(error))
    },
    next: function () {
      if (!this.hasNext) { return }

      this.axios.get(this.data.next)
        .then(response => {
          this.data = response.data
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

<style>
  ul {
    padding: 0;
    margin-top: 20px;
    list-style-type: none;
  }
  ul li {
    padding-right: 5px;
  }
  ul a {
    text-decoration: none;
    color: #CC0000;
  }

  ul a:hover {
    color: #CC0000;
    text-decoration: none;
    font-weight: bold;
  }
</style>
