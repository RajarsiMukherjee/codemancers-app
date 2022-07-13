import React from 'react';
import axios from 'axios';
import "./Giphy.css"
import { useState } from 'react';

export default function Giphy({ Url }) {

    const [text, setText] = useState([])

    const handleInput = (e) => {
        if (text.length = 0) {
            return
        }
        console.log(e.target.value)
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=q47I0WKEkFxqV5MNC8G4ZjHFNrN3X7Tv&q=${e.target.value}&limit=20&offset=5&rating=g&lang=en`).then(({ data }) => {
            console.log(data.data)
            setText(data.data)
        }, [])
    }

    return (
        <div>
            <input type="text" onChange={(e) => { handleInput(e) }} />
            <div style={{ display: 'grid', gridTemplateColumns: "repeat(3, 100px)", height: "300px", overflow: "scroll" }}>
                {text.map((e) => {

                    return (
                        <img src={e.images.original.url} key={e.id} style={{ width: "100px" }} onClick={() => { Url(e.images.original.url) }} />
                    )
                })}

            </div>
        </div>
    )
}
