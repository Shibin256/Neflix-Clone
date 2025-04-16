import './Player.css'
import React, { useEffect, useState } from 'react'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const {id}=useParams();
  const navigate=useNavigate()

  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTYxMDdkNTRmNzlhOTVhMjg1OGE5M2E2MTYxOWIxNyIsIm5iZiI6MTc0NDQ1MzAzNS42MDQsInN1YiI6IjY3ZmEzZGFiN2I0M2JkY2UyMGFlYzI4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZwgqqdluJIkKBJ_AcYzEBWaNkGp9xaCcEzhJT3CoEzY'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])


  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" onClick={()=> navigate(-1)} />
        {apiData.key &&         
        (<iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" width="90%" height="90%" title='trailer' allowFullScreen>
        </iframe>
        )}
        <div className='player-info'> 
          <p>{apiData.published_at}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player
