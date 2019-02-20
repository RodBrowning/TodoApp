<template>
    <div id="list-item">
        <label>
            <input type="checkbox" v-on:change="markAsDone">
            <p v-bind:class="{'done':todo.doneTask}">{{ todo.task }}</p>
            <button @click="$emit('deleteConfirmation', todo.id, index, todo.task)"><i class="far fa-times-circle"></i></button>            
        </label>
    </div>
</template>

<script>
export default {
    name: 'list-item',
    props: ["todo","index"],
    methods: {
        markAsDone (){
            this.todo.doneTask = !this.todo.doneTask;
        }
    }
}
</script>

<style scoped>
    #list-item {
        padding-left: 10px;
    }
    label {
        display: flex;
        justify-content: space-between;
        flex: 25;
        position: relative;
    }
    input[type='checkbox'] {
        display: none;
    }
    p {
        flex: 30;
        font-weight: bold;
        color: darkslategrey;
        margin: 1px;
        margin-left: 2.5rem;
        cursor: pointer;
    }
    input[type='checkbox'] + p::before {
        position: absolute;
        content: "";
        margin: 5px 6px;
        border: 4px solid;
        height: 1rem;
        width: 1rem;
        left: 0;
        box-shadow: inset 0 0 0px 0px;
        transition: box-shadow .3s;
    }    
    input[type='checkbox']:checked + p::before {
        content: "";
        box-shadow: inset 0 0 20px 10px;
    }
    button {
        border: 0;
        border-left: 0;
        background-color: white;
        color: black;
        font-family: monospace;
        font-size: .8em;
        font-weight: bolder;
        display: flex;
        flex: 2;
        justify-content: center;
        transition: border .5s, background-color .5s;
    }
    button:hover {
        background-color: #e73b32;
        border-left: 2px solid #e73b32;
        color: white;
        cursor: pointer;
    }
    button:active {
        outline: indianred;
    }
    button:focus {
        outline: none;
    }
    button i {
        color: #e73b32;
        font-size: 20px;
        transition: color .5s;
    }
    button:hover i{
        color: white;
        font-size: 21px;
    }
    .done {        
        text-decoration: line-through;
    }

    @media screen and (max-width: 425px){
        button {
            flex: 3;
        }
    }
</style>


