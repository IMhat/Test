import { createStore } from 'vuex'
import axios from 'axios'

import { public_key } from '../marvel'

export default createStore({
  state: {
    characters: [],
    character: [],
    url: ''
  },
  getters: {
  },
  mutations: {
    getCharacters(state){

      const params = {

        name: this.search

        }

      state.characters = []

      axios.get(`https://gateway.marvel.com:443/v1/public/characters?apikey=${public_key}`)

      .then((result) =>{

        

        result.data.data.results.forEach((item) =>{

          console.log(item)

          state.characters.push(item)
        })

      })
      .catch((error) => {
        console.log(error)
      })

    },

    searchData (){
      this.page = 1
      this.fetch();

    },

    getCharacter(state, id) {


      state.character = [];

      axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${public_key}`)
      .then((result) =>{
          console.log(result)

          result.data.data.results.forEach((item) =>{

              state.character.push(item)


              state.url = `${item.thumbnail.path}/`

              // console.log(this.url)
          })
      })
      .catch((error) =>{
          console.log(error)
      })

    }
  },
  actions: {

    getCharacters: context => {

      context.commit('getCharacters')
    },

    getCharacter(context, id){

      context.commit('getCharacter', id)

    }
     

  },
  modules: {
  }
})
