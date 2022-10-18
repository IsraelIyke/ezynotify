import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../client";
import Nav from "../components/nav";
const { motion } = require("framer-motion");
import Textfield from "./Textfield/textfield";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  async function signIn() {
    const { error } = await supabase.auth.signIn({ email, password });
    if (error) {
      console.log({ error });
    } else {
      setSubmitted(true);
    }
  }

  async function fetchProfile() {
    const profileData = await supabase.auth.user();
    console.log("profileData: ", profileData);
    if (!profileData) {
      router.push("/sign-in");
    } else {
      router.push("/dashboard");
    }
  }

  if (submitted) {
    fetchProfile();
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
              <h1>Sign In</h1>
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
                id="email"
                label="Password"
                setState={setPassword}
                value={password}
              />
              <div onClick={() => signIn()} className="reg-btn">
                Sign In
              </div>
            </main>
          </div>
        </motion.div>
      </div>
    </>
  );
}
