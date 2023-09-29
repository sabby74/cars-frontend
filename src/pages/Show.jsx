import React from "react";
import { useLoaderData } from "react-router-dom";

const Show = () => {
  const service = useLoaderData();
  return (
    <div className="show">
      <h1>{service.carName}</h1>
      <h1>{service.carModel}</h1>
      <h3>{service.tireRotation ? "yes" : "No"}</h3>
      <h3>{service.airFilter ? "yes" : "No"}</h3>
      <h3>{service.breakCheck ? "yes" : "No"}</h3>
      <h3>{service.batteryCheck ? "yes" : "No"}</h3>
      <h3>{service.brakePadChange ? "yes" : "No"}</h3>
      <h3>{service.transmissionOilChange ? "yes" : "No"}</h3>
      <h3>{service.cabinAirFilterChange ? "yes" : "No"}</h3>
      <h3>{service.engineAirFilter ? "yes" : "No"}</h3>
      <h3>{service.wiperBladesChange ? "yes" : "No"}</h3>
      <h3>{service.mileage}</h3>
      <h3>{service.coolantChange ? "yes" : "No"}</h3>
    </div>
  );
};

export default Show;
