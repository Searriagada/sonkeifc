import { useState, useEffect } from "react";

export const FetchCards = (url) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCards(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);

    return cards;
}