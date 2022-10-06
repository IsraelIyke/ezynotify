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
      .then((response) => console.log(response.verses[0].verse_text))
      .catch((err) => console.error(err));
  }, []);

  return <></>;
}

// “Nothing is original. Steal from anywhere that resonates with inspiration or fuels your imagination. Devour old films, new films, music, books, paintings, photographs, poems, dreams, random conversations, architecture, bridges, street signs, trees, clouds, bodies of water, light and shadows. Select only things to steal from that speak directly to your soul. If you do this, your work (and theft) will be authentic. Authenticity is invaluable; originality is non-existent. And don’t bother concealing your thievery - celebrate it if you feel like it. In any case, always remember what Jean-Luc Godard said: “It’s not where you take things from - it’s where you take them to."
// Jim Jarmusch
