const state = {
  products: [
    { name: "Product A", price: 10 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 30 },
  ],
  items:0
};

const namespaced = true;

export const productModule = {
  namespaced,

  state,
  mutations: {
    increment (state) {
      state.items++
    },
    addProduct (state,payload) {
      state.products.push(payload);
    },
    deleteProduct (state,payload) {
      console.log(payload,'payload del')
     state.products =  state.products.filter(item => item.name !== payload);
    }
  },
  actions:{
    itemsAdded:(context) =>{
      context.commit('increment')
    },
    addProduct:(context,payload )=> {
      context.commit('addProduct',payload)
    },
    deleteProduct:(context,payload )=> {
      context.commit('deleteProduct',payload)
    }
  }
};
