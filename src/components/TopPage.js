import React from "react";
import TopHeader from "./TopHeader";
import Main from "./Main";
import { css } from "@emotion/react";

const Layout = ( { params } ) =>
{
    return (
        <div css={params.style}>
            <TopHeader />
            <Main pageTitle={`Gatsby Site`} />
        </div>
    );
}

const Style = ( params ) => css`
`;

const TopPage = ( { props } ) => 
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

export default TopPage;