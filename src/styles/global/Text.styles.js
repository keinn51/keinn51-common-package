import { color, palette } from '@/styles/values/color'
import { utils } from '@/styles/values/util'
import styled from '@emotion/styled'

const getColor = ({ type }) => {
  switch (type) {
    case 'error':
      return color.system.error.red[300]
    case 'primary':
      return palette('text') || color.grayscale.gray.black
    case 'point':
      return palette('point') || color.system.success.blue[300]
    case 'link':
      return color.system.success.blue[300]
    case 'sub':
      return color.text.sub
    case 'desc':
      return color.grayscale.gray[500]
    case 'light':
      return color.grayscale.gray[700]
    case 'dark':
      return color.grayscale.gray[800]
    case 'main':
      return palette('textMain')
    default:
      return color.primary.black
  }
}

export const Title = styled.h1`
  width: 100%;
  margin-top: ${({ isFirst }) => (isFirst ? '0px' : '80px')};
  margin-bottom: ${({ isFirst }) => (isFirst ? '70px' : '50px')};
  font-size: ${({ size }) => (size === 'lg' ? '24px' : size || '22px')};
  font-weight: ${({ weight }) => weight || 'bold'};
  text-align: ${({ align }) => align ?? 'center'};
  color: ${type => (type ? getColor(type) : palette('textMain'))};

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 18px;
    margin: 30px 0;
  }
`

export const SubTitle = styled.h3`
  color: ${type => getColor(type)};
  font-size: ${({ size }) => (size === 'lg' ? '22px' : size || '16px')};
  font-weight: ${({ weight }) => weight || 'bold'} !important;
  text-align: ${({ align }) => align ?? 'left'};
  ${({ ellipsis }) =>
    ellipsis === 'true' &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`

export const Text = styled.p`
  color: ${type => getColor(type)};

  font-size: ${({ size }) => (size === 'lg' ? '16px' : size || '14px')};
  font-weight: ${({ weight }) => weight || 400};
  text-align: ${({ align }) => align ?? 'left'};
  line-height: ${({ line }) => line ?? '14px'};

  white-space: pre-line;
  word-break: ${({ word }) => word ?? 'break-all'};
  ${({ ellipsis }) =>
    ellipsis === 'true' &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
  @media (max-width: 768px) {
    font-size: ${({ size }) => (size === 'sm' ? '12px' : size === 'lg' ? '15px' : '14px')};
  }
`

export const Description = styled.p`
  color: ${({ sub, dark }) =>
    sub ? color.grayscale.gray[700] : dark ? color.grayscale.gray[800] : color.primary.black};
  margin-top: 4px;
  font-size: ${({ size }) => (size === 'sm' ? '11px' : '12px')};
  font-weight: ${({ weight }) => weight || 400};
  text-align: ${({ align }) => align ?? 'left'};
  line-height: 18px;
  word-break: ${({ word }) => word ?? 'break-all'};
  white-space: break-spaces;
  ${({ ellipsis }) =>
    ellipsis === 'true' &&
    `
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `}
`

export const ErrorText = styled.p`
  color: ${color.system.error.red[300]};
  margin-top: 4px;
  font-size: 11px;
  font-weight: ${({ weight }) => weight || 400};
  line-height: 11px;
  word-break: keep-all;
  text-align: ${({ align }) => align ?? 'left'};
`

export const EllipsisText = styled.span`
  ${utils.ellipsis}
  width: ${({ width }) => width || '100%'};
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  min-width: ${({ minWidth }) => minWidth || 'auto'};

  ${({ line }) =>
    line &&
    `
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    white-space: normal;
    -webkit-box-orient: vertical;

  `}
`
