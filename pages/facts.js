export default function Fact() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API,
      "X-RapidAPI-Host": "facts-by-api-ninjas.p.rapidapi.com",
    },
  };
  fetch("https://facts-by-api-ninjas.p.rapidapi.com/v1/facts", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return <></>;
}
