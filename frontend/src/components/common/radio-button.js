import React, { useCallback } from "react"
import { css } from "@emotion/react";
import { Radio } from "semantic-ui-react";

const Layout = ( { params } ) =>
{
  return (
    <div css={params.style}>
        <Radio
            label={params.label}
            name='radioGroup'
            onChange={params.onChange}
            value={params.value}
            defaultChecked={params.defaultChecked}
            checked={params.checked}
            // checked={params.selectedValue === params.label}
        />
    </div>
  )
}

const Style = ( params ) => css
`
`

const RadioButton = ( props ) => 
{
    // const { selectedValue, setSelectedValue } = useState('');
    const onChange = useCallback( ( e, data ) =>
    {
        props.onChange( e, data );
    }, [ props ] )
    const styleParams=
    {
    }
    const params = 
    {
        style         : Style( styleParams ),
        onChange      : onChange,
        label         : props.label,
        value         : props.value,
        defaultChecked : props.defaultChecked,
        checked       : props.checked,
        // selectedValue : selectedValue,
    }
    return <Layout params={params}  />
};

export default RadioButton;