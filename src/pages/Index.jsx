import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Index = () => {
  const services = useLoaderData();
  console.log(services, "from the index .jsx");

  return (



    <div>
      {services.map((service) => {
        return (
          <div key={service._id} className="services">
            <h1 className="underline text-slate-400">Scheduled Service For </h1>
            <div className="bg-red-400 rounded p-2 m-2 ">
              <Link className="hover:italic" to={`/${service._id}`}>
                <h1 className="text-slate-600">Car Brand: {service.carName}</h1>
              </Link>
            </div>
            <h1>Model Name: {service.carModel}</h1>
            <h1>Current Mileage: {service.mileage} miles</h1>

            <br />
            <h1 className="underline text-slate-400">Service Required</h1>
            <br />
            <h2>oil change : {service.oilChange ? "yes" : "No"}</h2>
            <h2>Tire Rotation : {service.tireRotation ? "yes" : "No"}</h2>
            <h2>Air filter change : {service.airFilter ? "yes" : "No"}</h2>
            <h2>Brake Check : {service.breakCheck ? "yes" : "No"}</h2>
            <h2>Battery Check : {service.batteryCheck ? "yes" : "No"}</h2>
            <h2>Brake Pad Change : {service.brakePadChange ? "yes" : "No"}</h2>
            <h2>Wheel Allignment : {service.alignment ? "yes" : "No"}</h2>
            <h2>
              Transmission Oil Change :{" "}
              {service.transmissionOilChange ? "yes" : "No"}
            </h2>
            <h2>
              Cabin Air Filter Change :{" "}
              {service.cabinAirFilterChange ? "yes" : "No"}
            </h2>
            <h2>
              Engine Air Filter Change :{" "}
              {service.engineAirFilter ? "yes" : "No"}
            </h2>
            <h2>
              Wiper Blades Change : {service.wiperBladesChange ? "yes" : "No"}
            </h2>
            <h2>Coolant Change : {service.coolantChange ? "yes" : "No"}</h2>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Index;
