import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../client";
import Nav from "./nav";
import Textfield from "./Textfield/textfield";
const { motion } = require("framer-motion");

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    <>
      <div className="explore-page-hero">
        <Nav />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          className="content"
          style={{ textAlign: "center" }}
        >
          <div>
            <main>
              <h1>Sign Up</h1>
              <Textfield
                type="email"
                placeholder="Email"
                id="email"
                label="Email"
                setState={setEmail}
                value={email}
              />
              <Textfield
                type="password"
                placeholder="Password"
                id="password"
                label="Password"
                setState={setPassword}
                value={password}
              />
              <Textfield
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                label="Confirm Password"
                setState={setConfirmPassword}
                value={confirmPassword}
              />
              <div onClick={() => signIn()} className="reg-btn">
                Sign Up
              </div>
            </main>
          </div>
        </motion.div>
      </div>
    </>
  );
}
