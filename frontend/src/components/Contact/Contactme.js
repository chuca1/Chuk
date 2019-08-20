import React, { Component } from "react";

export default class Contactme extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="fondoC">
          <div>
            <h2>
              Louis, I think this is the beginning of a beautiful friendship.
            </h2>
            <h3>Let me build your website</h3>
            <p>
              Send me your ideas in the box below or contact me for any reason
              in my social media below.
            </p>
          </div>
          <div className="redes">
            <a href="https://www.facebook.com/Chuca-Web-Development-103446791025534">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
                alt="Logo FaceBook"
              />
            </a>
            <a href="https://twitter.com/unidconwifi">
              {" "}
              <img
                src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png"
                alt="Logo Twitter"
              />
            </a>
            <a href="https://www.instagram.com/chucagm/">
              <img
                src="http://pluspng.com/img-png/instagram-png-instagram-png-logo-1455.png"
                alt="Logo Instagram"
              />
            </a>
            <a href="https://www.linkedin.com/in/diego-garza-macias-414b1118b/">
              <img
                src="https://image.flaticon.com/icons/png/512/61/61109.png"
                alt="Logo Linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
