<template>
    <div id="list-item">
        <div>
            <input type="checkbox" v-on:change="markAsDone">
            <p v-bind:class="{'done':todo.doneTask}">{{ todo.task }}</p>
            <div class="buttonDiv">
                <button @click="$emit('deleteConfirmation', todo.id, index, todo.task)">X</button>
            </div>            
        </div>
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
    #list-item>div {
        display: flex;
        align-items: center;            
        padding-left: 15px;
    }
    p {
        flex: 25;
        font-weight: 400;
        margin: 1px;
    }
    input[type='checkbox'] {
        position: relative;
        margin: 0 6px;
        top: 1.2px;
        flex: 1;
        cursor: pointer;
    }
    .buttonDiv {
        display: flex;
        justify-content: center;
        align-items: center;        
        margin-right: 1em;
    }
    button {
        border: 1px solid black;
        background-color: white;
        color: black;
        border-radius: 1rem;
        font-family: monospace;
        font-size: .8em;
        font-weight: bolder;
        width: 1.2rem;
        padding: 0;
    }
    button:hover {
        border-color: darkslategrey;
        color: darkslategrey;
        background-color: crimson;
        color: white;
        height: 1.15rem;
        width: 1.15rem;
        box-shadow: 0 0 0 2px indianred;
        cursor: pointer;
        transition-property: 'background-color';
        transition-duration: .1s;
        transition-timing-function: linear;
    }
    button:active {
        outline: indianred;
        box-shadow: 0 0 10px 2px indianred;
    }
    button:focus {
        outline: none;
    }
    .done {        
        text-decoration: line-through;
    }
</style>


