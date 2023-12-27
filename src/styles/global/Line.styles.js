import styled from '@emotion/styled'
import { color } from '@/styles/values/color'

export const DividedLine = styled.div`
  border-bottom: 1px solid ${color.grayscale.gray[200]};
  width: 100%;
  margin: ${({ customMargin }) => customMargin ?? '24px 0'};
`
export const ThickLine = styled.div`
  height: 10px;
  width: 100%;
  background-color: ${color.grayscale.gray[100]};
`
