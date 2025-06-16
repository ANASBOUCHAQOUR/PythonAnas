import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './App.css';

function App() {
    let imageC = [
        {name : "HongKong",src :'/image/Hong-Kong.jpg'},
        {name : "Japan",src :'/image/Japan.jpg'},
        {name : "Las-Vegas",src :'/image/Las-Vegas.jpg'},
        {name : "Macao",src :'/image/Macao.jpg'},
    ]
  return (
    <div className="App">
      <Carousel autoPlay infiniteLoop showThumbs={false} >
        {imageC.map((image,index)=>{
            return(
            <div key={index}>
            <img src={image.src} alt={image.name} />
            <p className="legend">{image.name}</p>
          </div>)
    })}
        
      </Carousel>
    </div>
  );
}

export default App;



