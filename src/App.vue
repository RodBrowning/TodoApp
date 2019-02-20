<template>
  <div id="app">
    <TodoApp/>
  </div>
</template>

<script>
import TodoApp from './components/TodoApp';

export default {
  name: 'app',
  components: {
    TodoApp
  },
  data (){
    return {
    }
  }
}
</script>

<style>
  * {
    font-family: 'Raleway', sans-serif;
    font-weight: 300;    
    text-transform: capitalize;  
  }
  html {
    background-color: ivory;
    height: 100vh;
    background-repeat: no-repeat;
    background-image: url('assets/img/imagemFundo.jpg');
    background-size: cover;
    background-color: #d6d865;
    background-blend-mode: hard-light;
  }
  body, input{
    margin: 0;        
    font-size: 18px;
  }  
  input:focus, button:focus {
          outline: lightgreen;
          outline-style: auto;
  }
</style>
