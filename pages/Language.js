import { useState } from "react";
import { supabase } from "../client";

export default function Language() {
  const [language, setLanguage] = useState(null);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`language`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setLanguage(data.language);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function updateProfile({ language }) {
    try {
      const user = supabase.auth.user();
      const updates = {
        id: user.id, //
        language,

        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", //don't return the value after inserting
      });

      if (error) {
        throw error;
      }

      alert("updated");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Language Three"
          id="language3"
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
        />
      </div>

      <button
        className="signup-button"
        onClick={() =>
          updateProfile({
            language,
          })
        }
      >
        Template
      </button>
    </div>
  );
}
