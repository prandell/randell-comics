import styled from 'styled-components'

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 40px;
  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`

export const TitleContainer = styled.h2`
  margin-bottom: 0px;
  margin-top: 0px;
`

export const Title = styled.span`
  margin-bottom: 0px;
  cursor: pointer;
  font-family: 'Jhiaxus-Oblique', sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 170%;
  color: var(--primary-colour);
`
export const LineBreak = styled.hr`
  width: 100%;
  height: 2px;
  background-color: var(--accent-colour);
  color: var(--accent-colour);
  border: 0 none;
  margin-bottom: 25px;
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1f 1fr 1fr;
    grid-gap: 15px;
  }
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`
