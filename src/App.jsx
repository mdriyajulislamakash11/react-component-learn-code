import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
      </div>
      <Person></Person>
      <Device name="laptop" price="20k"></Device>
      <Device name="mobile" price="10k"></Device>
      <Students></Students>
      <Student grade="8" score="99"></Student>
      <Student></Student>
      <Student></Student>
    </>
  )
}

const {grade, score} = {grade: '8', score: '99'}

function Student ({grade, score}) {
  console.log(grade, score)
  return(
    <div className='student'>
      <h3>This s a student</h3>
      <p>grade: {grade} </p>
      <p>score: {score} </p>
    </div>
  )
}



function Device (props) {
console.log(props)
  return(
    <h2>This Device: {props.name} price: {props.price} </h2>
  )
}

function Person() {
  const age = 22;
  const name = 'AKash'
  const mone = 33;

  const DispayStye = {
    border: '2px solid purple',
    padding: '10px',
    margin: '20px',
    borderRadius: '15px',
  }

  return (
    <div style={DispayStye }> 
      <h3> im a person: {name} personAge: {age + mone}</h3 >
    </div>
  )
}

function Students() {
  const actore = { name: 'faim', age: 17, addresse: 'muktir mor', school: 'adhor condra' }
  return (
    <div className='students'>
      <p>name: {actore.name}</p>
      <p>age: {actore.age}</p>
      <p>school: {actore.school} </p>
      <p>school: {actore.addresse} </p>
    </div>
  )
}


export default App
