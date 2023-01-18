import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Resim1 from "./images/1.jpg";
import Resim2 from "./images/5.jpg";
import Resim3 from "./images/3.jpg";
import Resim4 from "./images/4.jpg";

function App() {
  const [secpic, setSecpic] = useState(Resim1);
  const Arr = [Resim1, Resim2, Resim3, Resim4];
  //Kullanmak istediğim resimleri importladıktan sonra hepsini bir dizi içerisine aldım.

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img src={secpic} alt="picturesMain" style={{ maxWidth: "300px", maxHeight: "300px" }} />
          </div>
        </div>
        <div className="container">
          <div className='row'>
            <div className="col">
              {Arr.map((pic, index) => (
                // map methodu ile Arr dizisinin her elemanını gezeceğimi belirttim.
                <img key={index} src={pic} alt="pictures" className='img-fluid' style={{ maxWidth: "250px", maxHeight: "250px" }} onClick={() => { setSecpic(pic) }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App; 
