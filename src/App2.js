import React from "react";

function App2() {
  const direccion = "seguros piramide";
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?q=seguros+Piramide,Caracas+Venezuela"
        width="600"
        height="450"
        // style="border:0;"
        // allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default App2;

{
  /* <iframe
  src="https://www.google.com/maps/embed?pb=segurosPiramide"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
></iframe>; */
}
