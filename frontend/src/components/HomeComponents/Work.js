import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
const Work = () => {
  return (
    <div>
      <div className="Work">
        <div>
          <h2>Just keep coding </h2>
          <p>
            My work expirience goes from JS Web Games to Math problems
            generator, the width of your work field is as big as you can stretch
            your arms.
            <br />
            JavaScript, Node Js, React Js, MongoDB, Ajax, C++, Python.
            <br /> To learn more click here
          </p>
          <Link to="/works">
            <Button>Here</Button>
          </Link>
        </div>
        <img
          src="https://res.cloudinary.com/chuca/image/upload/v1570048882/Chuca-logo-tr_mkhwlb.png"
          alt="aqui va mi logo"
        />
      </div>
    </div>
  );
};

export default Work;
