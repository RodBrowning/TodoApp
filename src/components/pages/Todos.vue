<template>
    <div>
        <transition name="fade">
            <div ref="confirmRemove" class="alertWrapper" v-if="showConfirmation">
                <div class="confirmationAlert">
                    <p>{{ deleteConfirmationMsg }}</p>
                    <p>{{ taskForDelete }}</p>
                    <div>
                        <button @click="deleteTask">Confirmar</button>
                        <button @click="hideDeleteConfirmation">Cancelar</button>
                    </div>
                </div>
            </div>
        </transition>
        <div>        
            <ul>
                <li ref="task" v-for="(todo, index) in todos" v-bind:key="index">
                    <ListItens v-bind:todo="todo" v-bind:index="index" v-on:deleteConfirmation="deleteTaskConfirmation" />
                </li>
            </ul>
        </div>        
    </div>    
</template>

<script>
import ListItens from './ListItens';
import { TimelineLite } from "gsap/TweenMax";

export default {
    name: 'todos',
    components: {
        ListItens
    },
    props: ["todos"],
    data(){
        return {
            task: this.$refs,
            deleteConfirmationMsg: 'Confirma a exclusão da tarefa:',
            showConfirmation: false,
            taskForDelete: '',
            idForDelete: -1,
            indexForDelete: -1
        }
    },
    methods: {        
        deleteTaskConfirmation (id, index, task){
            this.showDeleteConfirmation();
            this.taskForDelete = task;
            this.idForDelete = id;
            this.indexForDelete = index;            
        },
        deleteTask(){           
            let task = this.task.task;
            let id = this.idForDelete;
            let index = this.indexForDelete;

            let timeline = new TimelineLite();     
            timeline.to(task[index], .7, {opacity: 0});

            this.hideDeleteConfirmation(); 
            setTimeout(()=>{                
                this.$emit('deleteTask', id);
            },400);            
        },
        showDeleteConfirmation (){
            this.showConfirmation = true;
        },
        hideDeleteConfirmation (){
            this.showConfirmation = false;
        }
    },
    mounted(){
        let { task } = this.task;
        let timeline = new TimelineLite();            
        timeline.staggerTo(task, 1, {left:100, opacity:1}, .3 , "stagger").delay(.3);
    },
    updated(){
        let { task } = this.task;        
        let timeline = new TimelineLite();     
        timeline.to(task, 1, {left:100, opacity:1});
    }
}
</script>

<style scoped>
    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: 5px 0 0 0;
        line-height: 2em;
        color: darkslategray;        
        padding: 0;
    }
    li {        
        border: 1px solid darkgrey;
        background-color: #f5f5f5a1;
        opacity: 0;
    }

    /* Alerts */
    .alertWrapper {        
        position: relative;
        transform: translateY(0);
        font-weight: 400;
        height: 80px;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
    }    
    .confirmationAlert {
        background-color: #ff634794;
        border: 2px solid;
        border-color: firebrick;        
        color: white;
        padding: 1rem;
        margin-top: .4rem;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .confirmationAlert p {
        margin: 0;
        text-transform: uppercase;
        font-weight: 400;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s, transform .5s, height .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
        opacity: 0;
        transform: translateY(-200px);
        height: 0;
    }
    @media screen and (max-width: 890px) {
        .alertWrapper {
            height: 120px; 
        }
        .confirmationAlert {
            padding: 0;
        }
        .confirmationAlert p {
            margin: 6px;
        }
        .fade-enter-active, .fade-leave-active {
        transition: opacity .5s, transform .5s, height .5s;
        }
        .fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
            opacity: 0;
            transform: translateY(-200px);
            height: 0;
        }
    }
    
</style>


