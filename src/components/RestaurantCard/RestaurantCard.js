import React from "react";
import { RestaurantCardContainer, RestaurantInfo } from "./Styled";

const RestaurantCard = (props) => {
  return (
    <RestaurantCardContainer>
      <img
        src="https://source.unsplash.com/300x200/?food,restaurant"
        alt="Restaurant"
      />

      <RestaurantInfo>
        <div>
          <h3>Nome restaurante</h3>
          <p> 00 min </p>
        </div>

        <p>Frete R$10 </p>
      </RestaurantInfo>
    </RestaurantCardContainer>
  );
};

export default RestaurantCard;