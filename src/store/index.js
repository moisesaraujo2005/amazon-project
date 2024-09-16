import { createStore } from 'vuex'

export default createStore({
  state: {
    products:[
      {id:1,
        name:'Blazer mid',
        price :250
      },
    ],
  cart:[]

  },
  getters: {
  },
  mutations: {
    addProduct(state, product) {
      console.log('Adicionando produto:', product); 
      state.cart.push(product);
    },
    removeProduct(state, id) {
      console.log('Removendo produto com o ida', id); 
      const index = state.cart.findIndex(item => item.id === id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      } }
  },
  actions: {
  },
  modules: {
  }
})
