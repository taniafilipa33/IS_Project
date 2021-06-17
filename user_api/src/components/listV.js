import React, { Component } from "react";
import PropTypes from "prop-types";

// Component's Base CSS
import "../index.css";
import TableDropdown from "./TableDropdown";
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";

class ListVersioned extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.color = "light";
    this.state = { tasks: [], isLoading: true };
    this.id = props.match.params;
    this.DescriptionRenderer = ({ field }) => <textarea {...field} />;
    this.idEhr = "";
    this.SORTERS = {
      NUMBER_ASCENDING: (mapper) => (a, b) => mapper(a) - mapper(b),
      NUMBER_DESCENDING: (mapper) => (a, b) => mapper(b) - mapper(a),
      STRING_ASCENDING: (mapper) => (a, b) =>
        mapper(a).localeCompare(mapper(b)),
      STRING_DESCENDING: (mapper) => (a, b) =>
        mapper(b).localeCompare(mapper(a)),
    };

    this.styles = {
      container: { margin: "auto", width: "fit-content" },
    };
  }

  getSorter(data) {
    const mapper = (x) => x[data.field];
    let sorter = this.SORTERS.STRING_ASCENDING(mapper);

    if (data.field === "Id") {
      sorter =
        data.direction === "ascending"
          ? this.SORTERS.NUMBER_ASCENDING(mapper)
          : this.SORTERS.NUMBER_DESCENDING(mapper);
    } else {
      sorter =
        data.direction === "ascending"
          ? this.SORTERS.STRING_ASCENDING(mapper)
          : this.SORTERS.STRING_DESCENDING(mapper);
    }
    return sorter;
  }

  callAPI() {
    console.log(this.id.id);
    fetch("http://localhost:7300/ehr/" + this.id.id + "/versioned")
      .then((res) => res.text())
      .then((res) => {
        var resp = [];
        console.log(JSON.parse(res));
        JSON.parse(res).map((ele) => {
          resp.push(ele);
        });
        this.setState({ tasks: resp });
        this.count = this.state.tasks.length;
        this.valores = [];
        this.service = {
          fetchItems: (payload) => {
            let result = new Array(this.valores);

            result = result[0].sort(this.getSorter(payload.sort));
            console.log(result);
            return Promise.resolve(result);
          },
          create: (task) => {
            this.count += 1;
            this.state.tasks.push({
              ...task,
              id: this.count,
            });
            return Promise.resolve(task);
          },
          update: (data) => {
            const task = this.state.tasks.find((t) => t.id === data.id);
            task.title = data.title;
            task.description = data.description;
            return Promise.resolve(task);
          },
          delete: (data) => {
            const task = this.state.tasks.find((t) => t.id === data.id);
            this.state.tasks = this.state.tasks.filter((t) => t.id !== task.id);
            return Promise.resolve(task);
          },
        };
        this.setState({ isLoading: false });
      });
  }

  UNSAFE_componentWillMount() {
    this.callAPI();
  }

  newComposition = () =>{
    return(
      <Redirect to = "/ehr"/>
    )
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <div>
          <h1>loading...</h1>
        </div>
      );
    }
   
    else if (this.state.isLoading === false) {
      console.log(this.state.tasks);
      return (
        <>
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
              (this.color === "light"
                ? "bg-white"
                : "bg-lightBlue-900 text-white")
            }
          >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3
                    className={
                      "font-semibold text-lg " +
                      (this.color === "light"
                        ? "text-blueGray-700"
                        : "text-white")
                    }
                  >
                    Versioned Compositions
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (this.color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      ID
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (this.color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Type
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (this.color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Time Created
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (this.color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Namespace
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (this.color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tasks.map((headCell) => (
                    <tr>
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        {headCell.uid.value}
                      </td>
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        {headCell._type}
                      </td>
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        {headCell.timeCreated}
                      </td>
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                        {headCell.owner_id.namespace}
                      </td>
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        <TableDropdown id={headCell.uid.value} idehr={this.id.id}/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <br></br>
            </div>
          </div>
          <Button variant="contained"  style={{ color: "white", background: "#3cafb2", width : "30%"}} href={"/ehr/" + this.id.id +"/versioned/add"}>
              Create Version Composition
              </Button>
        </>
      );
    }
  }
}

export default ListVersioned;
