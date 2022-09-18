import React from "react";
import OnsenIcon from "/src/images/OnsenIcon.svg"
import { css } from "@emotion/react";
import Feature from "/src/images/Feature.svg";
import Map from "/src/images/Map.svg";
import Prefecture from "/src/images/Prefecture.svg";
import { Search } from "semantic-ui-react";


const Layout = ( { params } ) => 
{
    return (
        <div css={params.style}>
            <div className={`top-container`}>
                <div className={`top-icon`}>
                    <img src={ OnsenIcon } alt="OnsenIcon"></img>
                </div>
                <div className={`search-area`}>
                    <ul>
                        <li>
                            <img src={ Prefecture } alt="Prefecture" />
                            <p>Prefecture</p>
                        </li>
                        <li>
                            <img src={ Feature } alt="Feature"/>
                            <p>Feature</p>
                        </li>
                        <li>
                            <img src={ Map } alt="Map"/>
                            <p>Map</p>
                        </li>
                    </ul>
                    <Search
                        className={`input-field`}
                        placeholder='Keyword...'
                    />
                </div>
            </div>
        </div>
    )
}

const Style = ( params ) => css`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    .top-container
    {
        width:500px;
    }

    .top-icon
    {
        text-align:center;
    }

    .top-icon img
    {
        height:300px;
    }

    .search-area
    {
        // padding-right:40px;
    }

    .search-area ul
    {
        width:100%;
        justify-content: space-between;
        display:flex;
        list-style:none;
        margin-top:0px;
        margin-bottom:0px;
        padding-left:70px;
        padding-right:70px;
    }

    .search-area li
    {
        cursor:pointer;
    }

    .search-area li:hover
    {
        cursor:pointer;
        transform: translateY(-6px);
    }

    .search-area img
    {
        height:50px;
    }

    .search-area p
    {
        margin-top:10px;
        text-align:center;
        font-size:13px;
    }

    .input-field
    {
        margin-top:30px;
        text-align:center;
    }

    .input-field div
    {
        width:100%;
    }
`;

const Main = ( { props } ) => 
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

export default Main;