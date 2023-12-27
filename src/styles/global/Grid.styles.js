import styled from '@emotion/styled'

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: ${({ col }) => col ?? '1fr 1fr'};
  gap: ${({ gap }) => gap ?? '0'};
  align-items: ${({ align }) => align};
  width: ${({ customWidth }) => customWidth ?? '100%'};
  @media (max-width: 768px) {
    grid-template-columns: ${({ mobileCol }) => mobileCol ?? '1fr'};
  }
`
