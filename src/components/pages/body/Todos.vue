<template>
    <div>
        <transition name="fade">
            <div ref="confirmRemove" class="alertWrapper" v-if="showConfirmation">
                <div class="confirmationAlert">
                    <div class="messenges">
                        <p>{{ deleteConfirmationMsg }}</p>
                        <p>{{ taskForDelete }}</p>
                    </div>
                    <div class="buttons">
                        <button class="redButton" @click="hideDeleteConfirmation">Cancelar</button>
                        <button class="greenButton" ref="btnConfirm" @click="deleteTask">Confirmar</button>
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
            deleteConfirmationMsg: 'excluir ?:',
            showConfirmation: false,
            alloyToDelete: false,
            taskForDelete: '',
            idForDelete: -1,
            indexForDelete: -1
        }
    },
    methods: {
        deleteTaskConfirmation (id, index, task){
            this.taskForDelete = task;
            this.idForDelete = id;
            this.indexForDelete = index;
            window.scrollTo(0, 0);
            this.showDeleteConfirmation();
        },
        deleteTask (){
            let { task } = this.$refs;
            let timeline = new TimelineLite();
            timeline.to(task[this.indexForDelete], .7, {opacity: 0});
            setTimeout(()=>{
                this.$emit('deleteTask', this.idForDelete);
                this.hideDeleteConfirmation();
            },400);
        },
        showDeleteConfirmation (){
            this.showConfirmation = true;
        },
        hideDeleteConfirmation (){
            this.showConfirmation = false;
        }
    },
    mounted (){
        let { task } = this.$refs;
        let timeline = new TimelineLite();
        timeline.staggerTo(task, 1, { opacity: .9 }, .3 , "stagger").delay(.5);
    },
    updated (){
        let { task } = this.$refs;
        let timeline = new TimelineLite();
        timeline.to(task, 1, { opacity: .9 });
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
        color: black;
        padding: 0;
        width: 50%;
        margin: 5px auto;
    }
    li {        
        border: 1px solid darkgrey;
        background-color: #f5f5f5a1;
        opacity: 0;
    }
    @media screen and (max-width: 890px){
        ul{
            width: 100%;
        }
    }

    /* Alerts */
    .alertWrapper { 
        position: relative;
        transform: translateY(0);
        font-weight: 400;
        height: 120px;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
    }    
    .confirmationAlert {
        background-color: #fdfdfd6e;
        color: black;
        margin-top: .4rem;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-content: space-between;
    }    
    .messenges{
        border: 1px solid #78786f52;
        border-bottom: 0;
        display: flex;
        flex-direction: column;
        flex: 2;
        padding: 5px;
    }
    .messenges p {
        margin: 0;
        text-transform: uppercase;
        font-weight: 400;
        padding-top: 10px;
        line-height: 20px;
    }
    .messenges p:nth-child(2) {
        line-height: 20px;
        overflow: -webkit-paged-x;
    }
    .buttons {
        display: flex;
        flex: 1;
    }

    button {
        opacity: .9;
        font-weight: 400;
        color: white;
        text-transform: uppercase;
        padding: 5px;
        border: 0;
        flex: 1;
    }
    .greenButton {
        background-color: #4ace4a;
    }
    .greenButton:hover {
        background-color: #5bea5b;
    }
    .redButton {
        background-color: #e42525;
    }
    .redButton:hover {
        background-color: #ff3131;
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
            height: 180px; 
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


