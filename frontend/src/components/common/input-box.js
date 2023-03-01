import React, { useCallback } from "react"
import { css } from "@emotion/react";
import { Input } from "semantic-ui-react";

const Layout = ( { params } ) =>
{
  return (
    <div css={params.style}>
      <Input
        type={params.type}
        onChange={params.onChange}
        placeholder={params.placeholder}
      />
    </div>
  )
}

const Style = ( params ) => css`
`

const InputBox = ( props ) => 
{
    const onChange = useCallback( ( e, data ) => {
      props.onChange( e, data );     
    }, []);

    const styleParams=
    {
    }
    const params = 
    {
        style       : Style( styleParams ),
        onChange    : onChange,
        type        : props.type,
        placeholder : props.placeholder
    }
    return <Layout params={params}  />
};

export default InputBox;