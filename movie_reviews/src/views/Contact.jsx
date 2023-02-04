import React from "react";
import Nav from "../components/Nav";

export default function Contact() {
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
          <p>email@email.com</p>
          <h3>osoba 1:</h3>
          <p>user@user.com</p>
          <h3>osoba 2:</h3>
          <p>user@poncki.pl</p>
          <h3>osoba 3:</h3>
          <p>idk@user.com</p>
        </div>
        <form className="contact-form">
          <label className="contact-form-label">Imię:</label>
          <input className="contact-form-input" />
          <label className="contact-form-label">E-mail:</label>
          <input className="contact-form-input" />
          <label className="contact-form-label">Wiadomość:</label>
          <textarea className="contact-form-input contact-form-textarea" />
          <button className="contact-form-send">wyślij</button>
        </form>
      </div>
    </>
  );
}
