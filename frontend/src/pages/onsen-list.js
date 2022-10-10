import React from "react";
import { css } from "@emotion/react";
import OnsenItem from "../components/modals/onsen-item";

const Layout = ( { params } ) => 
{
    return (
        <div css={params.style}>
            <div className={`onsen-list`}>
                <OnsenItem />
                <OnsenItem />
            </div>
        </div>
    )
}

const Style = ( params ) => css`
    // border-bottom: 1px solid #eee;
    margin-top :100px;

    .onsen-list
    {
        border-radius: 16px;
        background: #fff;
        box-sizing: border-box;
        padding: 80px;
    }
`;

const OnsenList = ( { props } ) => 
{
    const styleParams =
    {
    }
    const params = 
    {
        style         : Style( styleParams ),
    }
    return <Layout params={params}  />
};

export default OnsenList;