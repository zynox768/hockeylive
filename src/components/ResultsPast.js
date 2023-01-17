import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import moment from 'moment';
export default function Liveres() 
{
  const [scores, setScores] = useState([]);  
  const [json, setjson] = useState([]);  

  useEffect(() => {
    async function fetchScores() {
    const response = await axios.get('https://www.hindustantimes.com/static-content/10s/hockey/hockey_liupre.json');
    setScores(response.data.results);
    }
    fetchScores();
    let data = require('../countries.json');
    const json = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [value, key])
);
    setjson(json) 
}, []);
  return (
    <div className='scoresresults'>    
    <h1 className='title'>Past Match Scores</h1>
      {scores.map(results =>(
      <Alert>
      <Alert.Heading>{results.series_name}</Alert.Heading>
      <div className='d-flex justify-content-evenly'>
      <div className='flagpng'><img src={`./png100px/${json[results.teama]}.png`} alt={json[results.teama]}/></div>
      <div>
      <h2>{results.teama}</h2>
      <p>GOALS : {results.teama_score}</p>
      </div>
      <div className='flagpng'><img src={`./png100px/${json[results.teamb]}.png`} alt={json[results.teamb]}/></div>
      <div>
      <h2>{results.teamb}</h2>
      <p>GOALS : {results.teamb_score}</p>
      </div>
      </div>
      {/* <hr/> */}
      <p className="mb-0 ,border-text">
        <b>Date :</b> {moment(results.matchdate_local).format("DD/MM/YYYY")} | <b>{results.match_result}</b> | {results.match_status}
      </p>
    </Alert>            
      ))}    
    </div>
  );  
  }
