import React, { Component } from "react";
import axios from "axios";

class AddVersion extends Component {
    constructor(props) {
        console.log("oi");
        super(props);
        this.evento = 0;
        this.item = 0;
        this.value = 0;
        this.color = "light";
        this.state = { tasks: {
            _type : "",
            uid: {
                value:""
            },
            owner_id : {
                id : {
                    _type : "",
                    value : ""
                },
                namespace : "",
                type: ""
            },
            timeCreated: ""
        }, isLoading: true, submit: false };
        this.id = props.match.params;
        this.idEhr = "";
        this.validateOnChange = false
    }

    handleSubmit = async () => {
        console.log(this.id.id)
        await axios.post("http://localhost:7300/ehr/"+this.id.id+"/verioned/add", this.state.tasks).then((e) => { this.setState({ submit: true }) }).catch((e) => console.log(e))
    }

    handle=(e)=> {
        const newdata = { ...this.state.tasks } 
        newdata.owner_id.id.value = this.id.id
        if(e.target.id === "_type"){
            newdata._type = e.target.value
        }
        else if (e.target.id === "id_type"){
            newdata.owner_id.id._type = e.target.value
        }
        else if (e.target.id === "namespace"){
            newdata.owner_id.namespace = e.target.value
        }
        else{
            newdata.owner_id.type = e.target.value
        }
        console.log("New data==", newdata)
        this.setState({tasks:newdata})
        
    }

    handleClick = (e) => {
        var saver = e.target.attributes.getNamedItem("keep").value.split("_");
        var even = saver[0];
        var ite = saver[1];
        var val = saver[2];
        console.log("eve:" + even + "  ite:: " + ite + "  VAL:  " + val);
        var toChange = this.state.tasks;

        this.setState({ tasks: toChange });
    };

    render() {
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
                                                        Create Versioned Composition
                                                    </h3>
                                                </div>
                                                <hr></hr>
                                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                                            </div>
                                            <form onSubmit={this.handleSubmit}>
                                                
                                                <div>
                                                    <div>
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                                Type
                                                            </label>
                                                            <input
                                                                id="_type"
                                                                type="text"
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                onChange={(e)=>this.handle(e)}
                                                            />
                                                        </div>
                                                        <br></br>
                                                        <div className="text-blueGray-500 text-center mb-3 font-bold">
                                                            <h5>Owner Id</h5>
                                                        </div>
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                             Id Type  
                                                            </label>
                                                            <input
                                                                id="id_type"
                                                                type="text"
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                onChange={(e)=>this.handle(e)}
                                                            />
                                                        </div>
                                                
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                              Namespace  
                                                            </label>
                                                            <input
                                                                id="namespace"
                                                                type="text"
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                               
                                                                onChange={(e)=>this.handle(e)}
                                                            />
                                                        </div>
                                                        <div className="relative w-full mb-3">
                                                            <label
                                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                                htmlFor="grid-password"
                                                            >
                                                              Type  
                                                            </label>
                                                            <input
                                                                id="otype"
                                                                type="text"
                                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                
                                                                onChange={(e)=>this.handle(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
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
                        </section>
                    </div>
                </>
            );
        }
    
}

export default AddVersion;
