import styled from "styled-components";

export const RestaurantCardContainer = styled.div`
  width: 328px;
  height: 188px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  padding: 0 0 16px;
  img {
    width: 100%;
    height: 120px;
    border-radius: 8px 8px 0 0;
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  div {
    margin-left: 16px;
    margin-right: 16px;
    width: 100%;
    height: 150px;
  }
  p {
    font-size: 16px;
    width: 150px;
    margin-bottom: 40px;
    color: #b8b8b8;
  }
  h3 {
    font-size: 16px;
    font-weight: normal;
    color: #e86e5a;
    letter-spacing: -0.39px;
  }
`;