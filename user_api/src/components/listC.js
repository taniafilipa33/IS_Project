import React, { Component } from "react";
import PropTypes from "prop-types";

// Component's Base CSS
import "../index.css";
import TableDrop from "./TableDrop";

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
        console.log("res===", JSON.parse(res));
        JSON.parse(res).map((ele) => {
          resp.push(ele);
        });
        this.setState({ tasks: resp });
        this.count = this.state.tasks.length;
        this.valores = [];
        this.state.tasks.forEach((e) => {
          console.log(e);
          var h = {};
          h.id = e.uid.value.split("::")[2];
          h.name = e.name.value;
          h.archetyped_id = e.archetype_details.archetype_id;
          h.template_id = e.archetype_details.template_id;
          h.category = e.category.value;
          h.start_time = e.context.startTime.value;
          this.valores.push(h);
        });
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

  render() {
    if (this.state.isLoading === true) {
      return (
        <div>
          <h1>loading...</h1>
        </div>
      );
    }
    if (this.state.isLoading === false) {
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
                    Compositions
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
                      Name
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (this.color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Archetyped ID
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (this.color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Archetyped Template
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (this.color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Category
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (this.color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Start Time
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (this.color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Version
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
                        {headCell.name.value}
                      </td>
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        {headCell.archetype_details.archetype_id}
                      </td>
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        {headCell.archetype_details.template_id}
                      </td>
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                        {headCell.category.value}
                      </td>
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                        {headCell.context.startTime.value}
                      </td>
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                        {headCell.uid.value.split("::")[2]}
                      </td>
                      <td className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        <TableDrop ve={headCell.uid.value.split("::")[2]} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      );
    }
  }
}

export default ListVersioned;
