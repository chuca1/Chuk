import React, { Component } from "react";
import axios from "axios";
class SeeAllLogros extends Component {
  state = {
    logros: [],
    trabajos: []
  };
  componentDidMount = () => {
    axios
      .get("http://chuca.herokuapp.com/logros")
      .then(({ data }) => {
        this.setState({ logros: data.logros });
      })
      .catch(err => console.log(err));
    axios
      .get("http://chuca.herokuapp.com/trabajos")
      .then(({ data }) => {
        this.setState({ trabajos: data.trabajos });
      })
      .catch(err => console.log(err));
  };
  render() {
    const { logros } = this.state;
    return (
      <div className="AllLogros">
        <div>
          <h2>
            Today, I consider myself the luckiest man on the face of the earth.
          </h2>
          <p>Here are some of my archivments in the last years.</p>
        </div>
        {logros.map((logro, i) => {
          if (i % 2 === 0) {
            return (
              <div key={i}>
                <div>
                  <h3>{logro.name}</h3>
                  <h4>{logro.date}</h4>
                  <p>{logro.description}</p>
                </div>
                <img src={logro.imagen} alt="imagen logro" />
              </div>
            );
          }
          return (
            <div key={i}>
              <img src={logro.imagen} alt="imagen logros" />
              <div>
                <h3>{logro.name}</h3>
                <h4>{logro.date}</h4>
                <p>{logro.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default SeeAllLogros;
