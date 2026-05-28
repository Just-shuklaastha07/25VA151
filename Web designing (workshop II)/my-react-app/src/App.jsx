import { useState } from 'react' 
import './App.css' 
function App() { 
const [name, setName] = useState("") 
const [email, setEmail] = useState("") 
const [password, setPassword] = useState("") 
function showData() { 
if(name === "" || email === "" || password === ""){ 
      alert("Please Fill All Fields") 
    } 
    else{ 
      alert("Registered Successfully") 
    } 
  } 
  return ( 
    <> 
      <h2>Registration Form</h2> 
      <input type="text" placeholder="Enter Your Name" 
onChange={(e)=>setName(e.target.value)}  />  <br /><br /> 
      <input type="email"placeholder="Enter Your Email" 
        onChange={(e) => setEmail(e.target.value)} /><br /><br 
/> 
<input type="password"placeholder="Enter Your Password" 
        onChange={(e) => setPassword(e.target.value)} /><br 
/><br /> 
      <p>Name: {name}</p> 
      <p>Email: {email}</p> 
      <p>Password: {password}</p> 
      <button onClick={showData}> 
Submit 
</button> 
</> 
) 
} 
export default App






/*import { useState } from 'react' 
import './App.css' 
 
function App() { 
 
  const [count, setCount] = useState(0) 
 
  const increment = () => { 
    setCount(count + 1) 
  } 
 
  const decrement = () => { 
    setCount(count - 1) 
  } 
 
  const reset = () => { 
    setCount(0) 
  } 
 
  return ( 
    <> 
      <h2>React Counter Application</h2> 
 
      <h2>{count}</h2> 
 
      <button onClick={increment}>Increment</button> 
      <br /><br /> 
 
      <button onClick={decrement}>Decrement</button> 
      <br /><br /> 
 
      <button onClick={reset}>Reset</button> 
    </> 
  ) 
} 
 
export default App*/







/*import './App.css' 
import Student from './Student' 
 
function App() { 
 
  return ( 
    <> 
      <h2>Student Information</h2> 
 
      <Student name="Raj" course="B.tech" marks="90" /> 
      <Student name="Ram" course="M.tech" marks="95" /> 
      <Student name="Rohan" course="MCA" marks="99" /> 
    </> 
  ) 
} 
 
export default App*/











/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <iframe src="https://www.youtube.com/embed/CVcjdrtBHJ4" allowFullScreen></iframe>
    <iframe src="https://www.youtube.com/embed/OMoU0Pfibc4?list=RDGMEMPipJmhsMq3GHGrfqf4WIqA&start_radio=1&rv=JWERWSHJlzo" allowFullScreen></iframe>\
    <audio controls>
      <source src="" type="audio/mp3/"></source>
    </audio>
    <video controls>
      <source src="" type="video/mp4/"></source>
    </video>
    <p>Welcome to my webpages of ABESEC</p>
    <p>Hello</p>
    <h2>CSE-13</h2>
    <img src="https://images.pexels.com/photos/37290569/pexels-photo-37290569.jpeg" width="500" height="500"></img><br></br>
    <button>Click Me</button>
    </>
  )
}

export default App*/




/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h2>Student Information</h2>
<Student name="Raj" course="B.tech" marks="90"/>
<Student name="Ram" course="M.tech" marks="95"/>
<Student name="Rohan" course="MCA" marks="99"/>
    <iframe src="https://www.youtube.com/embed/CVcjdrtBHJ4" allowFullScreen></iframe>
    <iframe src="https://www.youtube.com/embed/OMoU0Pfibc4?list=RDGMEMPipJmhsMq3GHGrfqf4WIqA&start_radio=1&rv=JWERWSHJlzo" allowFullScreen></iframe>
    <audio controls>
      <source src="" type="audio/mp3/"></source>
    </audio>
    <video controls>
      <source src="" type="video/mp4/"></source>
    </video>
    <p>Welcome to my webpages of ABESEC</p>
    <p>Hello</p>
    <h2>CSE-13</h2>
    <img src="https://images.pexels.com/photos/37290569/pexels-photo-37290569.jpeg" width="500" height="500"></img><br></br>
    <button>Click Me</button>
    </>
  )
}

export default App
*/



