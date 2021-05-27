import styled from "styled-components";

const StyledUserContainer = styled.section`
  margin: 10px;
`;

const StyledDataWrapper = styled.div`
  align-items: flex-start;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5rem;
  justify-content: center;
  padding: 1%;
  
  .text-light {
    font-weight: normal;
  }
`;

export { StyledUserContainer, StyledDataWrapper };
