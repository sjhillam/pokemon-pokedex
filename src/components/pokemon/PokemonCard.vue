<template>
  <transition name="fade" mode="out-in">
    <div>
      <img v-bind:src="pokemon.sprites.front_default" />
      <p><b>Pokemon ID:</b> {{pokemon.id}}</p>
      <p><b>Pokemon Name:</b> {{pokemon.name}}</p>
      <p><b>Type:</b></p>
      <ul class="type-list">
        <li v-for="type in types" v-bind:key="type.slot">{{type.type.name}}</li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'pokemon-card',
  props: ['pokemon'], // Communicating between coponents with props
  computed: {
    types: function () {
      // .slice(0) clones the array (see https://davidwalsh.name/javascript-clone-array)
      return this.pokemon.types.slice(0).sort((type1, type2) => (type1.slot - type2.slot))
    }
  }
}
</script>

<style>
.type-list {
  margin: 0;
  display: inline-block;
  text-align: left;
  list-style-type: none;
}
</style>
