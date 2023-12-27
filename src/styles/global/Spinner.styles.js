import { keyframes } from "@emotion/react";
import { css } from "@emotion/react";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spinner = css`
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50%;
  > circle {
    opacity: 0.25;
  }
  > path {
    opacity: 0.75;
  }
`;
