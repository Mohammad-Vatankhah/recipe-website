import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink, useParams } from "react-router-dom";

const Cuisine = () => {
  let params = useParams();
  const API = "b173060271ab463981d72c06b38d6b7e";
  const [cuisine, setCuisine] = useState([]);
  const getCousine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&cuisine=${name}&number=9`
    );
    const data = await api.json();
    setCuisine(data.results);
  };
  useEffect(() => {
    getCousine(params.type);
  }, [params.type]);
  return <Grid>
    {cuisine.map(item => {
        return (
            <Card key={item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
            </Card>
        )
    })}
  </Grid>;
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
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Cuisine;
