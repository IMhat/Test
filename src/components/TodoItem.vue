<template>
    <div class="todo" >
        <div class="todo-body" >
            <div type="checkbox">
                
                
            {{todo.title}}
            </div>
        </div>

        <div class="todo-actions">
            <button @click="$emit('delete-todo', todo.id)">Eliminar</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TodoItem',
        props: ['todo'],

    }
</script>

<style scoped>
    .todo{
        border-bottom: solid 1px #ccc;
        padding: 10px;
    }

    .todo:not(.completed):hover{
        background-color: #eee;
    }



    .completed .todo-body{
        text-decoration: line-through;
    }

    .todo-body, .todo-actions{
        display: inline-block;
        vertical-align: top;
    }

    .todo-body{
        width: 85%;
    }
    .todo-actions{
        padding: 0 10px;
        width: 10%;
    }

    button{
        border: none;
        border-radius: 3px;
        padding: 10px;
        background-color: #ccc;
        color: black;
    }
    button:hover{
        background-color: #da2020;
        color: white;
    }
</style>