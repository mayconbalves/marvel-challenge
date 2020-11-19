import styled from 'styled-components'
import SearchIcon from 'assets/search-icon.png'

export const InputStyled = styled.input`
  background-color: #fdecec;
  background-position: 10px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-size: 30px;
  width: ${props => props.width ? props.width : '50%'};
  margin: 30px 10px;
  padding: 10px 45px;
  font-size: 18px;
  outline: none;
  border: 1px solid #fdecec;
  border-radius: 25px;

  &::placeholder {
    color: #ff1510;
  }
`
