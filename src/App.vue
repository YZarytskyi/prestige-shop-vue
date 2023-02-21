<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/admin/category">Categories</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

html {
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: #171a21;
  color: #ffffff;
  overflow-y: scroll;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

ul {
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
p,
ul {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
button {
  border: none;
  font-family: inherit;
  cursor: pointer;
  padding: 0;
  color: inherit;
  font-size: inherit;
  background-color: transparent;
}
input {
  border: none;
  outline: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
