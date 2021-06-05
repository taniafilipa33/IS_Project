import React, { Component } from "react";

import CRUDTable, {
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
} from "react-crud-table";

// Component's Base CSS
import "../index.css";

class ListVersioned extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
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
    this.service = {
      fetchItems: (payload) => {
        let result = Array.from(this.state.tasks);
        result = result.sort(this.getSorter(payload.sort));
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
    this.styles = {
      container: { margin: "auto", width: "fit-content" },
    };
  }

  getSorter(data) {
    const mapper = (x) => x[data.field];
    let sorter = this.SORTERS.STRING_ASCENDING(mapper);

    if (data.field === "id") {
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
    fetch("http://localhost:7300/ehr/" + this.id + "/versioned")
      .then((res) => res.text())
      .then((res) => {
        var resp = [];
        //console.log(JSON.parse(res));
        JSON.parse(res).map((ele) => {
          resp.push(ele);
        });
        this.setState({ tasks: resp });
        this.count = this.state.tasks.length;
        console.log(this.state.tasks);
      });
  }

  UNSAFE_componentWillMount() {
    this.callAPI();
    this.setState({ isLoading: false });
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
      return (
        <div style={this.styles.container}>
          <CRUDTable
            caption="Versioned Compositions"
            fetchItems={(payload) => this.service.fetchItems(payload)}
          >
            <Fields>
              <Field name="uid" label="Id" hideInCreateForm readOnly />
              <Field name="type" label="Type" placeholder="Type" />
              <Field
                name="owner_id"
                label="Owner Type"
                render={this.DescriptionRenderer}
              />
            </Fields>
            <CreateForm
              title="Versioned Creation"
              message="Start a new Record"
              trigger="Create Versioned Composition"
              onSubmit={(task) => this.service.create(task)}
              submitText="Create"
              validate={(values) => {
                const errors = {};
                values.owner_id = this.id;
                if (!values.title) {
                  errors.title = "Please, provide task's title";
                }

                if (!values.description) {
                  errors.description = "Please, provide task's description";
                }

                return errors;
              }}
            />

            <UpdateForm
              title="Task Update Process"
              message="Update task"
              trigger="Update"
              onSubmit={(task) => this.service.update(task)}
              submitText="Update"
              validate={(values) => {
                const errors = {};

                if (!values.id) {
                  errors.id = "Please, provide id";
                }

                if (!values.title) {
                  errors.title = "Please, provide task's title";
                }

                if (!values.description) {
                  errors.description = "Please, provide task's description";
                }

                return errors;
              }}
            />

            <DeleteForm
              title="Task Delete Process"
              message="Are you sure you want to delete the task?"
              trigger="Delete"
              onSubmit={(task) => this.service.delete(task)}
              submitText="Delete"
              validate={(values) => {
                const errors = {};
                if (!values.id) {
                  errors.id = "Please, provide id";
                }
                return errors;
              }}
            />
          </CRUDTable>
        </div>
      );
    }
  }
}

export default ListVersioned;
