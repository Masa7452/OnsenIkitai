import React from "react"
import { Link } from "gatsby";
import { css } from "@emotion/react";

const Layout = ( { params } ) =>
{
  return (
    <div css={params.style}>
      <div className={`left-menu`}>
        <nav>
            <ul>
              <li>
                <Link to="/" activeStyle={{color:`black`}}>What is OnsenIkitai</Link>
              </li>
            </ul>
        </nav> 
      </div>
      <div className={`right-menu`}>
        <nav>
          <ul>
            <li>
              <Link to="/about" activeStyle={{color:`black`}}>Login</Link>
            </li>
            <li>
              <Link to="/about" activeStyle={{color:`black`}}>SignUp</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

const Style = ( params ) => css`
    height     : 60px;
    font-size  : 20px;
    width      :100%;

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

const TopHeader = ( { props } ) => 
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

export default TopHeader;