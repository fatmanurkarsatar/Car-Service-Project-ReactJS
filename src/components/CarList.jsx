import React from 'react';
import CommonButtons from './CommonButtons';
import { faTrash, faGears } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Title from './Title';

function CarList({ carList, deleteCar, addCarServiceList }) {

  return (
    <div>
      <Title text="Araba Listesi" />
      <hr />
      <div>
        <ul>
          {carList.map((car) => (
            <li key={car.id} className="d-flex justify-content-between align-items-center">
              {car.name}
              <div className='d-flex justify-content-start gap-1 mb-1'>
                <CommonButtons
                  text={<FontAwesomeIcon icon={faTrash} />}
                  variant="danger"
                  onClick={() => deleteCar(car.id)} 
                />
                <br />
                <CommonButtons
                  text={<FontAwesomeIcon icon={faGears} />}
                  variant="success"
                  onClick={()=> addCarServiceList(car)} 
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CarList;
