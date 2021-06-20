/* eslint-disable no-use-before-define */
import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.idEhr = "";
  }

  sender() {
    console.log("fui chamado");
    console.log(document.getElementById("free-solo-2-demo").value);
    //this.idEhr = document.getElementById("free-solo-2-demo").value;
    window.location.href =
      "http://localhost:3000/ehr/" +
      document.getElementById("free-solo-2-demo").value +
      "/versioned";
  }

  callAPI() {
    fetch("http://localhost:7300/ehr")
      .then((res) => res.text())
      .then((res) => {
        var resp = [];
        //console.log(JSON.parse(res));
        JSON.parse(res).map((ele) => {
          resp.push(ele);
        });
        //console.log(resp);
        this.setState({ data: resp });
      });
  }

  componentDidMount() {
    this.setState({ isloaded: false });
    this.callAPI();
    this.setState({ isloaded: true });
  }

  render() {
    return (
      <div style={{ width: 600, margin:"auto" }}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={this.state.data.map((option) => option)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
            />
          )}
        />
        <button
          onClick={() => {
            this.sender();
          }}
        >
          Ver
        </button>
      </div>
    );
  }
}
export default Search;
