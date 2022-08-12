import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Searched = () => {
  const API = "b173060271ab463981d72c06b38d6b7e";
  const [searched, setSearched] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&query=${name}&number=9`
    );
    const data = await api.json();
    setSearched(data.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searched.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  justify-items: center;
`;

const Card = styled.div`
  width: 315px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
