import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { supabase } from "../client";
import Nav from "./nav";
import Textfield from "./Textfield/textfield";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  async function signIn() {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.log({ error });
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div>
        <h1>Please check your email to sign in</h1>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "10rem",
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <Nav />
      <div className="nav-bg"></div>
      <main
        style={{
          padding: "2rem",
          backgroundColor: "white",
          width: "20rem",
          height: "20rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: "2px 2px 5px gray",
          borderRadius: "2rem",
        }}
      >
        <h1 style={{ color: "black" }}>Sign Up</h1>
        {/* <input
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: 10 }}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: 10 }}
        /> */}
        <Textfield />
        <Textfield />
        <button onClick={() => signIn()}>Sign In</button>
      </main>
    </div>
  );
}
