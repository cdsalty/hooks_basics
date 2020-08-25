import React from 'react';
import SimpleFormHooks from './SimpleFormHooks';
import MySimpleInputHook from './MySimpleInputHook';
import './App.css';



function App() {
  return (
    <div className="App">
      <h1>Custom Form Hooks</h1>
      <SimpleFormHooks></SimpleFormHooks>
      <MySimpleInputHook></MySimpleInputHook>
    </div>
  );
}

export default App;
