import styled from "styled-components";

const StyledTitle = styled.h2`
  border-bottom: 1px solid #4e4b4b4d;
  color: var(--primary-titles);
  font-size: 1.5rem;
  margin: 10px;
  padding: 10px;
`;

const StyledOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export { StyledTitle, StyledOptions };
