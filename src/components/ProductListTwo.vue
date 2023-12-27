<template>
    <div class="product-list-two">
      <h1>Product List Two</h1>
      <ul>
        <li v-for="item in products" :key="item.price">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductListTwo',
    props: ['products']
  }
  </script>
  
  <style scoped>
  .product-list-two {
    font-family: Arial, sans-serif;
    margin: 40px;
  }
  
  h1 {
    text-align: center;
    color: #2c3e50;
  }
  
  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
  }
  
  li {
    margin: 10px;
    padding: 5px 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #98efb4;
  }
  
  li:hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
  </style>
  
  