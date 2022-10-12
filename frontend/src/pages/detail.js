import React from "react";
import { css } from "@emotion/react";

const Layout = ( { params } ) =>
{
    return (
        <div css={params.style}>
            <div>詳細画面です</div>
        </div>
    );
}

const Style = ( params ) => css`
`;

const Detail = ( { props } ) => 
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

export default Detail;