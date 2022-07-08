<template lang="html">

  <div>
        <div class="flex-container">

            <div class="flex" v-for="char in character">
               <h3>
                {{char.name}}
               </h3>
               <p>
                   {{char.description}}
               </p>

            </div>
            <div class="flex2">
                <img :src="url" alt="" class="char-img">

            </div>

        
        
            <!-- <h3> Hello this is character</h3>
            <p>{{ this.$route.params.id }}</p> -->

            <!-- <ul>
                <li v-for="char in character">
                        {{char.name}}
                        {{char.description}}

                </li>
            </ul> -->

            

        </div>

        <router-link to="/">
             <button type="button" name="button" class="btn-back">Back</button>

        </router-link>
       

  </div>

</template>


<script>
  
   import { public_key } from '../marvel'
   import axios from 'axios'

   import { mapState } from 'vuex'
 
  export default{
    name:'Character',

    data(){

        return {
            // character: [],
            url: '',
            size: 'standard_large.jpg',
        }

    },

    mounted(){

        this.$store.dispatch('getCharacter', this.$route.params.id)

        this.getImage()

    },

    computed:{

        ...mapState({
            character: state => state.character,
            preUrl: state => state.url
        })

    },

    // mounted(){


    //     this.getCharacter()
    // },

    methods: {

        getImage: function(){

            this.url = `${this.preUrl}${this.size}`

        }




        // getCharacter: function(){

        //     var characterId = this.$route.params.id


        //     axios.get(`https://gateway.marvel.com:443/v1/public/characters/${characterId}?apikey=${public_key}`)
        //     .then((result) =>{
        //         console.log(result)

        //         result.data.data.results.forEach((item) =>{

        //             this.character.push(item)


        //             this.url = `${item.thumbnail.path}/${this.size}`

        //             console.log(this.url)
        //         })
        //     })
        //     .catch((error) =>{
        //         console.log(error)
        //     })
        // }

    }

  }
</script>

<style lang="css">
    .flex-container{
        margin: 200px;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .flex{
        flex: 50%;
        text-align: right;
    }

    .flex2{
        flex: 50%;
    }

    .char-img{
        width: 50%;
        border-radius: 10px;

    }

    .btn-back{
        width: 200px;
        padding: 15px;
        border-radius: 25px;
        background-color: black;
        color:white;
        cursor: pointer;
        font-size: 20px;
        margin-bottom: 100px;
    }


</style>