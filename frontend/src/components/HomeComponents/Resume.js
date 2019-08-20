import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
const Resume = () => {
  return (
    <div>
      <div className="Resume">
        <img
          src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg"
          alt="aqui va mi logo"
        />
        <div>
          <h2>GM. Diego GM</h2>

          <p>
            Coder, Twitter Early Bird 2019, IronHacker, ITESM student,
            avant-garde, sports fan, human. To learn more about me enter here
          </p>
          <Link to="/archievements">
            <Button>Here</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
