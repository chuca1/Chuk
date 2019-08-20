import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <div className="Resume">
        <div>
          <h2>Are you talking to me?</h2>
          <p>
            My work expirience goes from JS Web Games to Math problems
            generator, the width of your work field is as big as you can stretch
            your arms. To learn more click here
          </p>
          <Link to="/contact">
            <Button>Here</Button>
          </Link>
        </div>
        <img
          src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
          alt="aqui va mi logo"
        />
      </div>
    </div>
  );
};

export default Contact;
