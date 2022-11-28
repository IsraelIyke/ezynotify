import { useState, useEffect } from "react";
import { supabase } from "../client";

export default function Users() {
  const [id, setId] = useState();
  const [email, setEmail] = useState([]);

  useEffect(() => {
    getDetail();
  }, []);

  async function getDetail() {
    try {
      let { data, error, status } = await supabase
        .from("notification")
        .select(`email,days`); //

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setId(data.length);
        setEmail(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  let emailList = email.map((element) => {
    return (
      <>
        <div key={element.email}>
          email={element.email} days={element.days}{" "}
          <button
            onClick={async () => {
              try {
                const { error } = await supabase
                  .from("notification")
                  .update({
                    days: element.days + 31,
                  })
                  .eq("email", element.email);
              } catch (error) {
                console.log(error);
              } finally {
                alert("Added");
                getDetail();
              }
            }}
          >
            Add
          </button>
        </div>
        <br />
      </>
    );
  });
  return (
    <>
      Total user: {id} <br />
      <br />
      {emailList}
    </>
  );
}
