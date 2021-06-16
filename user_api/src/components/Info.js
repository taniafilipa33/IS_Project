import React, { Component } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

class Info extends Component {
  constructor(props) {
    console.log("oi");
    super(props);
    this.evento = 0;
    this.item = 0;
    this.value = 0;
    this.color = "light";
    this.state = { tasks: [], isLoading: true, submit: false };
    this.id = props.match.params;
    this.idEhr = "";
  }
  callAPI() {
    console.log(this.id.idV);
    fetch(
      "http://localhost:7300/ehr/" +
      this.id.id +
      "/versioned/" +
      this.id.idV +
      "/composition"
    )
      .then((res) => res.text())
      .then((res) => {
        var resp = [];
        JSON.parse(res).map((ele) => {
          if (ele.uid.value.split("::")[2] == this.id.ve) resp.push(ele);
        });
        this.setState({ tasks: resp[0] });
        this.setState({ isLoading: false });
      });
  }


  handleSubmit = async () => {
    await axios.post("http://localhost:7300/ehr/" +
      this.id.id +
      "/versioned/" +
      this.id.idV +
      "/composition/update", this.state.tasks).then((e) => {this.setState({ submit: true }) }).catch((e) => console.log(e))
  }

  handleClick = (e) => {
    var saver = e.target.attributes.getNamedItem("keep").value.split("_");
    var even = saver[0];
    var ite = saver[1];
    var val = saver[2];
    console.log("eve:" + even + "  ite:: " + ite + "  VAL:  " + val);
    var toChange = this.state.tasks;
    var key = Object.entries(
      toChange.content[even].data.events[0].data.items[ite].value
    )[val];
    toChange.content[even].data.events[0].data.items[ite].value[key[0]] =
      e.target.value;

    this.setState({ tasks: toChange });
  };

  updateEvent = () => {
    this.evento = this.evento + 1;
    this.item = 0;
  };

  forStarters = () => {
    this.evento = 0;
  };

  updateItem = () => {
    this.item = this.item + 1;
    this.value = 0;
  };

  updateValue = () => {
    this.value = this.value + 1;
  };

  componentDidMount() {
    this.callAPI();
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <div>
          <h1>loading...</h1>
        </div>
      );
    }
    if (this.state.submit === true) {
      console.log("Enttreii")
      return (
        <Router>
          <switch>
            <Redirect to="/ehr" />
          </switch>
        </Router>
      )
    }
    if (this.state.isLoading === false) {
      console.log(this.state.tasks.content);
      console.log(this.state.submit)
      return (
        <>
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 rounded " +
              (this.color === "light"
                ? "bg-white"
                : "bg-lightBlue-900 text-white")
            }
          >
            <section className="relative py-16 ">
              <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                      <div className="rounded-t mb-0 px-6 py-6">
                        <div className="text-center mb-3">
                          <br></br>
                          <h3 className="text-blueGray-800 text-xl font-bold">
                            Version
                          </h3>
                        </div>
                        <hr></hr>
                        <hr className="mt-6 border-b-1 border-blueGray-300" />
                      </div>
                      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="text-blueGray-600 text-center mb-3 font-bold">
                          <h4>Events</h4>
                        </div>

                        <form onSubmit={this.handleSubmit}>
                          {this.forStarters()}
                          {this.state.tasks.content.map((headCell) => (
                            <div>
                              <br></br>
                              <hr className="mt-6 border-b-1 border-blueGray-300" />
                              <br></br>
                              <div className="text-blueGray-500 text-center mb-3 font-bold">
                                <h5>{headCell.name.value}</h5>
                              </div>
                              {headCell.data.events[0].data.items.map(
                                (head) => (
                                  <div>
                                    <br></br>
                                    <div className="text-blueGray-700 text-center text-sm mb-3 font-bold">
                                      <h6>{head.name.value}</h6>
                                    </div>
                                    {Object.entries(head.value).map((valor) => (
                                      <div>
                                        <div className="relative w-full mb-3">
                                          <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                          >
                                            {valor[0]}
                                          </label>
                                          <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            value={valor[1]}
                                            keep={
                                              this.evento +
                                              "_" +
                                              this.item +
                                              "_" +
                                              this.value
                                            }
                                            onChange={this.handleClick}
                                          />
                                        </div>
                                        {this.updateValue()}
                                      </div>
                                    ))}
                                    {this.updateItem()}
                                  </div>
                                )
                              )}
                              {this.updateEvent()}
                            </div>
                          ))}
                          <div className="text-center mt-6">
                            <button
                              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                              type="submit"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      );
    }
  }
}

export default Info;
