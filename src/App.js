import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import ResultsPast from "./components/ResultsPast"
import Footer from "./components/footer"
import Header from "./components/header"
import moment from 'moment';

export default function Livescore() 
{
  const [scores, setScores] = useState([]);  
  const [json, setjson] = useState([]);  

  useEffect(() => {
    async function fetchScores() {
    const response = await axios.get('https://www.hindustantimes.com/static-content/10s/hockey/hockey_liupre.json');
    console.log(response)
    setScores(response.data.live);
    }
    fetchScores();
    let data = require('./countries.json');
    const json = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [value, key])
);
    setjson(json) 
}, []);
  return (
    <div className='scoreslive'>
      <Header/>
      <h1 className='title'>Live Score Board</h1>
      {scores.length === 0 ?
        <Alert>
        <Alert.Heading>Sorry 😞! Live Score Not Available Now <br></br> Match Yet To Begin | Time : 5:00 PM IST</Alert.Heading>
        </Alert>:
        scores.map(live =>(
        <Alert>
        <Alert.Heading>{live.series_name}</Alert.Heading>
        <div className='d-flex justify-content-evenly'>
        <div className='flagpng'><img src={`./png100px/${json[live.teama]}.png`} alt={json[live.teama]}/></div>
        <div>
        <h2>{live.teama}</h2>
        <p>GOALS : {live.teama_score}</p>
        </div>
        <div className='flagpng'><img src={`./png100px/${json[live.teamb]}.png`} alt={json[live.teamb]}/></div>
        <div>
        <h2>{live.teamb}</h2>
        <p>GOALS : {live.teamb_score}</p>
        </div>
        </div>
        {/* <hr/> */}
        <p className="mb-0 ,border-text">
          <b>Date :</b> {moment(live.matchdate_local).format("DD/MM/YYYY")}  | <b>{live.match_result}</b> | {live.match_status}
        </p>
      </Alert>            
        ))
      }
      <div>
        <br></br>
      </div><br></br>
    <div>
      <ResultsPast/>
      <Footer/>
    </div>    
    </div>
  );  
  }

