import styled from "styled-components";

import { calculateResponsiveSize } from "./../helpers";

const StyledStart = styled.div`
  min-height: 100vh;
  max-width: 700px;

  margin: 0 auto;
  padding: 0 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    padding: 5%;
    max-width: 900px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 15px;

    * {
      margin: 15px 0;
    }
  }

  img {
    width: ${calculateResponsiveSize(150, 300)};
  }

  button {
    width: 250px;
    min-height: 50px;
    font-size: 1rem;
  }
`;

export default StyledStart;
