import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";

function AddLabels() {
  // form validation rules
  const validationSchema = Yup.object().shape({
    numberOfTickets: Yup.string().required("Number of Fields is required"),
    tickets: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Label is required"),
        email: Yup.string()
          .email("Value is Invalid")
          .required("Value is required"),
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
    <div className="card m-3" style={{ backgroundColor: "antiquewhite" }}>
      <div className="card-body border-bottom">
        <div className="form-row">
          <div className="form-group">
            <b>Number of Fields</b>
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
            style={{ backgroundColor: "antiquewhite" }}
          >
            <b className="card-title">Data {i + 1}</b>
            <div className="form-row">
              <div className="form-group col-6">
                <label>Label</label>
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
              </div>
              <div className="form-group col-6">
                <label>Value</label>
                <input
                  name={`tickets[${i}]email`}
                  ref={register}
                  type="text"
                  className={`form-control ${
                    errors.tickets?.[i]?.email ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.tickets?.[i]?.email?.message}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    //</form>
  );
}

export default AddLabels;
