import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostHeaderContainer = styled.div`
  position: absolute;
  width: 864px;
  height: 168px;
  left: calc(50% - 864px/2);
  top: 208px;

  background: ${props => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  h1{
    position: absolute;
    height: 31px;
    left: 32px;
    right: 32px;
    top: 71px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;

    color: ${props => props.theme['base-title']};
  }
`

export const BackIcon = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;
  text-decoration: none;

  position: absolute;
  height: 19px;
  left: 32px;
  top: 32px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 160%;

  text-transform: uppercase;
  color: ${props => props.theme['blue']};
`

export const GithubAccess = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 8px;

  position: absolute;
  height: 19px;
  right: 32px;
  top: 32px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 160%;

  text-transform: uppercase;
  color: ${props => props.theme['blue']};
`

export const GithubPostIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 32px;

  position: absolute;
  height: 26px;
  left: 32px;
  top: 110px;

  a{
    height: 26px;
    
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
  
    color: #C4D4E3;

    flex: none;
    flex-grow: 0;
    text-decoration: none;
    margin-left: -1rem;

    opacity: 0.5;
  }
`