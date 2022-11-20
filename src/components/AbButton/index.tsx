import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
background: #EB9B00; 
padding: 16px 32px;
broder: 2px solid #EB9B00;
color: #fff;
font-size: 20px; 
coursor: pointer;

&:hover{
    background: #B89700;
    border: 2px solid #B89700;

}

`

export const AbButton =()=>{
    return <ButtonStyled>
        Clique aqui
    </ButtonStyled>
}
