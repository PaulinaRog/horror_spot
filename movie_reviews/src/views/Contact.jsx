import React from "react";
import { useState } from "react";
import Nav from "../components/Nav";

export default function Contact() {
  const [style, setStyle] = useState({ display: "none" });

  const handleFocus = () => {
    setStyle(null);
  };

  const handleBlur = () => {
    setStyle({ display: "none" });
  };

  return (
    <>
      <div className="contact">
        <Nav />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "20%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h2 style={{ marginBottom: 40 }}>napisz do nas</h2>
          <h3>redakcja:</h3>
          <p>jeszczenie@mamaila.com</p>
          <h3>Vicek:</h3>
          <p>vicek11@gmail.com</p>
          <h3>Puszek:</h3>
          <p>rog.paulina@gmail.com</p>
          <h3>Przemo:</h3>
          <p>pkepinski@gmail.com</p>
        </div>
        <form className="contact-form">
          <label className="contact-form-label">Imię:</label>
          <input
            className="contact-form-input"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className="contact-form-label">E-mail:</label>
          <input
            className="contact-form-input"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label className="contact-form-label">Wiadomość:</label>
          <textarea
            className="contact-form-input contact-form-textarea"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button className="contact-form-send">wyślij</button>
        </form>
        <div className="contact-spider" style={style && style}>
          <div class="spider-web"></div>
          <div class="spider-container">
            <div class="arm-container right">
              <div class="arm A">
                <div class="arm B">
                  <div class="arm C"></div>
                </div>
              </div>
              <div class="arm A">
                <div class="arm B">
                  <div class="arm C"></div>
                </div>
              </div>
              <div class="arm A">
                <div class="arm B">
                  <div class="arm C"></div>
                </div>
              </div>
              <div class="arm A">
                <div class="arm B">
                  <div class="arm C"></div>
                </div>
              </div>
            </div>
            <div class="arm-container left">
              <div class="arm A">
                <div class="arm B">
                  <div class="arm C"></div>
                </div>
              </div>
              <div class="arm A">
                <div class="arm B">
                  <div class="arm C"></div>
                </div>
              </div>
              <div class="arm A">
                <div class="arm B">
                  <div class="arm C"></div>
                </div>
              </div>
              <div class="arm A">
                <div class="arm B">
                  <div class="arm C"></div>
                </div>
              </div>
            </div>
            <div class="spider-body">
              <div class="eye eye-left"></div>
              <div class="eye eye-right"></div>
            </div>
          </div>{" "}
        </div>
        {/* <div>
          CREDIT
          <a href="https://codepen.io/SofiaSergio/" target="_blank">
            <div id="link">
              <i class="fab fa-codepen"></i>
              <p>watch other pens</p>
            </div>
          </a>
        </div> */}
      </div>
    </>
  );
}
