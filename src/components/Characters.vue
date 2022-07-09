<template lang="html">
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css"></link>
   <div>
    <h1>Characters Of Marvel!</h1>
      
      
        <div class="card-container">

            <div class="card" v-for="character in characters">
                <h3>{{character.name}}</h3>
                <router-link :to="{ name: 'character', params: { id: character.id} }">
                {{character.name}}

                <button type="button" name="button" class="btn">View</button>
                
                </router-link>

            </div> 
      </div>


   </div> -->
   <div class="home">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css">

    <div class="hero is-white is-gradient is-bold">

        <div class="hero-boody">

            <h1 class="title">

                <span class="has-text">Marvel</span>
                <span class="subtitle">Characters</span>

            </h1>

            
            <div class="field has-addons is-pulled-right">

                <div class="control">
                    <input v-model="search" type="text" class="input is-rounded" v-on:keyup.enter="searchData">
                </div>
                <div class="control">
                    <button class="button is-rounded" v-on:click="searchData">Buscar</button>
                </div>
            </div>


            

            <div class="container">
                <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
                    <div class="column is-12-mobile is-4 desktop is-4-tablet" v-for="character in characters" v-bind:key="character.id">
                        
                            <div class="card">
                                <div class="card-header">
                                    <img :src="url" v-bind:alt="character.name">
                                </div>

                                <div class="card-content">
                                    <h3 class="title is-size-4">{{character.name}}</h3>

                                    <router-link :to="{ name: 'character', params: { id: character.id} }">
                                    <button id="btn-ver" class="button is-rounded is-small">Ver mas</button>
                                    </router-link>

                                </div>

                            </div>
                    </div>

                </div>


            </div>


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

    data(){

      return{
        // characters: [],
        url: '',
        size: 'standard_large.jpg'
      }

    },

    mounted(){
    //   this.getCharacters()

    

        this.$store.dispatch('getCharacters')
        console.log(this.characters)
        this.$store.dispatch('getCharacter', this.$route.params.id)

        this.getImage()

    },

    computed: {

        ...mapState({
            characters: state => state.characters,
            preUrl: state => state.url
        })

    },

    methods: {

        getImage: function(){

            this.url = `${this.preUrl}${this.size}`

        }


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

    #btn-ver{
        background-color: rgb(168, 168, 168);
        font-size: larger;
        font-weight:bold;
    }



</style>