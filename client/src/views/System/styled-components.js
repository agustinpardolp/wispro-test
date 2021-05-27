import styled from "styled-components";

const StyledChartContainer = styled.section`
  border: solid 1px grey;
  border-radius: 8px;
  height: 280px;
  margin: 2% 15%;
  width: 550px;
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
  font-size: 8rem;
  justify-content: center;
  width: 100%;
`;


export { StyledMainContainer, StyledChartContainer, StyledValue };
