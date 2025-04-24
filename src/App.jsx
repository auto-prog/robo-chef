

import './App.css'


function App() {
  

  return (
    <>
        <div className='box'>
         <form >
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" placeholder='example12@gmail.com' />
            <br/>
            <label htmlFor='password'>Password</label>
            <input id='password' type="password" placeholder='password@123' />
         </form>
        </div>
    </>
  )
}

export default App
