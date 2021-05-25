import styled from "styled-components";

const StyledChartContainer = styled.section`
  border: solid 1px grey;
  border-radius: 8px;
  height: 320px;
  margin: 2% 11%;
  width: 600px;
  h3 {
    display: flex;
    justify-content: center;
    margin: 2%;
  }
`;

const StyledMainContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  justify-content: center;
  margin-top: 10px;
`;

const StyledValue = styled.span`
  display: flex;
  font-size: 10rem;
  justify-content: center;
  width: 100%;
`;

export { StyledMainContainer, StyledChartContainer, StyledValue };
