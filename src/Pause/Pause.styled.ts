import styled from "styled-components";

export const StyledPause = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

export const StyledAlternatives = styled.div`
  padding: 5px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.3);
  position: fixed;
  bottom: 0;
  border-radius: 0;

  button {
    margin: 10px;
    font-size: 0.7rem;
  }
`;
