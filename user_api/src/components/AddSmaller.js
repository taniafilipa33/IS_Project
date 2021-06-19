import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";
import AddLabels from "./AddLabels.js";

function AddSmaller(props) {
  const event = props.event;
  console.log("evento: " + event);
  // form validation rules
  const validationSchema = Yup.object().shape({
    numberOfTickets: Yup.string().required("Number of events is required"),
    tickets: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Name is required"),
      })
    ),
  });

  // functions to build form returned by useForm() hook
  const { register, errors, watch } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // watch to enable re-render when ticket number is changed
  const watchNumberOfTickets = watch("numberOfTickets");

  // return array of ticket indexes for rendering dynamic forms in the template
  function ticketNumbers() {
    return [...Array(parseInt(watchNumberOfTickets || 0)).keys()];
  }

  return (
    //<form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
    <div className="card m-3" style={{ backgroundColor: "aliceblue" }}>
      <div className="card-body border-bottom">
        <div className="form-row">
          <div className="form-group">
            <b>Number of Items</b>
            <select
              name="numberOfTickets"
              ref={register}
              className={`form-control ${
                errors.numberOfTickets ? "is-invalid" : ""
              }`}
            >
              {["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">
              {errors.numberOfTickets?.message}
            </div>
          </div>
        </div>
      </div>
      {ticketNumbers().map((i) => (
        <div key={i} className="list-group list-group-flush">
          <div
            className="list-group-item"
            style={{ backgroundColor: "aliceblue" }}
          >
            <b className="card-title">Items {i + 1}</b>
            <div className="form-row" style={{ backgroundColor: "aliceblue" }}>
              <div className="form-group col-9">
                <label>Name</label>
                <input
                  name={`tickets[${i}]name`}
                  ref={register}
                  type="text"
                  className={`form-control ${
                    errors.tickets?.[i]?.name ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.tickets?.[i]?.name?.message}
                </div>
                <AddLabels />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    //</form>
  );
}

export default AddSmaller;
