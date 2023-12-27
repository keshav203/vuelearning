<template>
  <div id="app">
    <nav class="navbar">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/form">Form</router-link>
        </li>
        <li>
          <router-link to="/productlist">Product List</router-link>
        </li>
      </ul>
    </nav>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Home name="Keshav" :age='25'/> -->
     <!-- <Home name="Vashu" :age='20'/> -->
     <!-- <Employees /> -->
     <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
import Employees from './components/Employees.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    Employees
    // Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app .navbar {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background-color: #f2f2f2;
  padding: 10px;
}

#app .navbar ul {
  list-style-type: none;
  padding: 0;
}

#app .navbar li {
  display: inline-block;
  margin: 0 10px;
}

#app .navbar li a {
  text-decoration: none;
  color: #2c3e50;
  padding: 5px 10px;
  border-radius: 5px;
}

#app .navbar li a:hover {
  background-color: #ddd;
}

#app .navbar li a.router-link-exact-active {
  background-color: #2c3e50;
  color: #fff;
}
</style>
