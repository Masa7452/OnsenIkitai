import React from "react";
import { css } from "@emotion/react";
import OnsenImage from "/src/images/onsenImage.png";

const Layout = ( { params } ) => 
{
    return (
        <div css={params.style}>
            <div>
                <img className={`item-image`} src={OnsenImage} />
            </div>
            <div className={`item-detail`}>
                <h3 className={`item-detail-name`}>桃山の湯（Momoyama no yu）</h3>
                <div>Aichi Nagoya Tempaku Ueda 5-9-5</div>
                <div className={`item-detail-fee`}>Fee：500yen〜</div>
            </div>
            <div className={`item-detail-rating`}>Rating</div>
        </div>
    )
}

const Style = ( params ) => css`

    position: relative;
    border-bottom: 1px solid #eee;
    background: #fff;
    z-index: 1;
    padding: 20px 0;
    justify-content: start;
    display:flex;

    .item-detail-image
    {

    }
    .item-detail
    {
        width:60%;
        padding-top:10px;
        padding-left:20px;
    }
    .item-detail-fee
    {
        margin-top:10px;
    }
    .item-detail-rating
    {
        width:25%;
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