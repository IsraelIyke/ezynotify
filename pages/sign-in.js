import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { supabase } from "../client";

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
      router.push("/profiles");
    }
  }

  if (submitted) {
    fetchProfile();
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Sign In</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: 10 }}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: 10 }}
        />
        <button onClick={() => signIn()}>Sign In</button>
      </main>
    </div>
  );
}
