import styled from 'styled-components'

export const DivSearch = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

export const HederText = styled.p `
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:16px;
    font-weight:500;
    padding-top:12px;
`

export const DivSearchInput = styled.div`
  display: flex; 
  align-items: center;
  justify-content:center;
  width: 90%;
  height: 56px;
  padding: 16px 8px 16px 17px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;

  input {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`  
export const ButtonSearch = styled.button`
    position:absolute;
    top:0; right:0;
    z-index:10;
    border:none;
    background:transparent;
    outline:none;

    /* img {
    width: 24px;
    height: 24px;
    margin: 0 15.3px 0 0;
    object-fit: contain;
    } */
`