import React from "react";

// components

import Navbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";
import ListC from "../components/listC";

export default function Composition() {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              opacity: "60%",
              backgroundImage:
                "url('https://www.healtheuropa.eu/wp-content/uploads/2018/04/Electronic-Health-Records.jpg')",
            }}
          ></div>
          <ListC />
        </div>
      </main>
      <Footer />
    </>
  );
}
