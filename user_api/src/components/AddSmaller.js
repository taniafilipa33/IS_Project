import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";
import AddLabels from "./AddLabels.js";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";

window.starter = 1;
function AddSmaller(props) {
  console.log("evento: " + props.event);
  window.item = props.item;
  window.value = props.value;
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

  const restartItem = () => {
    window.item = 0;
    window.value = 0;
  };
  const updateItem = () => {
    console.log("entrei no update item");
    window.item = window.item + 1;
    window.value = 0;
    props.sender(window.item);
    console.log("item: " + window.item);
  };
  const charger = () => {
    props.senderItems(watchNumberOfTickets, props.event);
  };

  return (
    //<form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
    <div className="card m-3" style={{ backgroundColor: "aliceblue" }}>
      {restartItem()}
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
                <option
                  key={i}
                  value={i}
                  onChange={restartItem()}
                  onSelect={charger()}
                >
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
                {console.log("props: " + JSON.stringify(props))}
                <input
                  name={`tickets[${i}]name`}
                  ref={register}
                  type="text"
                  className={`form-control ${
                    errors.tickets?.[i]?.name ? "is-invalid" : ""
                  }`}
                  keep={
                    props.event +
                    "_" +
                    window.item +
                    "_" +
                    window.value +
                    "_ItemName"
                  }
                  onChange={(e) => props.handleClick(e)}
                />
                <div className="invalid-feedback">
                  {errors.tickets?.[i]?.name?.message}
                </div>

                <AddLabels
                  event={props.event}
                  item={window.item}
                  value={window.value}
                  handleClick={props.handleClick}
                />
              </div>
            </div>
          </div>
          {updateItem()}
        </div>
      ))}
    </div>
    //</form>
  );
}

export default AddSmaller;
