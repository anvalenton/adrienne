import React from "react";
import Carousel, {consts} from 'react-elastic-carousel'
import car_photo1 from "./group.jpg";
import car_photo2 from "./manray_ady.jpg";
import car_photo3 from "./harpers.jpg";






const Info = () => {

   
    return (
        <div className='info-outerdiv'>
        
            <div id='info-innerdiv'>

         
            <div id="carousel-container">
                <Carousel itemsToShow={1} pagination={false} enableAutoPlay={false} >
                    <img className='carouselphoto' src={car_photo1} alt="group photo including Adrienne, Man Ray and Pablo Picasso"/>
                    <img className='carouselphoto' src={car_photo2} alt="photo of Adrienne and Man Ray"/>
                    <img className='carouselphoto' src={car_photo3} alt='photo of Adrienne in Harpers Bazaar' />
                
                </Carousel>

            </div>
          
            </div>
           


        </div>

    )
}

export default Info