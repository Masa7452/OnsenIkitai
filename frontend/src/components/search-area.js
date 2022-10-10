import React, { useState } from "react";
import { css } from "@emotion/react";
import Feature from "/src/images/Feature.svg";
import Prefecture from "/src/images/Prefecture.svg";
import { Icon } from "semantic-ui-react";
import SearchBar from "./search-bar";
import SearchModal from "./modals/search-modal";

const Layout = ( { params } ) => 
{
    return (
        <div css={params.style}>
            <div className={`l-content-search`}>
                <div className={`prefecture`} onClick={ () => { params.setSearchMode( `prefecture` ) }}>
                    <img className={`prefecture-img`} src={ Prefecture } alt="Prefecture" />
                    <p>Prefecture</p>
                    <Icon name="plus circle" />
                </div>
                <div className={`feature`} onClick={ () => { params.setSearchMode( `feature` ) }}>
                    <img className={`feature-img`} src={ Feature } alt="Feature" />
                    <p>Feature</p>
                    <Icon name="plus circle" /></div>
                <div className={`keyword`}>
                    <SearchBar />
                </div>
            </div>
            <SearchModal mode={params.searchMode} setSearchMode={params.setSearchMode} />
        </div>
    )
}

const Style = ( params ) => css`
    padding: 40px;
    border-radius: 16px;
    background: #fff;
    box-sizing: border-box;
    text-align:center;

    .l-content-search
    {
        justify-content: space-between;
        display:flex;
    }
    .prefecture
    {
        display: flex;
        width :80%;
        border: 3px solid #eee;
        cursor:pointer;
    }
    .prefecture *
    {
        margin-top:14px;
        width : calc(100% / 3) ;
    }
    .prefecture-img
    {
        margin-top:10px;
        height:25px;
    }
    .feature
    {
        display: flex;
        width :80%;
        margin-right:10px;
        margin-left:10px;
        border: 3px solid #eee;
        cursor:pointer;
    }
    .feature *
    {
        margin-top:14px;
        width : calc(100% / 3) ;
    }
    .feature-img
    {
        margin-top:10px;
        height:25px;
    }
    .keyword
    {
        width :100%;
        margin-top:8px;
    }
`;

const SearchArea = ( { props } ) => 
{
    const [ searchMode, setSearchMode ] = useState( `none` );
    const styleParams =
    {
    }
    const params = 
    {
        style         : Style( styleParams ),
        searchMode    : searchMode,
        setSearchMode : setSearchMode,
    }
    return <Layout params={params}  />
};

export default SearchArea;