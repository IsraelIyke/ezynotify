import { useEffect } from "react";
import { supabase } from "../client";

export default function Users() {
  useEffect(() => {
    getDetail();
  }, []);

  async function getDetail() {
    try {
      let { data, error, status } = await supabase
        .from("notification")
        .select(`number,days`); //

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        console.log(data[0]);
        for (let i = 0; i < data.length; i++) {
          if (data[i].days > 0) {
            try {
              const { error } = await supabase
                .from("notification")
                .update({
                  days: data[i].days - 1,
                })
                .eq("number", data[i].number);
            } catch (error) {
              console.log(error);
            }
          }
          if (data[i].days == 3) {
            alert(
              "Hi there, your subcription for ezynotify premium plan is about to expire. You can renew to continue enjoying our services. Thanks"
            );
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  return <>This script handle subscription days</>;
}
