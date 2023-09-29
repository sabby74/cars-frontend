import React, { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";

const Update = () => {
  const service = useLoaderData();
  const [formData, setFormdata] = useState(service);

  const handleChange = (e) => {
    setFormdata((prevState) => {
      return {
        ...prevState,
        [e.target.name]:
          e.target.name == "oilChange" ? e.target.checked : e.target.value,
      };
    });
  };

  return (
    <div className="update">
      <Form action={`/update/${service._id}`} method="post">
        Cars Name:
        <input
          type="input"
          name="carName"
          value={formData.carName}
          onChange={handleChange}
          placeholder="car's Name"
        />
        <h1>
          Oil Change:
          <input
            type="checkbox"
            checked={formData.oilChange}
            name="oilChange"
            value={formData.oilChange}
            onChange={handleChange}
          />
        </h1>
        <input
          className="rounded-full p-2 bg-red-400"
          type="submit"
          value={`update ${service.carName}`}
        />
      </Form>
    </div>
  );
};

export default Update;
