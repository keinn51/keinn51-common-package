import { keyframes } from '@emotion/react'

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const showBox = keyframes`
    0% {
    opacity: 0;
    padding: 20px;
  }

  100% {
    opacity: 1;
    padding: 40px 20px;
  }
`
export const showFixedOrder = keyframes`
  0% {
    bottom: -60px;
    opacity: 0;
  }
  20% {
    bottom: 0;
    opacity: 1;
  }
  100% {
    bottom: 0;
    opacity: 1;
  }
`

export const showDialog = keyframes`
  0% {
    bottom: -10vh;
    opacity: 0;
  }
  20% {
    bottom: 10vh;
    opacity: 1;
  }
  100% {
    bottom: 10vh;
    opacity: 1;
  }
  `
export const menuOpen = keyframes`
  from {
    opacity: 0;
    /* height: 0; */
  }

  to {
    opacity: 1;
    /* height: 20px; */
  }
`
export const pulse = keyframes`
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`

export const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`
export const blur = keyframes`
  0% {
    filter: blur(2px);
  }
  100% {
    filter: blur(0px);
  }
`
