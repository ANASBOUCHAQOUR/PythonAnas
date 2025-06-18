import React from "react";

function FormComponent({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
        Female
      </label>
      <br />

      <label>Destination:</label>
      <select
        name="destination"
        value={formData.destination}
        onChange={handleChange}
      >
        <option value="">-- Choose --</option>
        <option value="Thailand">Thailand</option>
        <option value="Japan">Japan</option>
        <option value="Brazil">Brazil</option>
      </select>
      <br />

      <label>
        <input
          type="checkbox"
          name="nutsFree"
          checked={formData.nutsFree}
          onChange={handleChange}
        />
        Nuts free
      </label>

      <label>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={formData.lactoseFree}
          onChange={handleChange}
        />
        Lactose free
      </label>
      <br />

      <button type="submit">Submit</button>

      <hr />
      <h2>Entered Information:</h2>
      <p>Name: {formData.firstName} {formData.lastName}</p>
      <p>Age: {formData.age}</p>
      <p>Gender: {formData.gender}</p>
      <p>Destination: {formData.destination}</p>
      <p>Dietary Restrictions:</p>
      <p>• Nuts Free: {formData.nutsFree ? "Yes" : "No"}</p>
      <p>• Lactose Free: {formData.lactoseFree ? "Yes" : "No"}</p>
    </form>
  );
}

export default FormComponent;