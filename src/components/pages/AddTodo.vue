<template>
    <div>
        <form v-on:submit="addTask">
            <input ref="inputTask" @keydown.tab="focus" v-on:keydown="removeEmptyError" type="text" v-model="task" :placeholder="placeholderText"/>
            <input type="submit" :value="buttonText" />
        </form>
        <transition name="fade">
            <div ref="emptyError" v-if="hasEmptyError" class="alertWrapper">
                <div class="errorAlert">
                    <p>{{ errorMsg }}</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import uuidv4 from 'uuid/v4';
export default {
    name: 'add-app',
    data(){
        return{
            task: '',
            placeholderText: 'digite uma nova tarefa',
            buttonText: 'adicionar tarefa',
            errorMsg: 'digite uma nova tarefa entes de continuar',
            hasEmptyError: false
        }
    },
    methods: {
        addTask(e){
            e.preventDefault();
            const newTask = {
                id: uuidv4('randon'),
                task: this.task,
                doneTask: false
            }
            if(this.task.trim() != ''){
                this.$emit('addTodo', newTask);
                this.task = '';
                this.removeEmptyError();
            }else{
                if(!this.hasEmptyError){
                    this.addEmptyError();
                    this.task = '';
                    setTimeout(() =>{
                        this.removeEmptyError();
                    }, 3000);
                }
            }
        },
        removeEmptyError (){
            this.hasEmptyError = false;
        },
        addEmptyError (){
            this.hasEmptyError = true;
        }
    },
    mounted (){
        this.$refs.inputTask.focus();
    }
}
</script>

<style scoped>
    form {
        display: flex;
        width: 70%;
        margin: auto;
    }
    input[type="text"] {
        flex: 7;
        border: 0;
        line-height: 2;
        padding: 0 1rem;
        background-color: whitesmoke;
    }
    input[type="submit"] {
        background-color: dimgrey;
        border: 0;
        color: whitesmoke;
        padding: 0 3rem;
        flex: 1;
        opacity: .9;
    }
    input[type="submit"]:hover {
        background-color: grey;
    }

    @media only screen and (max-width: 490px) {
        input[type="submit"] {
            padding: 1rem;
        }
        form {
            flex-direction: column;
        }
    }
    
    @media screen and (max-width: 890px){
        form{
            width: 100%;
        }
    }


    /* Alerts */
    .alertWrapper {        
        position: relative;
        transform: translateY(0);
        font-weight: 400;
        height: 60px;
        display: flex;
        justify-content: center;
        text-align: center;
    }    
    .errorAlert {
        background-color: #ff634794;
        border: 2px solid;
        border-color: firebrick;
        color: white;
        margin-top: .4rem;
        width: 50%;
        opacity: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .errorAlert p {
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
            height: 85px; 
        }
        .errorAlert {
            padding: 0;
        }
        .errorAlert p {
            margin: 6px;
        }
        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s, transform .5s, height .5s;
        }
        .fade-enter, .fade-leave-to {
            opacity: 0;
            transform: translateY(-200px);
            height: 0;
        }
    }
</style>