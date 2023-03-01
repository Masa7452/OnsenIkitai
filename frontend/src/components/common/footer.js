import React from "react"
import { Link } from "gatsby";
import { css } from "@emotion/react";

const Layout = ( { params } ) =>
{
  return (
    <div css={params.style}>
    </div>
  )
}

const Style = ( params ) => css`
    height     : 60px;
    font-size  : 16px;
    width      :100%;

    a 
    {
      color:black;
    }

    ul {
      list-style:none;
    }

    .left-menu
    {
      float:left;
    }

    .right-menu
    {
      float  :right;
      margin-right: 20px;
    }

    .left-menu ul
    {
      display:flex;
    }

    .left-menu li
    {
      margin-right:20px;
    }

    .right-menu ul
    {
      display:flex;
    }

    .right-menu li
    {
      margin-right:20px;
    }

    .right-menu a
    {
      color:black;
    }
`

const Footer = ( { props } ) => 
{  
    const styleParams=
    {
    }
    const params = 
    {
        style : Style( styleParams ),
    }
    return <Layout params={params}  />
};

export default Footer;