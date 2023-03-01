import React from "react";
import { css } from "@emotion/react";
import { useLocalState } from "../../hook/use-local-state";
import store from "../../redux/store";
import { addArea, removeArea } from "../../redux/reducer/search-criteria";

const Layout = ( { params } ) => 
{
    return (
        <div css={params.style}>
            {params.items.map( ( name, index ) =>
                <div key={index} className={`prefecture-checkbox`}>
                    <input id={`lb_area_${index}`} name='prefecture' type='checkbox' value={name} onChange={params.onChange}></input>
                    <label htmlFor={`lb_area_${index}`}>{name}</label>
                </div>
            )}
        </div>
    )
}

const Style = ( params ) => css`

display: flex;
flex-wrap: wrap;
padding: 0 0 0 20px;
flex-basis: 85%;

.prefecture-checkbox
{
    display: flex;
    margin: 15px 0 0;
    min-height: 30px;
    flex-basis: 33.33333%;

    input[type='checkbox']
    {
        display: none;

        &:checked+label::after{
            opacity: 1;
            background: #0051e0;
            color: #fff;
        }
    }
    label
    {
        width: 100%;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        padding-left: 40px;
        cursor: pointer;
        font-size: 16px;

        &::before{
            position: absolute;
            content: '';
            width: 30px;
            height: 30px;
            top: -6px;
            left: 0px;
            box-sizing: border-box;
            background: #f7f7f7;
            border: 3px solid #eee;
            border-radius: 5px;                        
        }
        &::after{
            position: absolute;
            content: "✓";
            top: -6px;
            left: 0;
            border: none;
            background: none;
            font-weight: 700;
            line-height: 30px;
            color: hsla(0,0%,100%,0);
            text-align: center;
            width: 30px;
            transition: color .2s ease-out;
            border-radius: 5px;
        }
    }             
}
`;

const AreaModalItems = ( props ) => 
{
    const state = useLocalState
    ({
        items: [],
    });

    const onChange = ( e ) =>
    {
        const data = store.getState();
        const index = data.searchCriteria.areas.indexOf( e.target.value );
        if( index === -1 )
        {
            store.dispatch( addArea( e.target.value ) );
        }
        else
        {
            store.dispatch(removeArea( e.target.value ));
        }
    }
    const styleParams =
    {
    }
    const params = 
    {
        style    : Style( styleParams ),
        onChange : onChange,
        items    : props.items
    }
    return <Layout params={params}  />
};

export default AreaModalItems;