import React, { Component } from "react";
import axios from "axios";
class SeeAllTrabajos extends Component {
  state = {
    trabajos: []
  };
  componentDidMount = () => {
    axios
      .get("http://chuca.herokuapp.com/trabajos")
      .then(({ data }) => {
        this.setState({ trabajos: data.trabajos });
      })
      .catch(err => console.log(err));
  };
  render() {
    const { trabajos } = this.state;

    return (
      <div className="AllLogros">
        <div>
          <h2>Show me the code </h2>
          <br />
          <p> Here you will find my work in the STEM category.</p>
        </div>
        <hr />
        {trabajos.map((trabajo, i) => {
          if (trabajo.link !== undefined) {
            if (i % 2 === 0) {
              return (
                <>
                  <div key={i} className="unTrabajo">
                    <div>
                      <h3>{trabajo.name}</h3>
                      <h4>{trabajo.date}</h4>
                      <p>{trabajo.description}</p>
                      <a href={trabajo.link}>See it here</a>
                    </div>
                    <img src={trabajo.imagen} alt="imagen trabajo" />
                  </div>
                  <hr />
                </>
              );
            }
            return (
              <>
                <div key={i} className="unTrabajo">
                  <img src={trabajo.imagen} alt="imagen logros" />
                  <div>
                    <h3>{trabajo.name}</h3>
                    <h4>{trabajo.date}</h4>
                    <p>{trabajo.description}</p>
                    <a href={trabajo.link}>See it here</a>
                  </div>
                </div>
                <hr />
              </>
            );
          }
          if (i % 2 === 0) {
            return (
              <>
                <div key={i} className="unTrabajo">
                  <div>
                    <h3>{trabajo.name}</h3>
                    <h4>{trabajo.date}</h4>
                    <p>{trabajo.description}</p>
                  </div>
                  <img src={trabajo.imagen} alt="imagen trabajo" />
                </div>
                <hr />
              </>
            );
          }
          return (
            <>
              <div key={i} className="unTrabajo">
                <img src={trabajo.imagen} alt="imagen logros" />
                <div>
                  <h3>{trabajo.name}</h3>
                  <h4>{trabajo.date}</h4>
                  <p>{trabajo.description}</p>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    );
  }
}
export default SeeAllTrabajos;
