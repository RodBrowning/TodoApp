<template>
    <header>
        <div>
            <h1>{{ pageTitle }}</h1>
        </div>
    </header>
</template>

<script>
export default {
    name:"todo-header",
    data(){
        return{
            pageTitle: 'minha lista de afazeres'
        }
    }
}
</script>

<style scoped>
    header {
        background-color: #29292973;
        padding: 10px;
    }
    h1{
        margin: 0;
        color: beige;
        text-transform: uppercase;
        text-align: center;
    }
</style>