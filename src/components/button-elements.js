  
import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#f5f543" : "#20d18b")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
  color: #000;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;
  &:hover {
    background: ${({ primary }) => (primary ? "#20d18b" : "#f5f543")};
    color: #fff;
    transition: all .3s;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`