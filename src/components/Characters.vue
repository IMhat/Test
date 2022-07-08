<template lang="html">
   <div>
    <h1>Characters Of Marvel!</h1>
      
        <div class="card-container">

            <div class="card" v-for="character in characters">
                <h3>{{character.name}}</h3>
                <router-link :to="{ name: 'character', params: { id: character.id} }">
                <!-- {{character.name}} -->

                <button type="button" name="button" class="btn">View</button>
                
                </router-link>

            </div>

    
           
      </div>
   </div>
   

</template>

<script>

import { public_key, secret_key } from '../marvel';

import { mapState } from 'vuex'

import axios from 'axios'

  export default {
    name: 'Characters',

    // data(){

    //   return{
    //     characters: []
    //   }

    // },

    mounted(){
    //   this.getCharacters()

    

    this.$store.dispatch('getCharacters')
    console.log(this.characters)

    },

    computed: {

        ...mapState({
            characters: state => state.characters
        })

    },

    methods: {

    // getCharacters: function(){

    //   axios.get(`https://gateway.marvel.com:443/v1/public/characters?apikey=${public_key}`)

    //   .then((result) =>{

        

    //     result.data.data.results.forEach((item) =>{

    //       console.log(item)

    //       this.characters.push(item)
    //     })

    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

      

    // }
  }

  }
</script>

<style lang="css">
    .card-container{
        
        display: grid;
        grid-template-columns: 200px 200px 200px;
        grid-gap: 10px;
        justify-content: center;
        

    }

    .card {
        text-align: center;
        background-color: gray;
        min-height: 200px;
       
        
    }

    .card h3 {
        color: white;
    }

    .btn{
        padding: 10px;
        margin:auto;
        border-radius: 15px;
        width: 120px;

        background-color: transparent;

        color: white;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;

    }

</style>