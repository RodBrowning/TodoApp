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
    overflow: auto;
    height: 100vh;
    background-image: url('assets/img/imagemFundo.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-color: #fdff9f;
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
  
/*Scrollbar settings*/

::-webkit-scrollbar {
  width: 8px;
  height: 5px;
}
::-webkit-scrollbar-button {
  width: 19px;
  height: 19px;
}
::-webkit-scrollbar-thumb {
  background: #ffff00;
  border: 0px none #ffffff;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffb3;
  cursor: pointer;
}
::-webkit-scrollbar-thumb:active {
  background: #b9b900;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px solid #ffffff;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

@media screen and (max-width: 890px){
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  } 
}
</style>
