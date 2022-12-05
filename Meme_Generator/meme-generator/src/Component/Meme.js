import React, { useState } from "react";
import "./styles.css";
import memesData from "../memesData";
export default function Meme(){
    const [meme,setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeData,setAllMemeData]=useState(memesData);
    function getMemeImage(){
        const memesArray=allMemeData.data.memes;
        const randomNumber=Math.floor((Math.random()*memesArray.length));
        const url=(memesArray[randomNumber].url);
        setMeme({
            ...meme,
            randomImage:url
        })
    }
    return (
        <>
            <main>
                <div className="form">
                    <input type="text" className="form-input"/>
                    <input type="text" className="form-input"/>
                    <button className="form-button" onClick={getMemeImage}>Generate a new meme
                    <img src="https://i.pinimg.com/474x/b7/d3/ea/b7d3ea6c8b1a2bb6e673ec6575394ea4.jpg" width="10px" style={{marginLeft:"10px"}} className="imgIcon"/>
                    </button>
                </div>
                <img src={meme.randomImage} className="imgRes"/>
            </main>
        </>
    )
}