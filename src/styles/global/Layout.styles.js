import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { utils } from '@/styles/values/util'

export const commonFixedBottom = css`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0px -4px 15px 0px #d3d2d240;
  padding: 20px 24px 30px 24px;
`

export const LayoutContainer = styled.div`
  position: relative;
  top: ${({ top }) => `${top}px`};
`
export const LayoutWrapper = styled.div`
  position: relative;
  max-width: 992px;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 100px;
  font-size: 14px;
  /* border: 3px solid red; */
  h1,
  h2,
  h3 {
    font-family: 'SUIT';
  }
  a[href]:hover {
    text-decoration: underline;
  }

  &::before {
    content: '';
    background-color: '#fff';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    margin: 0;
    height: unset;
    width: 100vw;
  }
`
export const MobileTitle = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 50px;
    padding: 0px 16px;

    .backIcon {
      display: flex;
      align-items: center;
      width: 32px;
      padding: 0;
      margin: 0;
      > svg {
        width: 32px;
        height: 32px;
      }
    }
    h1 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
    }
    div {
      width: 100%;
      justify-content: center;
      align-items: center;
      height: 48px;
      padding-right: 32px;
    }
  }
`
export const FixedBottomWrapper = styled.div`
  @media (max-width: 768px) {
    ${commonFixedBottom}
    ${utils.floatZIndex}
  }
`

export const MobileContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`
export const DesktopContainer = styled.div`
  display: block;
  width: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`
