(function(t){function e(e){for(var o,i,s=e[0],d=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],r[i]&&f.push(r[i][0]),r[i]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(t[o]=d[o]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var d=n[s];0!==r[d]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=d;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"04d1":function(t,e,n){"use strict";var o=n("9f07"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TodoApp")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",{ref:"header",staticClass:"headerDiv"},[n("Header")],1),n("div",{ref:"form",staticClass:"formDiv"},[n("AddTodo",{on:{addTodo:t.addTodo}})],1)]),n("div",[n("Todos",{attrs:{todos:t.todos},on:{deleteTask:t.deleteTask}})],1)])},s=[],d=n("75fc"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",[n("h1",[t._v(t._s(t.pageTitle))])])])},c=[],l={name:"todo-header",data:function(){return{pageTitle:"minha lista de afazeres"}}},f=l,p=(n("9b43b"),n("2877")),m=Object(p["a"])(f,u,c,!1,null,"c4eed0c8",null),h=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"fade"}},[t.showConfirmation?n("div",{ref:"confirmRemove",staticClass:"alertWrapper"},[n("div",{staticClass:"confirmationAlert"},[n("div",{staticClass:"messenges"},[n("p",[t._v(t._s(t.deleteConfirmationMsg))]),n("p",[t._v(t._s(t.taskForDelete))])]),n("div",{staticClass:"buttons"},[n("button",{staticClass:"redButton",on:{click:t.hideDeleteConfirmation}},[t._v("Cancelar")]),n("button",{ref:"btnConfirm",staticClass:"greenButton",on:{click:t.deleteTask}},[t._v("Confirmar")])])])]):t._e()]),n("div",[n("ul",t._l(t.todos,function(e,o){return n("li",{key:o,ref:"task",refInFor:!0},[n("ListItens",{attrs:{todo:e,index:o},on:{deleteConfirmation:t.deleteTaskConfirmation}})],1)}),0)])],1)},k=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"list-item"}},[n("label",[n("input",{attrs:{type:"checkbox"},on:{change:t.markAsDone}}),n("p",{class:{done:t.todo.doneTask}},[t._v(t._s(t.todo.task))]),n("button",{on:{click:function(e){return t.$emit("deleteConfirmation",t.todo.id,t.index,t.todo.task)}}},[n("i",{staticClass:"far fa-times-circle"})])])])},T=[],y={name:"list-item",props:["todo","index"],methods:{markAsDone:function(){this.todo.doneTask=!this.todo.doneTask}}},_=y,g=(n("04d1"),Object(p["a"])(_,b,T,!1,null,"3876f1eb",null)),C=g.exports,E=n("109c"),x={name:"todos",components:{ListItens:C},props:["todos"],data:function(){return{deleteConfirmationMsg:"excluir ?:",showConfirmation:!1,alloyToDelete:!1,taskForDelete:"",idForDelete:-1,indexForDelete:-1}},methods:{deleteTaskConfirmation:function(t,e,n){this.taskForDelete=n,this.idForDelete=t,this.indexForDelete=e,window.scrollTo(0,0),this.showDeleteConfirmation()},deleteTask:function(){var t=this,e=this.$refs.task,n=new E["a"];n.to(e[this.indexForDelete],.7,{opacity:0}),setTimeout(function(){t.$emit("deleteTask",t.idForDelete),t.hideDeleteConfirmation()},400)},showDeleteConfirmation:function(){this.showConfirmation=!0},hideDeleteConfirmation:function(){this.showConfirmation=!1}},mounted:function(){var t=this.$refs.task,e=new E["a"];e.staggerTo(t,1,{opacity:.9},.3,"stagger").delay(.5)},updated:function(){var t=this.$refs.task,e=new E["a"];e.to(t,1,{opacity:.9})}},w=x,D=(n("e282"),Object(p["a"])(w,v,k,!1,null,"1e1353d0",null)),O=D.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{on:{submit:t.addTask}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.task,expression:"task"}],ref:"inputTask",attrs:{type:"text",placeholder:t.placeholderText},domProps:{value:t.task},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:t.focus(e)},t.removeEmptyError],input:function(e){e.target.composing||(t.task=e.target.value)}}}),n("input",{attrs:{type:"submit"},domProps:{value:t.buttonText}})]),n("transition",{attrs:{name:"fade"}},[t.hasEmptyError?n("div",{ref:"emptyError",staticClass:"alertWrapper"},[n("div",{staticClass:"errorAlert"},[n("p",[t._v(t._s(t.errorMsg))])])]):t._e()])],1)},$=[],F=n("c64e"),P=n.n(F),A={name:"add-app",data:function(){return{task:"",placeholderText:"digite uma nova tarefa",buttonText:"adicionar tarefa",errorMsg:"digite uma nova tarefa antes de continuar",hasEmptyError:!1}},methods:{addTask:function(t){var e=this;t.preventDefault();var n={id:P()("randon"),task:this.task,doneTask:!1};""!=this.task.trim()?(this.$emit("addTodo",n),this.task="",this.removeEmptyError()):this.hasEmptyError||(this.addEmptyError(),this.task="",setTimeout(function(){e.removeEmptyError()},3e3))},removeEmptyError:function(){this.hasEmptyError=!1},addEmptyError:function(){this.hasEmptyError=!0}},mounted:function(){this.$refs.inputTask.focus()}},M=A,S=(n("938e"),Object(p["a"])(M,j,$,!1,null,"10166870",null)),I=S.exports,B={name:"todo-app",components:{Header:h,Todos:O,AddTodo:I},data:function(){return{todos:[{id:1,task:"Primeira tarefa",doneTask:!1},{id:2,task:"Segunda tarefa",doneTask:!1}],topDivs:this.$refs}},methods:{deleteTask:function(t){this.todos=this.todos.filter(function(e){return e.id!=t})},addTodo:function(t){this.todos=[].concat(Object(d["a"])(this.todos),[t])}},mounted:function(){var t=this.topDivs.header,e=this.topDivs.form,n=new E["a"];n.to(t,1.2,{top:0}).delay(.5),n.to(e,1.2,{top:0},.2)}},H=B,J=(n("bdf9"),Object(p["a"])(H,i,s,!1,null,"b408a48a",null)),L=J.exports,W={name:"app",components:{TodoApp:L},data:function(){return{}}},z=W,N=(n("034f"),Object(p["a"])(z,r,a,!1,null,null,null)),R=N.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(R)}}).$mount("#app")},"64a9":function(t,e,n){},"938e":function(t,e,n){"use strict";var o=n("96c7"),r=n.n(o);r.a},"96c7":function(t,e,n){},"9b43b":function(t,e,n){"use strict";var o=n("be0f"),r=n.n(o);r.a},"9f07":function(t,e,n){},a7a3:function(t,e,n){},b7c3:function(t,e,n){},bdf9:function(t,e,n){"use strict";var o=n("b7c3"),r=n.n(o);r.a},be0f:function(t,e,n){},e282:function(t,e,n){"use strict";var o=n("a7a3"),r=n.n(o);r.a}});
//# sourceMappingURL=app.667a6fd0.js.map