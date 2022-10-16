import React from "react";
import { css } from "@emotion/react";
import OnsenImage from "../images/onsenImage.png";

const Layout = ( { params } ) =>
{
    return (
        <div css={params.style}>
            <div className={`container`}>
                <h1>Momoyama no yu（桃山の湯）</h1>
                <p>Aichi Nagoya Tempaku </p>
                <div className={`detail-image`}>
                    <image src={OnsenImage} alt="OnsenImage" />
                </div>
                <div className={`detail-container`} >
                    <div className={`detail-container-menu`} >
                        <div className={`menu01`} >
                            <span>Info</span>
                        </div>
                        <div className={`menu02`} >
                            <span>Review</span>
                        </div>
                    </div>
                    <div className={`detail-container-body`} >
                        <div className={`basic-info`} >
                            <h3>■Basic Info</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>MoMoyama no yu(桃山の湯)</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Address</td>
                                        <td>Aichi Tempaku Nagoya 5 - 9 - 5</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Fee</td>
                                        <td>500yen 〜</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Web site</td>
                                        <td>http://momoyamanoyu.nagoya/</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Opening Hour</td>
                                        <td>10AM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={`Additional-info`} >
                            <h3>■Additional Info</h3>
                            <p>The sign reads, "Drunken people, yakuza-style people, people with irezumi (a Japanese word meaning a person with a disability), and people using diapers are strictly forbidden to bathe." The wi-fi environment has been updated and is comfortable to use. The restaurant is open on weekdays from 10:00 to 14:00 (LO at the same time) and from 17:00 to 22:00 (LO at the same time) (Set menus are closed when the rice runs out.) Weekends and holidays 9:00-22:00 (LO same time) (Meals start as soon as the kitchen is ready, which is not likely to be earlier than 9:00. Translated with www.DeepL.com/Translator (free version)</p>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    );
}

const Style = ( params ) => css`
background: #EFEFEF;
height: 100vh;
.container{
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    background: #FFF;
    padding: 25px;
    height: 100%;

    .detail-container{
        width: 550px;
        max-width: 100%;
        margin: 0 auto;

        .detail-container-body{
            display: flex;
            flex-direction: column;
            gap: 100px;
            margin-top: 60px;
        }
        
        table {
            border-collapse: collapse;
            width: 100%;
            font-size: 12px;
            margin: 0 auto;
            text-align: left;
          }
          table td {
            padding: 10px;
            color: gray;
            border-bottom: 1px solid gray;
          }

        .detail-container-menu{
            display: flex;
            text-align: center;
            .menu01{
                flex-basis: 50%;
                background: #484848;
                color: #FFF;
                padding: 10px;
            }
            .menu02{
                flex-basis: 50%;
                background: #EFEFEF;
                padding: 10px;
            }
        }
    }
}

`;

const Detail = ( { props } ) => 
{  
    const styleParams=
    {
    }
    const params = 
    {
        style : Style( styleParams ),
    }
    return <Layout params={params}  />
};

export default Detail;