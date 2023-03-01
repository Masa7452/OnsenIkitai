import React from "react";
import { css } from "@emotion/react";
import OnsenItem from "./onsen-item";
import { useMount } from "react-use";
import { useLocalState } from "../../hook/use-local-state";

const Layout = ( { params } ) => 
{
    return (
        <div css={params.style}>
            <div className={`onsen-list`}>
                {
                    params.items.map( ( item, index ) =>
                    {
                        return <OnsenItem key={index} item={item} />;
                    })
                }
            </div>
        </div>
    )
}

const Style = ( params ) => css`
    // border-bottom: 1px solid #eee;
    margin-top:5px;

    .onsen-list
    {
        border-radius: 16px;
        background: #fff;
        box-sizing: border-box;
        padding: 80px;
    }
`;

const OnsenList = ( props ) => 
{
    const state = useLocalState(
    {
        items: props.items,
    });
    const styleParams =
    {
    }
    const params = 
    {
        style : Style( styleParams ),
        items : props.items,
    }
    useMount( () =>
    {
    })
    return <Layout params={params}  />
};

export default OnsenList;