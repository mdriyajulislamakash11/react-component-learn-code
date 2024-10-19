import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Todo from './Todo'
import './App.css'
import Actor from './Actor'
import Singer from './assets/Singer'
import BookStore from './assets/BookStore'

function App() {
  const [count, setCount] = useState(0)

  const actors = ['sakib', 'raj', 'khan','rubel']

  const books = [
    {id: 1, name: 'arbi', price: 210},
    {id: 2, name: 'bangla', price: 250},
    {id: 3, name: 'english', price: 270},
    {id: 4, name: 'math', price: 870},
    {id: 5, name: 'tajbid', price: 560},
  ]

  const singers = [
    {id: 1, name:'al amin', age: 28},
    {id: 2, name:'akash', age: 23},
    {id: 3, name:'himel', age: 21},
    {id: 4, name:'junayed', age: 13},
    {id: 5, name:'junayed', age: 10},
  ]

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

      <BookStore books={books}></BookStore>

    {
      singers.map(singer => <Singer singer={singer}></Singer>)
    }


      {/* <Actor name={"bappi"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      } */}

      {/* <Todo task="Learn React" 
      IsDone={true}></Todo>

      <Todo task="Core conchept" 
      IsDone={false}></Todo>

      <Todo task="Try jsx" 
      IsDone={true}></Todo> */}

      {/* <Person></Person>
      <Device name="laptop" price="20k"></Device>
      <Device name="mobile" price="10k"></Device>
      <Students></Students>
      <Student grade="8" score="99"></Student>
      <Student></Student>
      <Student></Student> */}
    </>
  )
}

const { grade, score } = { grade: '8', score: '99' }

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score)
  return (
    <div className='student'>
      <h3>This s a student</h3>
      <p>grade: {grade} </p>
      <p>score: {score} </p>
    </div>
  )
}



function Device(props) {
  console.log(props)
  return (
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
    <div style={DispayStye}>
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
