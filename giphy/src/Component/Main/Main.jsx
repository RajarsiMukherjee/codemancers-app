import React from 'react';
import "./Main.css";

import IconButton from '@mui/material/IconButton';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollIcon from '@mui/icons-material/Poll';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import { useState } from 'react';
import Giphy from '../Giphy/Giphy';
export default function Main() {

    const [state, setState] = useState(0);
    const [Url, setUrl] = useState("");

    const [textx, setText] = useState("")


    const [data, setData] = useState([]);

    const handleAdd = (e) => {
        e.preventDefault()
        const some = {
            Url, textx
        }
        console.log("data", some)
        setData(some)
    }

    return (
        <div className='main'>
            <div className='feedcontainer'>

                <div className='fixedBar'>
                    <h3>Home</h3>
                </div>
                <div className='tweetDiv'>

                    <div><Avatar alt="User Profile" style={{ height: "30%", width: "50%", margin: "auto", marginTop: "30%" }} /></div>
                    <div className='tweetDiv2'>
                        <form >
                            <div style={{ display: "flex", paddingRight: "5px" }}>
                                <input className='tweetInput' type="text" placeholder="What's happening? " onChange={(e) => setText(e.target.value)} />
                                <div>
                                    {Url ? <img src={Url} style={{ width: "100px", height: "100px" }} /> : ""}
                                </div>

                            </div>

                            <div>

                                <label htmlFor="raised-button-file">
                                    <IconButton size="large" aria-label="Location" color="inherit" variant="raised" component="span">
                                        <InsertPhotoOutlinedIcon style={{ color: "#1d9bf0" }} />
                                    </IconButton>
                                </label>

                                <label htmlFor="raised-button-file">
                                    <IconButton onClick={() => { setState(1) }} size="large" aria-label="GIF Selector" color="inherit" variant="raised" component="span">
                                        <GifBoxOutlinedIcon style={{ color: "#1d9bf0" }} />
                                    </IconButton>
                                </label>
                                <IconButton size="large" aria-label="Create Poll" color="inherit">
                                    <PollIcon style={{ color: "#1d9bf0" }} />
                                </IconButton>
                                <IconButton size="large" aria-label="emoji" color="inherit">
                                    <SentimentSatisfiedAltIcon style={{ color: "#1d9bf0" }} />
                                </IconButton>
                                <IconButton size="large" aria-label="Location" color="inherit">
                                    <FmdGoodOutlinedIcon style={{ color: "#1d9bf0" }} />
                                </IconButton>

                                <Button variant="contained" className='tweetBtn' type="submit" onClick={(e) => handleAdd(e)}>Tweet</Button>


                            </div>
                        </ form>


                    </div>
                </div>

                {
                    state ? <Giphy Url={setUrl} /> : ""
                }

            </div>

            <div>

                <div>{data.textx}</div>

                <img src={data.Url} alt="" />

            </div>
        </div>
    )
}
