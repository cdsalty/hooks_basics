import { useState } from 'react';

export default initialVal => {
  const [value, setValue] = useState(initialVal);
  // Function(s)
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};

/*
// MY CUSTOM HOOK (functionalities such as resetting the form, handling the state as it changes/updates, etc.)
So if I were to use this in another file, using "age" as an example:
const [age, handleAgeChange, resetAge] = useFormState("");
    ----> age = value, handleAgeChange = handleChange, resetAge = reset

*/