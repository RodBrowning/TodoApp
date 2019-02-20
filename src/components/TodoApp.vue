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
            <Todos v-if="todos" v-bind:sendedTodos="todos" v-on:deleteTask="deleteTask" v-on:doneTask="doneTask"/>
        </div>
        
    </div>
</template>
<script>
import Header from './pages/header/Header';
import AddTodo from './pages/header/AddTodo';
import Todos from './pages/body/Todos';
import {TimelineLite} from 'gsap/TweenMax';
import Axios from '../serve';

export default {
    name: 'todo-app',
    components: {
        Header,
        Todos,
        AddTodo
    },
    data(){
        return {
            todos: false,
            topDivs: this.$refs
        }
    },
    methods: {
        async deleteTask (id){
            console.log("deleteTask listen");
            await Axios.deleteTask(id);
            await Axios.getAllTasks()
            .then(res => this.todos = res.data)
            .then(()=>{
                this.todos = this.todos.filter(todo => todo.id != id);
            });
            
        },
        addTodo (newTask){
            Axios.postTask(newTask)
            .then(()=>{
                Axios.getAllTasks()
                .then(res => this.todos = res.data)
            });
        },
        doneTask(id){
            this.todos = this.todos.map(todo => {
                if( todo._id == id ) {
                    todo.doneTask = !todo.doneTask;
                    Axios.putTask(id, todo.doneTask);
                }
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
        Axios.getAllTasks()
        .then(res => this.todos = res.data);
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
