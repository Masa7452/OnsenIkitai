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
            <Modal.Header>Feature Modal</Modal.Header>
            <div css={params.style}>
                <div className={`prefecture-modal-body`}>
                    <div className={`prefecture-modal-item`} >
                        <h3 className={`prefecture-modal-item-head`}>Sex</h3>
                        <div className={`prefecture-modal-item-body`}>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_01' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_01'>Man</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_02' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_02'>Woman</label>
                            </div>
                        </div>
                    </div>
                    <div className={`prefecture-modal-item`} >
                        <h3 className={`prefecture-modal-item-head`}>Facility type</h3>
                        <div className={`prefecture-modal-item-body`}>
                        <div className={`prefecture-checkbox`}>
                                <input id='lb_area_06' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_06'>Onsen</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_07' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_07'>Sento</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_08' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_08'>Hotel・Ryokan</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_09' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_09'>Capusel Hotel</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_10' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_10'>Golf plae</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_11' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_11'>Sports gym</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_12' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_12'>Private sauna</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_13' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_13'>Campground</label>
                            </div>                           
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_15' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_15'>Others</label>
                            </div>

                        </div>
                    </div>
                    <div className={`prefecture-modal-item`} >
                        <h3 className={`prefecture-modal-item-head`}>Available type</h3>
                        <div className={`prefecture-modal-item-body`}>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_21' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_21'>Available day trip</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_22' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_22'>Only guest</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_23' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_23'>Only memeber</label>
                            </div>
                        </div>
                    </div>        
                    <div className={`prefecture-modal-item`} >
                        <h3 className={`prefecture-modal-item-head`}>Having sauna</h3>
                        <div className={`prefecture-modal-item-body`}>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_24' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_24'>Yes</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_25' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_25'>No</label>
                            </div>
                        </div>
                    </div>
                    <div className={`prefecture-modal-item`} >
                        <h3 className={`prefecture-modal-item-head`}>Tattoos allowed</h3>
                        <div className={`prefecture-modal-item-body`}>
                        <div className={`prefecture-checkbox`}>
                                <input id='lb_area_24' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_24'>Yes</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_25' name='prefecture' type='checkbox'></input>
                                <label htmlFor='lb_area_25'>No</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`prefecture-modal-button`} >
                    <a className={`prefecture-modal-button-sumbit`} >
                      <span>Search by feature</span>
                    </a>
                </div> 
            </div>
        </Modal>
    );
}

const Style = ( params ) => css`
font-family: Noto Sans Japanese,ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,メイリオ,Meiryo,ＭＳ Ｐゴシック,Osaka,sans-serif;
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

.prefecture-modal-body{
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    padding: 20px 40px 60px;

    .prefecture-modal-item{
        display: flex;
        padding: 15px 0 20px;
        border-bottom: 1px solid #eee;
        
        .prefecture-modal-item-head
        {
            flex-basis: 15%;
            margin-top:10px;
        }
    
        .prefecture-modal-item-body{
            display: flex;
            flex-wrap: wrap;
            padding: 0 0 0 20px;
            flex-basis: 85%;

            .prefecture-checkbox{
                display: flex;
                margin: 15px 0 0;
                min-height: 30px;
                flex-basis: 33.33333%;

                input[type='checkbox']{
                    display: none;

                    &:checked+label::after{
                        opacity: 1;
                        background: #0051e0;
                        color: #fff;
                    }
                }
                label{
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
        }
    }
}
`;

const FeatureModal = memo(( props ) => 
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

export default FeatureModal;