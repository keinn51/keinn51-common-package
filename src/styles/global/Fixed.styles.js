import styled from '@emotion/styled'
import { utils } from '@/styles/values/util'

export const BackgroundLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  ${utils.modalZIndex};
`
export const ThumbnailViewer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  user-select: none;
  ${utils.thumbnailZIndex}

  .viewer {
    width: 100%;
    height: 100%;
    padding: 20px;
  }
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 1;

    svg {
      color: #fff;
      width: 50px;
      height: 50px;
      path {
        fill: #fff;
      }
    }
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    color: #fff;
    text-shadow: 0 0 8px #00000040;
  }
  .swiper-pagination-bullet {
    background-color: #fff;
    width: 12px;
    height: 12px;
  }

  @media (max-width: 767px) {
  }
`
export const ThumbnailViewerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  div {
    width: 100%;
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
  }
`
