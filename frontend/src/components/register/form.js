import React, { useCallback } from "react";
import { css } from "@emotion/react";
import { REGIONS_LIST } from "../../misc/const";
import { Rating, TextArea } from 'semantic-ui-react'
import { useLocalState } from "../../hook/use-local-state";
import InputBox from "../common/input-box";
import RadioButton from "../common/radio-button";
import {useUpdate} from 'react-use';
import { gql } from "@apollo/client";
import { requestMutateGraphql } from "../../misc/utility";

const mutationAddOnsen = gql`
    mutation addOnsen ($params: String!) {
        addOnsen( params: $params ) {
            status
            {
                code
                message
                api
                error
            }
        }
    }
`

const Layout = ( { params } )=> 
{
    return (
        <div css={params.style}>
            <div className={`basic-info`}>
                <h3 className={`info-title`}>Basic Info</h3>
                <form className="ui form">
                    <div className="field">
                        <b>Name of Onsen</b>
                        <div className="default text">
                            <InputBox type="text" placeholder="Name of Onsen" onChange={ ( e, data ) => { params.onChangeOnsenName( e, data ) } } />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <b>Area</b>
                            <select onChange={ ( e, data ) => params.onChangeArea( e, data )} className="ui fluid dropdown">
                                <option value="">Area</option>
                                {REGIONS_LIST.map( ( item, index ) =>
                                    <option onChange={ ( e, data ) => params.onChangeArea( e, data )} key={index} value={item.name}>{item.name}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="six wide field">
                        <b>Post Number</b>
                        <InputBox type="text" placeholder="000-0000" onChange={ ( e, data ) => params.onChangePostNumber( e, data ) } />
                    </div>
                    <div className="field">
                        <b>Adress1</b>
                        <div className="default text">
                            <InputBox type="text" placeholder="City・Ward" onChange={ ( e, data ) => params.onChangeAddress1( e, data ) } />
                        </div>
                    </div>
                    <div className="field">
                        <b>Adress2</b>
                        <div className="default text">
                            <InputBox type="text" placeholder="street number" onChange={ ( e, data ) => params.onChangeAddress2( e, data )} />
                        </div>
                    </div>
                    <div className="field">
                        <b>Address3</b>
                        <div className="default text">
                            <InputBox type="text" placeholder="bulding name" onChange={ ( e, data ) => params.onChangeAddress3( e, data ) } />
                        </div>
                    </div>
                    <div className="three wide field">
                        <b>Minimum Fee</b>
                        <InputBox type="text" placeholder="1000" onChange={ ( e, data ) => params.onChangeMinimumFee( e, data ) } />
                    </div>
                    <div className="field">
                        <b>Web Site</b>
                        <div className="default text">
                            <InputBox type="text" placeholder="URL" onChange={ ( e, data ) => params.onChangeUrl( e, data ) } />
                        </div>
                    </div>
                </form>
            </div>
            <div className={`additional-info`}>
                <h3 className={`info-title`}>Additional Info</h3>
                <form className="ui form">
                    <div className="form">
                        <b>Sauna is available.</b>
                        <div className="inline fields" id="first-question-additional">
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <RadioButton
                                        checked={params.isSauna === 1}
                                        value={1}
                                        label='Yes'
                                        onChange={ ( e, data ) => params.onChangeSaunaStatus( e, data )}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox" >
                                    <RadioButton
                                        checked={params.isSauna === 0}
                                        value={0}
                                        label='No'
                                        onChange={ ( e, data ) => params.onChangeSaunaStatus( e, data )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <form className="ui form">
                    <div className="ui form">
                        <b>Tatoos are allowed.</b>
                        <div className="inline fields" id="second-question-additional">
                            <div className="field">
                            <div className="ui radio checkbox">
                                <RadioButton
                                    checked={params.tatooStatus === 1}
                                    value={1} label='Yes'
                                    onChange={ ( e, data ) => params.onChangeTatooStatus( e, data )}
                                />
                            </div>
                            </div>
                            <div className="field">
                            <div className="ui radio checkbox">
                                <RadioButton
                                    checked={params.tatooStatus === 0} 
                                    value={0}
                                    label='No'
                                    onChange={ ( e, data ) => params.onChangeTatooStatus( e, data )}
                                />
                            </div>
                            <div className="ui radio checkbox">
                                <RadioButton
                                    checked={params.tatooStatus === 2}
                                    value={2}
                                    label='Not sure'
                                    onChange={ ( e, data ) => params.onChangeTatooStatus( e, data )}
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                </form>
                <form className="ui form">
                    <div className="ui form">
                        <b>Available type</b>
                        <div className="inline fields" id="third-question-additional">
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <RadioButton
                                        checked={params.availableType === 0}
                                        value={0}
                                        label='Day trip bathing available'
                                        onChange={ ( e, data ) => params.onChangeAvailableType( e, data )}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <RadioButton
                                        checked={params.availableType === 1}
                                        value={1}
                                        label='Only hotel guest'
                                        onChange={ ( e, data ) => params.onChangeAvailableType( e, data )}
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui radio checkbox">
                                    <RadioButton
                                        checked={params.availableType === 2}
                                        value={2}
                                        label='Only member'
                                        onChange={ ( e, data ) => params.onChangeAvailableType( e, data )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <form className="ui form">
                    <div className={`raing-area`}>
                        <label htmlFor="rating-area">
                            <b>Choose Rating</b>
                            <div className={`rating`} id="rating-area">
                                <Rating icon='star' defaultRating={3} maxRating={5} onRate={ ( e, data ) => params.onChangeRating( e, data )} />
                            </div>
                        </label>
                    </div>
                    <div className={`rating-reason-area`}>
                        <label>
                            <b>Reason of rating</b>
                            <TextArea placeholder='Tell us the reason' style={{ minHeight: 100 }} onChange={ ( e, data ) => params.onChangeReasonOfRating( e, data ) } />
                        </label>
                    </div>
                </form>
            </div>
            <div className={`register-button`}>
                <button onClick={params.onSubmit} className="big ui primary button">Register</button>
            </div>
        </div>
    );
}

const Style = ( params ) => css`

    height:90%;
    margin-bottom:50px;

    .basic-info
    {
        width : 60%;
        margin: 0 auto;
        padding: 40px 80px 40px 80px;
        border-radius: 16px;
        background: #fff;
        margin-top:50px;
    }

    .info-title
    {
        margin-bottom:30px;
    }
    
    .additional-info
    {
        width : 60%;
        margin: 0 auto;
        padding: 40px 80px 40px 80px;
        border-radius: 16px;
        background: #fff;
        margin-top:100px;
    }

    #first-question-additional
    {
        margin-top:10px;
        margin-bottom:20px;
    }

    #second-question-additional
    {
        margin-top:10px;
        margin-bottom:20px;
    }

    #third-question-additional
    {
        margin-top:10px;
        margin-bottom:20px;
    }

    .rating
    {
        margin-top:5px;
    }

    .rating-reason-area
    {
        margin-top:10px;
    }

    .register-button
    {
        margin-top :50px;
        text-align:center;
    }
`;

const Form = ( props ) => 
{
    const state = useLocalState(
    {
        onsenName      : ``,
        area           : ``,
        postNumber     : 0,
        address1       : ``,
        address2       : ``,
        address3       : ``,
        minimumFee     : 0,
        url            : ``,
        isSauna        : 1,
        tatooStatus    : 1,
        availableType  : 0,
        rating         : 0,
        reasonOfRating : ``,
    });
    const update = useUpdate();
    const onChangeOnsenName = useCallback( ( e, data ) =>
    {
        state.onsenName = data.value;
    }, [ state ]);
    const onChangeArea = useCallback( ( e, data ) =>
    {
        state.area = e.target.value;
    }, [ state ]);
    const onChangePostNumber = useCallback( ( e, data ) =>
    {
        state.postNumber = data.value;
    }, [ state ]);
    const onChangeAddress1 = useCallback( ( e, data ) =>
    {
        state.address1 = data.value;
    }, [ state ]);
    const onChangeAddress2 = useCallback( ( e, data ) =>
    {
        state.address2 = data.value;
    }, [ state ]);
    const onChangeAddress3 = useCallback( ( e, data ) =>
    {
        state.address3 = data.value;
    }, [ state ]);
    const onChangeMinimumFee = useCallback( ( e, data ) =>
    {
        state.minimumFee = data.value;
    }, [ state ]);
    const onChangeUrl = useCallback( ( e, data ) =>
    {
        state.url = data.value;
    }, [ state ]);
    const onChangeSaunaStatus = useCallback( ( e, data ) =>
    {
        state.isSauna = data.value;
        update();
    }, [ state ]);
    const onChangeTatooStatus = useCallback( ( e, data ) =>
    {
        state.tatooStatus = data.value;
        update();
    }, [ state ]);
    const onChangeAvailableType = useCallback( ( e, data ) =>
    {
        state.availableType = data.value;
        update();
    }, [ state ]);
    const onChangeRating = useCallback( ( e, data ) =>
    {
        state.rating = data.rating;
    }, [ state ]);
    const onChangeReasonOfRating = useCallback( ( e, data ) =>
    {
        state.reasonOfRating = data.value;
    }, [ state ]);
    const onSubmit = useCallback( async () =>
    {
        // 書く値のバリデート処理
        const result = await requestMutateGraphql( mutationAddOnsen, state );
    }, [ state ])

    const styleParams=
    {
    }

    const params = 
    {
        style                  : Style( styleParams ),
        onChangeOnsenName      : onChangeOnsenName,
        onChangeArea           : onChangeArea,
        onChangePostNumber     : onChangePostNumber,
        onChangeAddress1       : onChangeAddress1,
        onChangeAddress2       : onChangeAddress2,
        onChangeAddress3       : onChangeAddress3,
        onChangeMinimumFee     : onChangeMinimumFee,
        onChangeUrl            : onChangeUrl,
        onChangeSaunaStatus    : onChangeSaunaStatus,
        onChangeTatooStatus    : onChangeTatooStatus,
        onChangeAvailableType  : onChangeAvailableType,
        onChangeRating         : onChangeRating,
        onChangeReasonOfRating : onChangeReasonOfRating,
        onSubmit               : onSubmit,
        isSauna                : state.isSauna,
        tatooStatus            : state.tatooStatus,
        availableType          : state.availableType,
    }
    return <Layout params={params} />
};

export default Form;