<template>
  <div class="search">
    <pokemon-search/>
  </div>
</template>

<script>
import PokemonSearch from '@/components/pokemon/PokemonSearch.vue'

export default {
  components: {
    pokemonSearch: PokemonSearch
  }
}
</script>
