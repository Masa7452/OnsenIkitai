import { css } from "@emotion/react";
import React, { memo, useState } from "react";
import { Modal } from "semantic-ui-react";

const Layout = ( { params } )=> 
{
    return (
        <Modal
            open={params.isOpen}
            onClose={() => params.onClose()}
            // onOpen={() => setOpen(true)}
            // trigger={<Button>Scrolling Content Modal</Button>}
            >
            <Modal.Header>Prefecture Modal</Modal.Header>
        </Modal>
    );
}

const Style = ( params ) => css`
`;

const PrefectureModal = memo(( props ) => 
{
    const [ isOpen, setIsOpen ] = useState( true );

    const onClose = () => 
    {
        setIsOpen( false );
        props.setSearchMode( `none` );
    }

    const styleParams=
    {
    }

    const params = 
    {
        style   : Style( styleParams ),
        isOpen  : isOpen,
        onClose : onClose,
    }
    return <Layout params={params} />
});

export default PrefectureModal;