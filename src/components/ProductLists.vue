<template>
    <div class="hello">
     <product-list-one ></product-list-one>
    <product-list-two ></product-list-two>
    
    </div>
  </template>
  
  <script>
import ProductListOne from './ProductListOne.vue'
import ProductListTwo from './ProductListTwo.vue'
  export default {
  components: { ProductListOne, ProductListTwo },
    name: 'ProductLists',
   
   
  }
  </script>
  
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  