import React from "react";




const Rumi = () => {


  return (
    <div>
      <div className="svgouterdiv">

        <svg id='svgidtop' xmlns="http://www.w3.org/2000/svg" viewBox="0 -18 763.03 100" >
          
            <path id="topcurve" d="M.49 44.55S9.49.08 71.64.5c78.22.53 181.57 82.07 276.14 44.05 212.8-85.56 415.06-5.09 415.06-5.09"  fill="none"  strokeMiterlimit="10"/>

            
            
            <text className='svgtext' fillOpacity='1' fill='#b33434'>
              <textPath id='toptextpath' href="#topcurve" startOffset="80">
                  Love isn't the work of the tender and the gentle;

                  <animate attributeName="startOffset" dur="3s" repeatCount="1" values="80; 70; 50; 40; 30" keyTimes="0; .50; .70; .80; 1" fill='freeze' />
                  
              </textPath>
              
              <animate attributeName="fill-opacity" dur="3s" repeatCount="1" values="0; .2; .5; .7; 1" keyTimes="0; .50; .70; .80; 1" fill='freeze'/>

              <animate attributeName="fill" dur="3s" repeatCount="1" from="rgb(213, 180, 208)" to="rgb(177, 2, 87)"fill='freeze'/>

            </text>
          
        </svg>   


        <svg id="svgidbottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 -3 946 90"><path id='bottomcurve' d="M.47 2.41s20.43 55.91 143 52.52 234-66.07 328.72-52.52 341.73 88 473.59 25.38" fill="none" strokeMiterlimit="10"/>
        
            <text className='svgtext' fillOpacity='0' fill='#b33434'>
                <textPath id='bottomtextpath' href="#bottomcurve" startOffset="80">
                Love is the work of wrestlers. - Rumi

                    <animate attributeName="fill-opacity" dur="3s" repeatCount="1" from="0" to="1" fill='freeze'/>

                    <animate attributeName="startOffset" dur="3s" repeatCount="1" values="80; 70; 50; 40; 30" keyTimes="0; .50; .70; .80; 1" fill='freeze' />

                   
                    
                </textPath>

               

                <animate dur="3s" repeatCount="1" from="rgb(213, 180, 208)" to="rgb(255, 0, 0) "fill='freeze'/>
            </text>
        
        
        
        </svg>
    
      </div>

    </div>
  )
};


     
export default Rumi; 





