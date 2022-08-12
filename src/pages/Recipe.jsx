import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const API = "b173060271ab463981d72c06b38d6b7e";
  let params = useParams();
  const [details, setDetails] = useState();
  const getDetails = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${name}/information?apiKey=${API}`
    );
    const data = await api.json();
    setDetails(data)
    console.log(data);
  };
  useEffect(() => {
    getDetails(params.name);
  }, [params.name]);
  return <div>Recipe</div>;
};

export default Recipe;
