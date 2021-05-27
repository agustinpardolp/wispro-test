import styled from "styled-components";

const StyledContainer = styled.section`
  width: 700px;
  height: 500px;
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
  .leaflet-div-icon {
    width: 20px;
    height: 30px;
    z-index: 250;
    background: transparent;
    border: none;
    filter: invert(48%) sepia(13%);
  }
`;

export { StyledContainer };
