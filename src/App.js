import React, { useState } from 'react';
import './App.css';

import Header from "./MyProject/Header";

import Footer from "./MyProject/Footer";

import {Todos} from "./MyProject/Todos";

import {AddTodo} from "./MyProject/AddTodo";

import {About} from "./MyProject/About";

import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";

function App() {
let initTodo;
  if(localStorage.getItem("todos")===null){
initTodo=[];
  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"));
  }
  

const onDelete =(todo)=>{
 
setTodos(todos.filter((e)=>{
return e!==todo;
}))
localStorage.getItem("todos", JSON.stringify(todos));
}

const addTodo=(title,desc)=>{
 
 
  const myTodo={
   
    title:title,
    desc:desc,
  }
  setTodos([...todos,myTodo]);
  console.log(myTodo);
  
  

   localStorage.setItem("todos", JSON.stringify(todos));

}

  const [todos,setTodos] = useState(initTodo);

  return(
  <>
  <Router>
  
     <Header/>

     <Switch>
     <Route exact path="/" render={()=>{
       return(
       <>
       <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
       </>
       )
     }}>
           
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
         
        </Switch>

     
     <Footer/>
     </Router>
  </>

  );
}

export default App;
