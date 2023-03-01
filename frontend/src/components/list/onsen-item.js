import React from "react";
import { css } from "@emotion/react";
import OnsenImage from "/src/images/onsenImage.png";
import { navigate } from "gatsby";
import { Rating } from "semantic-ui-react";

const Layout = ( { params } ) => 
{
    return (
        <div css={params.style} onClick={() => { navigate( `/detail` ); }}>
            <div>
                <img className={`item-image`} src={OnsenImage} />
            </div>
            <div className={`item-detail`}>
                <h3 className={`item-detail-name`}>{params.onsenName}</h3>
                <div>{params.address1} {params.address2} {params.address3} {params.postNumber}</div>
                <div className={`item-detail-fee`}>Fee：{params.fee}〜</div>
            </div>
            <div className={`item-detail-rating`}>
                <p className={`rating`}>Rating</p>
                <Rating icon='star' defaultRating={params.rating} maxRating={5}  disabled />
            </div>
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
    cursor:pointer;

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
        padding-top: 20px;
    }
    .rating
    {
        margin-bottom:4px;
    }
`;

const OnsenItem = ( props ) => 
{
    const styleParams =
    {
    }
    const params = 
    {
        style: Style( styleParams ),
        onsenName: props.item.onsenName,
        fee      : props.item.minimumFee,
        address1 : props.item.address1,
        address2 : props.item.address2,
        address3 : props.item.address3,
        rating   : props.item.rating,
    }
    return <Layout params={params}  />
};

export default OnsenItem;