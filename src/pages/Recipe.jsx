import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const API = "3d0f4a1a15d14191b69427f40a716cc8";
  let params = useParams();
  const [activeTab, setActiveTab] = useState("instructions");
  const [detailData, setDetailData] = useState({});
  useEffect(() => {
    const getDetails = async (name) => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${name}/information?apiKey=${API}`
      );
      const data = await api.json();
      setTimeout(() => 1000)
      setDetailData(data);
      console.log(detailData); /* doesn't work :(  why? */
    };
    getDetails(params.name);
  }, [params.name]);
  return (
    <DetailWrapper>
      <div>
        <h2>{detailData.title}</h2>
        <img src={detailData.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => {
            setActiveTab("instructions");
          }}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => {
            setActiveTab("ingredients");
          }}
        >
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: detailData.summary }}></h3>
          <h3
            dangerouslySetInnerHTML={{ __html: detailData.instructions }}
          ></h3>
        </div>
        )}
        {activeTab === 'ingredients' && (
        <ul>
          {console.log(detailData)}
          {detailData.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 10rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export default Recipe;
