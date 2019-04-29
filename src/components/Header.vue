<template>
  <header>
  <h1>Pokémon Pokédex</h1>
    <router-link to="/"><img src="./../assets/logo.png"></router-link>
    <div id="nav">
      <router-link to="/"><a>Home</a></router-link> <!-- Route 1 -->
      <router-link to="/search"><a>Search</a></router-link> <!-- Route 2 -->
      <router-link to="/browse"><a>Browse</a></router-link> <!-- Route 3 -->
    </div>
  </header>
</template>

<script></script>

<style>
header {
  margin-top: 20px;
  position: relative;
}
#nav {
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}
</style>
