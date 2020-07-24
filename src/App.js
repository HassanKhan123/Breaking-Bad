import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from './components/characters/CharactersGrid'
import "./App.css";
import Loading from "./images/spinner.gif";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(
        `https://www.breakingbadapi.com/api/characters`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);
  return (
    <div className="container">
      <Header />
      <CharacterGrid items={items} isLoading={isLoading}/>
    </div>
  );
};

export default App;
