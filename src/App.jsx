

import './App.css'


function App() {

  function signup(formdata){
    const email=formdata.get('email')
    const password = formdata.get('password')
    const employmentStatus=formdata.get("employmentStatus")
    console.log(employmentStatus)
    console.log(password)

  }
  return (
    <>
    <div className='box'>
        
    <section>
      <h1>Signup form</h1>
      <form action={signup}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="Unemployed" />
            Unemployed
        </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="Part-time" />
            Part-time
        </label>
          <label>
            <input type="radio" name="employmentStatus" value="full-time"/>
            Full-time
        </label>
        </fieldset>



        <button>Submit</button>

      </form>
    </section>
  
        </div>
    </>
  )
}

export default App
