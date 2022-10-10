import React from "react";
import { css } from "@emotion/react";
import Header from "../components/header";
import SearchArea from "../components/search-area";
import OnsenList from "./onsen-list";

const Layout = ( { params } )=> 
{
    return (
        <div css={params.style}>
            <Header />
            <div className={`l-containers`}>
                <SearchArea />
                <OnsenList />
            </div>
        </div>
    );
}

const Style = ( params ) => css`
    background-color :#f0f0eb;
    min-height: 100vh;

    .l-containers
    {
        min-height: 80vh;
        // margin-bottom: 80px;
        width: 850px;
        margin-right: auto;
        margin-left: auto;
    }
`;

const OnsenDetail = ( props ) => 
{
    const styleParams=
    {
        
    }

    const params = 
    {
        style   : Style( styleParams ),
    }
    return (
        <Layout params={params}  />
    )
};

export default OnsenDetail;