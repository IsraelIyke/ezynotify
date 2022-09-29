import { useEffect, useState } from "react";

export default function Home() {
  const [resp, setResp] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API,
        "X-RapidAPI-Host": "facts-by-api-ninjas.p.rapidapi.com",
      },
    };
    fetch("https://facts-by-api-ninjas.p.rapidapi.com/v1/facts", options)
      .then((response) => response.json())
      .then((response) => setResp(response[0].fact))
      .catch((err) => console.error(err));
  }, []);

  return <>{resp}</>;
}
