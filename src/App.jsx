import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'

// function App() {
//   return (
//     <>
//       <h1>Vite + React</h1>
//       <Device name="Mobile" price="20"></Device>
//       <Device name="LapTop" price="55"></Device>
//       <Person></Person>
//       <Person></Person>
//       <Student details="{name: 'walid', age: 22}"></Student>
//       <Developer></Developer>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//      <Todo task="Learn HTML" isDone={true}></Todo>
//      <Todo task="Learn CSS" isDone={false}></Todo>
//      <Todo task="Learn Javascript" isDone={true}></Todo>
//      <Todo task="Learn React" isDone={false}></Todo>
//     </>
//   )
// }

// function App() {
//   const actor = ['sakib',"manna","raj","rubel"];
  
//   return (
//     <>
//       <Actor name={"Walid Hasan"}></Actor>
//       {
//         actor.map(actor => <Actor name={actor}></Actor>)
//       }
//     </>
//   )
// }

function App() {
  const actor = ['sakib',"manna","raj","rubel"];
  const users = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      email: "johndoe@example.com",
      isActive: true
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 34,
      email: "janesmith@example.com",
      isActive: false
    },
    {
      id: 3,
      name: "Emily Johnson",
      age: 22,
      email: "emilyj@example.com",
      isActive: true
    }
  ];
  return (
    <>
        
      {
        users.map(user => <Singer users={user}></Singer>)
      }
    </>
  )
}




function Device(props){ // This parameter access as a object so we can use it like object and utilize it's properties.
  console.log(props);
  return <h1>This Device is : {props.name}</h1>
}

function Person(){
  const age = 23;
  const details = {name: 'walid', age: 22}
  return <h2>I'm {details.name} And Age is {age}</h2>
}

// function Student(){
//   return (
//     <div className="">
//         <h3>I'm Saki bal hasan</h3>
//     </div>
//   )
// }


function Student(details){ // Destructuring Student Function
  const {name,age} = details;
  console.log(age);
  return (
    <div className="">
        <h3>I'm {name} and Age {age}</h3>
    </div>
  )
}

// function Developer(){
//   const devStyle = {
//     margin: "10px",
//     padding: "20px",
//     border: "1px solid tomato",
//   }
//   return (
//     <div className="" style={devStyle}>
//       <h4>I'm a web Developer</h4>
//     </div>
//   )
// }

function Developer(){
  return (
    <div className="" style={{
      margin: "10px",
      padding: "20px",
      border: "1px solid tomato",
    }}>
      <h4>I'm a web Developer</h4>
    </div>
  )
}



export default App
