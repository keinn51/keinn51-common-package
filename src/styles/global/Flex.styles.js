import styled from '@emotion/styled'

export const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  align-items: ${({ align }) => (align ? align : 'center')};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : 'nowrap')};
  gap: ${({ gap }) => gap && gap};
  flex-grow: ${({ grow }) => grow && grow};
  width: ${({ customWidth }) => customWidth ?? '100%'};
`

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`
