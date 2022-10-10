import React from "react";
import { css } from "@emotion/react";

const Layout = ( { params } )=> 
{
    return (
        <div>
            <h1>{params.text}</h1>
            <p>{params.onsenList.name}</p>
            <p>{params.onsenList.country}</p>
        </div>
    );
}

const Style = ( params ) => css`
`;

const Search = ( props ) => 
{
    const styleParams=
    {
    }

    const params = 
    {
        style   : Style( styleParams ),
        text : props.location.state.text,
        onsenList : props.location.state.onsenList[ 0 ],
    }
    return <Layout params={params} />
};

export default Search;