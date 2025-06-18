import React, { useState } from "react";
import FormComponent from "./components/FormComponent";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    nutsFree: false,
    lactoseFree: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();

    for (let key in formData) {
      if (typeof formData[key] === "boolean") {
        if (formData[key]) params.append(key, "on");
      } else {
        params.append(key, formData[key]);
      }
    }

    window.location.href = `http://localhost:3000/?${params.toString()}`;
  };

  return (
    <div>
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
