
import './App.css';
import CarList from './components/carList.jsx';
import BrandInput from './components/BrandInput.jsx';
import CarServiceList from './components/CarServiceList.jsx';
import DeliveredCarList from './components/DeliveredCarList.jsx';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function App() {
  const [carList, setCarList] = useState([]);
  const [carServiceList, setCarServiceList] = useState([]);
  const [deliveredCarList, setDeliveredCarList] = useState([]);


  const addCarToList = (car) => {
    const newCar = {
      id: uuidv4(),
      name: car.trim(),
    };
    setCarList((carList) => [...carList, newCar]);  // Araba nesnesini listeye ekliyoruz
  };

  //deletebutton işlevi
  const deleteCar = (id) => {
    setCarList((carList) => carList.filter((car) => car.id !== id));
  }

  //settingsbutton işlevi
  const addCarServiceList = (car) => {
    setCarServiceList((carServiceList) => [...carServiceList, car]); // Arabayı carServiceList'e ekle
    setCarList((carList) => carList.filter((c) => c.id !== car.id)); // Arabayı carList'ten çıkar
  };

  //geri butonu işlevi
  const backwardCarList = (car) => {
    setCarList((carList) => [...carList, car]);
    setCarServiceList((carServiceList) => carServiceList.filter((c) => c.id !== car.id));
  }

  //car Button işlevi
  const addDeliveredCarList = (car) => {
    setDeliveredCarList((deliveredCarList) => [...deliveredCarList, car]);
    setCarServiceList((carServiceList) => carServiceList.filter((c) => c.id !== car.id));
  };

  return (
    <>
      <div className="container">

        <div className="input-brands">
          <BrandInput addCarToList={addCarToList} />
        </div>

        <hr />

        <div className="d-flex justify-content-between">
          <div className="car-list">
            <CarList carList={carList} deleteCar={deleteCar} addCarServiceList={addCarServiceList} />
          </div>
          <div className="car-service">
            <CarServiceList carServiceList={carServiceList} backwardCarList={backwardCarList} addDeliveredCarList={addDeliveredCarList} />
          </div>
        </div>

        <hr />

        <div className="delivered-car-list">
          <DeliveredCarList deliveredCarList={deliveredCarList} />
        </div>

      </div>
    </>
  );
}


export default App;
