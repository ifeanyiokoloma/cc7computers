import React from "react";
import Slideshow from "../../components/slideshow/Slideshow";

const Employees = () => {
  return (
    <section>
      <Slideshow itemType={undefined} dir="employees" order="timestamp" limit={0} header="Our Team" />
    </section>
  );
};

export default Employees;
