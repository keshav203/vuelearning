<template>
    <div class="product-list-one">
      <h1>Product List {{ items }} </h1>
      <ul>
        <li v-for="item in products" :key="item.price">
          {{ item.name }} <span @click="deleteProduct(item.name)">x</span>
        </li>
      </ul>
      <input class="input-field" placeholder="Enter name" type ="text" v-model="name" /> <br/>
      <input class="input-field" placeholder="Enter Price" type ="text" v-model.number="price" /> <br/>
      <button :disabled="!name" @click="increment">Add Item</button>
    </div>
  </template>

  <script>
  import store from '../store'
  export default {
  mounted(){
    console.log(this.$store.state.productModule.products,'storee')
  },
  data(){
    return{
      name:'',
      price:null
    }
  },
    computed: {
   
    products(){
        return this.$store.state.productModule.products
    },
    items(){
      return this.$store.state.productModule.items
    }
  },
  methods: {
  increment() {
    console.log(this.$store)
    const payload={
      name: this.name, price: this.price 
    }
    this.$store.dispatch('productModule/addProduct',payload);
    this.$store.dispatch('productModule/itemsAdded');
    
    this.name='';
    this.price=''
    
  },
  deleteProduct(val){
    console.log(val)
    this.$store.dispatch('productModule/deleteProduct',val);
  }
  
},
    name: 'ProductListOne',
    
  }
  </script>
  
  <style scoped>
  .product-list-one {
    font-family: Arial, sans-serif;
    margin: 40px;
  }
  .input-field{
    width: 300px;
    height: 44px;
    margin:10px 10px 10px 10px;
    background-color: rgb(250, 233, 233);
    padding: 10px;
    border: none;
    border-radius: 10px;
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
    background-color: #f2f2f2;
  }
  
  li:hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
  </style>
  
  