import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Formm from './components/Formm'


function App() {

//   const fname = 'Juan';
//   const lname = 'dela cruz'
//   const age = 25

//   const student = 
// [
//   {
//     firstname: 'JM',
//     lastname: 'Cabiles',
//     age: 22,
    
//   },
//   {
//     firstname: 'Juan',
//     lastname: 'Dela Cruz',
//     age: 25,
//   },
//   {
//     firstname: 'Allen',
//     lastname: 'Maliksi',
//     age: 50,
//   }
// ]

const [num, setNum] = useState(0)
const [username, setUsername] = useState()
//  const arr = [1,2,3,4,5]


const [diary, setDiary] = useState('')

useEffect(() => {
  console.log('Render');
},)

const changeHandler = (e) => {
  setDiary(e.target.value)
}


  return (
    <>
    
    <Header />
    <main>
      {/* <h1>Hello {fname} {lname}</h1>
      {arr.map((num => <p> {num * 5}</p>) )}
      {student.map((s => <p> {s.firstname}{" "}{s.lastname}{" "}{s.age}</p>))} */}
      <h1>My First React</h1>
      <Formm myDiary = {diary} handleChange={changeHandler}/>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Add Number</button>
      <br />
      <h2>{username}</h2>
      <input name = 'username' value={username} onChange = {(e) => setUsername(e.target.value)}/>
    </main>
    <Footer />
     
    </>
  );
}

export default App;
