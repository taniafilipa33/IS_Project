import React from "react";
import { createPopper } from "@popperjs/core";
import { Redirect } from "react-router";
import axios from "axios";

const NotificationDropdown = (props) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleDelete = async (e) =>{
    e.preventDefault()
    console.log("http://localhost:7300/ehr/"+props.idehr+"/versioned/" + props.idv +"/composition/" + props.ve)
    await axios.delete("http://localhost:7300/ehr/"+props.idehr+"/versioned/" + props.idv +"/composition/" + props.ve ).then((e) => { window.location.reload() }).catch((e) => console.log(e))
  }

  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fa fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href={"composition/" + props.ve}
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={<Redirect to={"composition/" + props.ve} />}
        >
          Open
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => handleDelete(e)}
        >
          Delete
        </a>
      </div>
    </>
  );
};

export default NotificationDropdown;
