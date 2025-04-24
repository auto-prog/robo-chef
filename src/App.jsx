

import './App.css'
import React from "react"
export default function App() {
  const [contact, setContact] = React.useState({
      firstName: "John",
      lastName: "Doe",
      phone: "+1 (212) 555-1212",
      email: "itsmyrealname@example.com",
      isFavorite: false
  })
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */
  let vari=contact.isFavorite ? "https://github.com/scrimba/learn-react/blob/main/03.%20React%20State/19.%20Complex%20state%20-%20Objects/images/star-filled.png?raw=true" : "https://github.com/scrimba/learn-react/blob/main/03.%20React%20State/19.%20Complex%20state%20-%20Objects/images/star-empty.png?raw=true"

  function toggleFavorite() {

    setContact(pervContact=>({
        ...pervContact,isFavorite:!pervContact.isFavorite
    }))

      console.log("Toggle Favorite")
  }

  return (
      <main>
          <article className="card">
              <img
                  src="https://i.pinimg.com/736x/f7/5a/1f/f75a1f67cbafda04409111afea76bc95.jpg"
                  className="avatar"
                  alt="User profile picture of John Doe"
              />
              <div className="info">
                  <button
                      onClick={toggleFavorite}
                      aria-pressed={contact.isFavorite}
                      aria-label={contact.isFavorite==true ? "remove from fav":"add to fav"}
                      className="favorite-button"
                  >
                      <img
                          src={vari}
                          alt={contact.isFavorite==true ? "filled star":"empty star"}
                          className="favorite"
                          width="24px"
                          height="24px"
                      />
                  </button>
                  <h2 className="name">
                  {contact.firstName}
                  {contact.lastName}
                  </h2>
                  <p className="contact">{contact.phone}</p>
                  <p className="contact">{contact.email}</p>
              </div>

          </article>
      </main>
  )
}