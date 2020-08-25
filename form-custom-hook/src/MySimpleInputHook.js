import React from 'react';
// 1. import the hook
import useInputState from "./hooks/useInputState";
// could also use other hooks if necessary

// Originally, I had it this way and IT DID NOT WORK: export default MySimpleInputHook = () => {
export default function MySimpleInputHook() {
  // 2. destructure useInputState
  const [email, updateEmail, resetEmail] = useInputState(""); // [value, handleChange, reset] 
  // Now I can easily add more inputs such as name, password, etc
  const [password, updatePassword, resetPassword] = useInputState("");

  // 3. make use and pass in the destructured values
  return (
    <div>
      <h3>The Value of the (myCustom)Hook is... { email } & { password }</h3>
      <input type="text" value={ email } onChange={ updateEmail } />
      <input type="text" value={ password } onChange={ updatePassword } />
      <button onClick={ resetEmail }>Reset Email</button>
      <button onClick={ resetPassword }>Reset Password</button>
    </div >
  );
}

// export this file into App.js