import React from 'react';
import styled from 'styled-components';
import { addToFavorite } from 'app/actions/actions';
import { useDispatch } from 'react-redux';


export const Images = ({image}: any) => {
  const dispatch = useDispatch();


  const Image = styled.section`
    border-radius: 12px;
    position: relative;
    border: 1px solid #dddddd !important;
    background: url(${image.url}) no-repeat center center;
    cursor: pointer;
    height: 320px;
    width: 320px;
    max-width: 516px;
    max-height: 516px;
  `;
  
  const Like = styled.span`
    position: absolute;
    top: 20px;
    right: 20px;
    margin: auto;
    background-image: url(https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/bb8f5839.svg);
    padding: 16px;
    background-size: cover;
    width: 20px;
    height: 20px;
    z-index: 1;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
    `;

  return (
    <Image>
      <Like onClick={() => dispatch(addToFavorite(image))}/>
    </Image>
  );
};

