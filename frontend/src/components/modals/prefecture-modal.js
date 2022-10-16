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
            <div css={params.style}>
                <div className={`prefecture-modal-body`}>
                    <div className={`prefecture-modal-item`} >
                        <h3 className={`prefecture-modal-item-head`}>北海道・東北</h3>
                        <div className={`prefecture-modal-item-body`}>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_01' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_01'>北海道</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_02' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_02'>青森県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_03' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_03'>岩手県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_04' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_04'>宮城県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_05' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_05'>秋田県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_06' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_06'>山形県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_07' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_07'>福島県</label>
                            </div>
                        </div>
                    </div>
                    <div className={`prefecture-modal-item`} >
                        <h3 className={`prefecture-modal-item-head`}>関東</h3>
                        <div className={`prefecture-modal-item-body`}>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_08' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_08'>茨城県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_09' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_09'>栃木県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_10' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_10'>群馬県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_11' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_11'>埼玉県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_12' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_12'>千葉県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_13' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_13'>東京都</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_14' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_14'>神奈川県</label>
                            </div>
                        </div>
                    </div>
                    <div className={`prefecture-modal-item`} >
                        <h3 className={`prefecture-modal-item-head`}>北陸・甲信越</h3>
                        <div className={`prefecture-modal-item-body`}>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_15' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_15'>新潟県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_16' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_16'>富山県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_17' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_17'>石川県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_18' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_18'>福井県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_19' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_19'>山梨県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_20' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_20'>長野県</label>
                            </div>
                        </div>
                    </div>
                    <div className={`prefecture-modal-item`} >
                        <h3 className={`prefecture-modal-item-head`}>東海</h3>
                        <div className={`prefecture-modal-item-body`}>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_21' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_21'>岐阜県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_22' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_22'>静岡県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_23' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_23'>愛知県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_24' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_24'>三重県</label>
                            </div>
                        </div>
                    </div>        
                    <div className={`prefecture-modal-item`} >
                        <h3 className={`prefecture-modal-item-head`}>近畿</h3>
                        <div className={`prefecture-modal-item-body`}>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_25' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_25'>滋賀県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_26' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_26'>京都府</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_27' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_27'>大阪府</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_28' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_28'>兵庫県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_29' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_29'>奈良県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_30' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_30'>和歌山県</label>
                            </div>
                        </div>
                    </div>
                    <div className={`prefecture-modal-item`} >
                        <h3 className={`prefecture-modal-item-head`}>中国・四国</h3>
                        <div className={`prefecture-modal-item-body`}>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_31' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_31'>鳥取県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_32' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_32'>島根県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_33' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_33'>岡山県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_34' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_34'>広島県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_35' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_35'>山口県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_36' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_36'>徳島県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_37' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_37'>香川県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_38' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_38'>愛媛県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_39' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_39'>高知県</label>
                            </div>
                        </div>                        
                    </div>
                    <div className={`prefecture-modal-item`} >
                        <h3 className={`prefecture-modal-item-head`}>九州・沖縄</h3>
                        <div className={`prefecture-modal-item-body`}>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_40' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_40'>福岡県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_41' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_41'>佐賀県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_42' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_42'>長崎県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_43' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_43'>熊本県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_44' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_44'>大分県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_45' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_45'>宮崎県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_46' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_46'>鹿児島県</label>
                            </div>
                            <div className={`prefecture-checkbox`}>
                                <input id='lb_area_47' name='prefecture' type='checkbox'></input>
                                <label for='lb_area_47'>沖縄県</label>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className={`prefecture-modal-button`} >
                    <a className={`prefecture-modal-button-sumbit`} >
                      <span>このエリアで絞り込む</span>
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
        
        .prefecture-modal-item-head{
            flex-basis: 15%;
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
                flex-basis: 20%;

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