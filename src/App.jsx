

import './App.css'


function App() {

  function signup(formdata){
    const email=formdata.get('email')
    const password = formdata.get('password')
    console.log(email)
    console.log(password)
  }
  return (
    <>
        <div className='box'>
         <form action={signup}>
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" placeholder='example12@gmail.com' name='email' />
            <br/>
            <label htmlFor='password'>Password</label>
            <input id='password' type="password" placeholder='password@123' name='password'/>
            <button type='submit'>submit</button>
         </form>
        </div>
    </>
  )
}

export default App
