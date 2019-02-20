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
            <Todos v-bind:sendedTodos="todos" v-on:deleteTask="deleteTask" v-on:doneTask="doneTask"/>
        </div>
        
    </div>
</template>
<script>
import Header from './pages/header/Header';
import AddTodo from './pages/header/AddTodo';
import Todos from './pages/body/Todos';
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
                doneTask: true
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
        },
        doneTask(id){
            this.todos = this.todos.map(todo => {
                if( todo.id == id ) { todo.doneTask = !todo.doneTask }
                return todo;
            });
        }
    },
    mounted (){
        let {header} = this.topDivs;
        let form = this.topDivs.form;
        let timelineTop = new TimelineLite();
        timelineTop.to(header, 1.2, {top: 0}).delay(.5);
        timelineTop.to(form, 1.2, {top: 0}, .2);
    }
}
</script>

<style scoped>
    .headerDiv{
        position: relative;
        top: -120px;
    }
    .formDiv{
        position: relative;
        top: -200px;
    }
</style>
