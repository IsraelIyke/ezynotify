import { useEffect, useState } from "react";

export default function Home() {
  const [resp, setResp] = useState();
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API,
        "X-RapidAPI-Host": "bible-memory-verse-flashcard.p.rapidapi.com",
      },
    };

    fetch(
      "https://bible-memory-verse-flashcard.p.rapidapi.com/get_verses?book_name=john&text_mode=ends&chapter=1&verse_num1=1&verse_num2=5",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response.verses))
      .catch((err) => console.error(err));
  }, []);

  return <>{resp}</>;
}
