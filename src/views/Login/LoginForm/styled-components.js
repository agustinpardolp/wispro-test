import styled from "styled-components";

const StyledLogin = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;

  background: linear-gradient(
    to top left,
    var(--primaryConfirm),
    var(--primary)
  );
  h2 {
    color: var(--primary);
    font-size: 2rem;
    padding: 2%;
  }
  label {
    margin: 2%;
    padding: 2%;
  }
  form {
    background: var(--white);;
    border-radius: 5px;
    box-shadow: 0 0 25px 0 var(--primaryInputBorder);
    height: 34rem;
    margin: 0% 4% 7% 4%;
    width: 25rem;
  }
  .login-container {
    align-items: center;
    display: grid;
    height: 100%;
    justify-content: center;
    padding: 2%;
    text-align: center;
  }
`;

const StyledCheckContainer = styled.div`
  align-items: center;
  color: var(--primaryInputBorder);
  display: flex;
  justify-content: space-evenly;
  p {
    margin-bottom: 0px;
  }
`;
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5% 0;
  width: 100%;
`;
export { StyledLogin, StyledCheckContainer, StyledButtonContainer };
