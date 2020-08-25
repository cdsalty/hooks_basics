import React, { useState } from 'react';

const SimpleFormHooks = () => {
  const [email, setEmail] = useState(""); // the email value will be placed inside the value field.
  // if I were to set an initial value, for example "Daisy". Inside the input form, you would see "Daisy".

  const handleChange = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  }

  return (
    <div>
      <h3>The Value of the Hook is... { email }</h3>
      <input type="text" value={ email } onChange={ handleChange } />
      <button onClick={ () => setEmail("") }>Submit</button>
    </div>
  )
}

export default SimpleFormHooks
