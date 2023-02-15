import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../services/SupabaseClient";

export default function LogIn() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const logIn = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.signInWithPassword({
        email: mail,
        password: password,
      });
      if (error) {
        setText("Logowanie nie powiodło się!");
      }
      if (user) {
        navigate("/settings");
      }
    };
    logIn();
  };

  //   const handleSignUp = (e) => {
  //     e.preventDefault();
  //     const signUp = async () => {
  //       const {
  //         data: { user },
  //         error,
  //       } = await supabase.auth.signUp({
  //         email: mail,
  //         password: password,
  //       });

  //       if (error) {
  //         setText("Rejestracja nieudana!");
  //       }
  //       if (user) {
  //         setText("użytkownik dodany");
  //       }
  //     };
  //     signUp();
  //   };

  return (
    <div className="login">
      <label>mail</label>
      <input
        type="email"
        value={mail}
        onChange={(e) => {
          setMail(e.target.value);
        }}
      />
      <label>password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {text && <p style={{ marginTop: 40, marginBottom: 20 }}>{text}</p>}
      <button
        style={{ marginTop: 40, width: 150 }}
        className="login-button"
        onClick={handleLogin}
      >
        zaloguj
      </button>
      {/* <button
        style={{ marginTop: 40, width: 150 }}
        className="login-button"
        onClick={handleSignUp}
      >
        zarejestruj
      </button> */}
    </div>
  );
}
