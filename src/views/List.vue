<template>
  <div class="list">
    <h1>Favorite Characters List page</h1>

  </div>
    <div>


    <div id="header">
      <Search v-on:query-change="querySearch" />
    </div>

    <div id="main-container">
      <h2>Characters</h2>
      <TodoAdd v-on:add-todo="addTodo"/>
      <Todos v-bind:todoslist="copyTodos" v-on:delete-todo="deleteTodo" />

      
      

    </div>
  </div>


</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Search from '../components/Search';
import Todos from '../components/Todos';
import TodoAdd from '../components/TodoAdd';


export default {
  name: 'App',
  components: {
    Todos, TodoAdd, Search
  },


  methods: {

    // getCharacters: function(){

    //   axios.get(`https://gateway.marvel.com:443/v1/public/characters?apikey=${public_key}`)

      

    // },






    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id != id);
      this.copyTodos = [...this.todos];
    },
    addTodo(todo){
      this.todos.push(todo);
      this.copyTodos = [...this.todos];
    },
    querySearch(query){
      if(query.trim() === ''){
        this.copyTodos = [...this.todos];
      }else{
        const temp = this.todos.filter(todo =>{
          return todo.title.includes(query)
        });

        this.copyTodos = [...temp];
      }
    }
  },

  data(){
    return {
      todos: [
        {
          id: 0,
          title:  '3-D Man',
          completed: false
        },
        {
         id: 1,
         title: 'Adam Warlock',
         completed: false
       },
       {
         id: 2,
         title: 'Aero (Aero)',
         completed: false
       },

      ],
      copyTodos: [],

    }
  },

  created(){
    this.copyTodos = [...this.todos];
   
  }


}
</script>



<style>

.text2{
  margin-bottom: 1000px;
  font-size: larger;
  padding-top: 100px;
  padding-bottom: 100px;
  

}

</style>