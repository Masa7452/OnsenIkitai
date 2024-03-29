import { css } from "@emotion/react";
import { navigate } from "gatsby";
import React, { memo, useState } from "react";
import { Modal } from "semantic-ui-react";
import { REGIONS } from "../../misc/const";
import AreaModalItems from "./area-model-items";
import store from "../../redux/store";

const Layout = ( { params } )=> 
{
    return (
        <Modal
            className={`prefecture`}
            open={params.isOpen}
            onClose={() => params.onClose()}
            >
            <Modal.Header>Select Area</Modal.Header>
            <div css={params.style}>
                <div className={`prefecture-modal-body`}>
                {REGIONS.map( ( item, index ) =>
                    <div key={ index } className={`prefecture-modal-item`} >
                        <div className={`prefecture-modal-item-head`}>
                            <h3 className={`title-top`}>{item.areas[0]}</h3>
                            {
                                item.areas[1] !== undefined &&
                                <h3 className={`title-bottom`}>{item.areas[1]}</h3>
                            }
                        </div>
                        <AreaModalItems items={item.names} />
                    </div>
                )}
                </div>
                <div className={`prefecture-modal-button`} onClick={params.onClickSearch} >
                    <a className={`prefecture-modal-button-sumbit`} >
                      <span>Search by area</span>
                    </a>
                </div> 
            </div>
        </Modal>
    );
}

const Style = ( params ) => css`

height: 80vh;

.prefecture-modal-button{
    position: fixed;
    bottom: 0;
    left: 0;
    border-radius: 0 0 8px 8px;
    width: 100%;

    .prefecture-modal-button-sumbit{
        background: #0051e0;
        display: block;
        font-size: 16px;
        color: #FFF;
        text-align: center;
        outline: none;
        font-weight: 700;
        text-decoration: none;
        padding: 20px 54px;
        cursor: pointer;
    }
}

.prefecture-modal-body
{
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    padding: 20px 40px 60px;
}

.prefecture-modal-item
{
    display: flex;
    padding: 15px 0 20px;
    border-bottom: 1px solid #eee;
}
    
.prefecture-modal-item-head
{
    padding-top:10px;
    flex-basis: 15%;
}
.title-top
{
    margin-bottom:0px;
}
.title-bottom
{
    margin-top:0px;
}

`;

const AreaModal = memo(( props ) => 
{
    const [ isOpen, setIsOpen ] = useState( true );

    const onClose = () => 
    {
        setIsOpen( false );
        props.setSearchMode( `none` );
    }

    const onClickSearch = () =>
    {
        const data = store.getState();
        navigate(`/list`);
    }

    const styleParams=
    {
    }

    const params = 
    {
        style   : Style( styleParams ),
        isOpen  : isOpen,
        onClickSearch: onClickSearch,
        onClose : onClose,
    }
    return <Layout params={params} />
});

export default AreaModal;