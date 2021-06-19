import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./global.js";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";
import AddSmaller from "./AddSmaller";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

const item = 0;
const value = 0;
const state = {
  tasks: {
    name: {
      value: "", //alterar
    },
    uid: {
      value: "8849182c-82ad-4088-a07f-48ead4180515::MyMedEHR::1", //alterar
    },
    link: [],
    archetype_details: {
      archetype_id: "", //alterar

      rm_version: "1.0.1",
      template_id: "", //alterar
    },
    archetype_node_id: "", //alterar
    language: {
      code_string: "en",
      terminology_id: "ISO_639-1",
    },
    territory: {
      code_string: "SI",
      terminology_id: "ISO_3166-1",
    },
    category: {
      defining_code: {
        code_string: "433",
        terminology_id: "openehr",
      },
      value: "event",
    },
    composer: "ehrscape",
    context: {
      setting: {
        defining_code: {
          code_string: "238",
          terminology_id: "openehr",
        },
        value: "other care",
      },
      startTime: {
        value: "", //a alterar
      },
    },
    content: [],
  },
  isLoading: true,
  submit: false,
};

function AddComposition() {
  //valores de enquadramento
  global.event = 0;
  // form validation rules
  const validationSchema = Yup.object().shape({
    numberOfTickets: Yup.string().required("Number of events is required"),
    tickets: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Name is required"),
      })
    ),
  });

  const handleClick = (e) => {
    var saver = e.target.attributes.getNamedItem("keep").value.split("_");
    var even = saver[0];
    var ite = saver[1];
    var val = saver[2];
    console.log("eve:" + even + "  ite:: " + ite + "  VAL:  " + val);
    var toChange = state.tasks;
    while (toChange.content.length < even + 1) {
      var t = {
        archetype_details: {
          archetype_id: {
            value: "", //alterado
          },

          rm_version: "1.0.1",
        },
        archetype_node_id: "", //alterado

        data: {
          archetype_node_id: "at0002",

          events: [
            {
              archetype_node_id: "at0003",

              data: {
                archetype_node_id: "at0001",

                items: [],
                name: {
                  value: "Single",
                },
              },
              name: {
                value: "Any event",
              },
              time: {
                value: "", //alterar
              },
            },
          ],
          name: {
            value: "History",
          },
          origin: {
            value: "", //alterar
          },
        },
        encoding: {
          code_string: "UTF-8",
          terminology_id: {
            value: "IANA_character-sets",
          },
        },
        language: {
          code_string: "en",
          terminology_id: {
            value: "ISO_639-1",
          },
        },
        name: {
          value: "", //alterar
        },
        subject: {
          class: "PARTY_SELF",
        },
      };
      toChange.content.push(t);
    }
    while (toChange.content[even].data.events[0].data.items < ite + 1) {
      var it = {
        archetype_node_id: "at0004",

        name: {
          value: "", //a alterar
        },
        value: {}, //a alterar
      };
      toChange.content[even].data.events[0].data.items.push(it);
    }
    console.log(toChange);
    //var key = Object.entries(
    //  toChange.content[even].data.events[0].data.items[ite].value
    //)[val];
    //toChange.content[even].data.events[0].data.items[ite].value[key[0]] =
    //  e.target.value;

    state.tasks = toChange;
  };
  // functions to build form returned by useForm() hook
  const { register, reset, errors, watch } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // watch to enable re-render when ticket number is changed
  const watchNumberOfTickets = watch("numberOfTickets");

  // return array of ticket indexes for rendering dynamic forms in the template
  function ticketNumbers() {
    return [...Array(parseInt(watchNumberOfTickets || 0)).keys()];
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle");
  };

  const updateEvent = () => {
    console.log("upadateZito");
    //console.log(event);
    event = event + 1;
  };

  const forStarters = () => {
    this.event = 0;
  };

  const updateItem = () => {
    this.item = this.item + 1;
    this.value = 0;
  };

  const updateValue = () => {
    this.value = this.value + 1;
  };

  if (state.submit === true) {
    console.log("Enttreii");
    return (
      <Redirect
        to={"/ehr/" + this.id.id + "/versioned/" + this.id.idV + "/composition"}
      />
    );
  } else {
    return (
      <form onSubmit={handleSubmit} onReset={reset}>
        {forStarters}
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
                      keep={event + "_" + item + "_" + value}
                      onChange={handleClick}
                    />
                    <div className="invalid-feedback">
                      {errors.tickets?.[i]?.name?.message}
                    </div>
                    <AddSmaller event={event} item={item} value={value} />
                  </div>
                </div>
              </div>
              {updateEvent()}
            </div>
          ))}
          <div className="card-footer text-center border-top-0">
            <button type="submit" className="btn btn-primary mr-1">
              Save
            </button>
            <button className="btn btn-secondary mr-1" type="reset">
              Reset
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddComposition;
