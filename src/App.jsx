

import './App.css'


function App() {
  

  return (
    <>
        <div className='box'>
         <form >
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" placeholder='example12@gmail.com' name='email' />
            <br/>
            <label htmlFor='password'>Password</label>
            <input id='password' type="password" placeholder='password@123' name='password'/>
         </form>
        </div>
    </>
  )
}

export default App
