import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    admin:false,
  })

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value,
  //  })
  // }

  // function handleLastNameChange(event) {
  // setFormData({
  //   ...formData,
  //   lastName: event.target.value,
  // });
  // }
  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;
    if (event.target.type==="checkbox") {
      value = event.target.checked;
    }
    setFormData({
      ...formData, 
      [name]:value
    })
  }
  function handleSubmit(event) {
    event.preventDefault()
    setFormData(formData)
  }

 
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName} />
      <input type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName} />
      <input type="checkbox"
        name="admin"
        onChange={handleChange}
      checked={formData.admin}></input>
      <button type="submit">Submit</button>
    </form>
      
      </div>
  );
}

export default Form;
