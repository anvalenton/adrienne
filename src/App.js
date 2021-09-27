import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Rumi from "./Rumi";
import Song from "./Song";
import Info from "./Info";
import photo from "./ady.jpg";


import './App.css';



function App() {
  return (
    <div className='outerdiv'>
    <div className="App"  style={{backgroundImage: `url(${photo})`}}>
      <div className="infotext-container">
        
        <h1>Adrienne</h1>
        <h1>Fidelin</h1>

        <p>The story begins in Paris around 1936, when a young dancer from Guadeloupe named Adrienne Fidelin met Man Ray. He was 46 and, judging from pictures of her at the time, she was in her mid-20s. An enchanting, high-spirited beauty, Fidelin — who was known as Ady — became Man Ray’s lover, model and muse. The exact circumstances of their meeting, as with many details of her life, remain elusive. What is known is that she was dancing with a French company with ties to Guadeloupe and that the two were inseparable. Fidelin met Man Ray at the height of the Surrealist movement and was quickly embraced by his close-knit circle of artist and writer  friends...-NY Times</p>
      </div>
      <BrowserRouter basename="/">
        <Link exact to="/Rumi">
          <svg id="mouth_x" data-name="mouth x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.28 145.43">
            
              <path className='mouthxpath markings' id='mouthxtorightid' d="M814.46,710.09c31.88-42.52,64.34-86.15,80.06-136.93" transform="translate(-803.44 -568.91)" fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="10"/>

              <path className='mouthxpath markings' id='mouthxtoleftid' d="M807.69,603.2c13.89,12.23,24.66,28,39.77,38.66,9.72,6.88,20.88,11.42,31.93,15.89,15.12,6.13,30.77,12.36,47.08,12" transform="translate(-803.44 -568.91)" fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="10"/>

          </svg> 
        </Link>
        
        <Link exact to="/Song">
          <svg id='playbuttonsvgid' mlns="http://www.w3.org/2000/svg" className='markings' viewBox="0 0 82.33 56.19">

            <path className='markings' id='playbuttonpathid' d="M4.25 4.25l4.56 47.68a724.13 724.13 0 0169.27-24.18c-5.06-6.1-13.67-7.5-21.48-8.84C35.79 15.36 15.38 9.45 4.25 4.25z" fill="none" stroke="#070606" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8.5"/>

          </svg>
        </Link>
        <Link exact to="/Info">

        <svg id='eyestrokesid' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 345.81 126.59">
      
          <path id='eyestrokepathid' className='markings' d="M193.82 86.32c17.54-17.36 22.89-47 45.34-57.22.37 7.67-4.69 14.36-8.73 20.89a92.88 92.88 0 00-13.69 43.7c-.12 2.41.54 5.65 3 5.79a4.46 4.46 0 003.11-1.55c13.27-12.48 11.82-33.75 19.15-50.42a50 50 0 0127.92-26.34 4.9 4.9 0 013.22-.39c2.73.9 2.09 4.94.79 7.51-9.43 18.79-24.58 36.05-25.29 57.06 3.65 2.75 8.38-1.83 10.24-6 5.78-12.92 7-27.42 11.63-40.77s14.7-26.57 28.77-28.07c-13.56 24.77-33.75 48.82-31.85 77 .19 2.74.87 5.87 3.31 7.11 3 1.56 6.59-.86 8.86-3.41 11.22-12.62 13.42-30.62 17.3-47.14s11.8-34.42 27.86-39.82c-1.21 22.27-23.83 41.26-18.83 63 .54 2.32 1.54 4.76 3.63 5.91 5 2.78 10-3.59 12.19-8.85l10.75-25.66a298.66 298.66 0 01-4.52 32.2 75.92 75.92 0 0013.58-23.9M4.26 77.72a45.21 45.21 0 015.34-11 141.18 141.18 0 00-3.63 42.77c.33 4.8 1.36 10.3 5.55 12.66 19.71-21.78 15.3-60.42 39.37-77.26l-19.53 42.7c-4.75 10.38-9.08 23.83-1.22 32.12 5.18-4.55 7.35-11.54 9.28-18.16 5.18-17.81 10.48-36.06 21.47-51l-11.72 61.51c-.51 2.68-.44 6.38 2.21 7.06 2.05.53 3.88-1.35 5.07-3.11 14.79-21.74 12.53-52.3 29.06-72.75 2.92 23.21-19.06 44.27-15.81 67.44.86 6.09 5.63 13 11.56 11.42 4.39-1.19 6.23-6.31 7.35-10.72q7.53-29.58 12.58-59.72c4.4 9 2.87 19.57 1.23 29.42l-6.33 38.34a370.52 370.52 0 0118.84-65.2 90.32 90.32 0 00-6.84 35.35c0 4.11.42 8.42 2.67 11.85s6.91 5.61 10.61 3.83" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>


        </svg>
        </Link>

        <Route exact path="/Rumi">
          <Rumi />
        </Route>

        <Route exact path="/Song">
          <Song />
        </Route>
        
        <Route exact path="/Info">
          <Info />
        </Route>
      </BrowserRouter>


    

  
    </div>
    </div>
  );
}

export default App;
