<template>
    <div>
        <div>
            <div class="headerDiv" ref="header">
                <Header/>
            </div>
            <div class="formDiv" ref="form">
                <AddTodo v-on:addTodo="addTodo"/>
            </div>
        </div>        
        <div>
            <Todos v-bind:todos="todos" v-on:deleteTask="deleteTask"/>
        </div>
        
    </div>
</template>
<script>
import Header from './pages/Header';
import Todos from './pages/Todos';
import AddTodo from './pages/AddTodo';
import {TimelineLite} from 'gsap/TweenMax';

export default {
    name: 'todo-app',
    components: {
        Header,
        Todos,
        AddTodo
    },
    data(){
        return {
        todos: [
            {
                id: 1,
                task: "Primeira tarefa",
                doneTask: false
            },
            {
                id: 2,
                task: "Segunda tarefa",
                doneTask: false
            }
        ],
        topDivs: this.$refs
        }
    },
    methods: {
        deleteTask (id){            
            this.todos = this.todos.filter(todo => todo.id != id);
        },
        addTodo (newTask){
            this.todos = [...this.todos, newTask];
        }
    },
    mounted (){
        let header = this.topDivs.header;
        let form = this.topDivs.form;
        let timelineTop = new TimelineLite();
        timelineTop.to(header, .7, {top: 0});
        timelineTop.to(form, 1.2, {top: 0},.45);
    }
}
</script>

<style scoped>
    .headerDiv{
        position: relative;
        top: -100px;
    }
    .formDiv{
        position: relative;
        top: -100px;
    }
</style>
