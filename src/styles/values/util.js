import { css } from '@emotion/react'
import { color, palette } from '@/styles/values/color'

export const utils = {
  ellipsis: css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  cancelLine: css`
    margin-right: 4px;
    text-decoration: line-through;
    color: ${color.text.sub};
  `,
  lineLimit: css`
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
  customScroll: css`
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      height: 30%;
      background: #c8cbd4;
      border-radius: 20px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(244, 245, 247, 0.9);
    }
  `,
  borderLines: css`
    border-top: 1px solid black;
    border-bottom: 1px solid #0000001a;
    margin-top: 15px;
  `,
  thumbnailZIndex: css`
    z-index: 15;
  `,
  cardModalZIndex: css`
    z-index: 14;
  `,
  contentZIndex: css`
    z-index: 13;
  `,
  modalZIndex: css`
    z-index: 12;
  `,
  bottomModalZIndex: css`
    z-index: 11;
  `,
  floatZIndex: css`
    z-index: 10;
  `,
}
