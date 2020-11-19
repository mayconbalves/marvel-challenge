import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  margin: 40px 20px
`

export const Grid = styled.div`
  display: grid;
  width: 90%;
  margin: 0 auto;
`

export const Description = styled.div`
  width: 20%;
`

export const DescriptionName = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  h1 {
    font-size: 18px;
  }
  p {
    text-align: justify;
  }
  img {
    height: 30px
  }
`

export const DescriptionText = styled.p`
  color: #b9b9b9;
  text-align: justify
`

export const CharacterImg = styled.div`
  display: flex;
  width: 80%;

  img {
    height: 450px;
    margin: 0 20%;
    width: 450px;
  }
`

export const AllComics = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 25px 0;
`

export const ComicsContainer = styled.div`
  img {
    max-height: 200px;
  }
`
