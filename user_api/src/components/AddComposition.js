import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";
import AddSmaller from "./AddSmaller";

function AddComposition() {
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
  const { register, handleSubmit, reset, errors, watch } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // watch to enable re-render when ticket number is changed
  const watchNumberOfTickets = watch("numberOfTickets");

  // return array of ticket indexes for rendering dynamic forms in the template
  function ticketNumbers() {
    return [...Array(parseInt(watchNumberOfTickets || 0)).keys()];
  }

  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
      <div className="card m-3">
        <b className="card-header">Create new Composition</b>
        <div className="card-body border-bottom">
          <div className="form-row">
            <div className="form-group">
              <b>Number of Events</b>
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
            <div className="list-group-item">
              <b className="card-title">Event {i + 1}</b>
              <div className="form-row">
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
                  <AddSmaller />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="card-footer text-center border-top-0">
          <button type="submit" className="btn btn-primary mr-1">
            Buy Tickets
          </button>
          <button className="btn btn-secondary mr-1" type="reset">
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddComposition;
