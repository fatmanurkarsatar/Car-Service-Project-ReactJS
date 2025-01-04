import React from 'react'
import CommonButtons from './CommonButtons';
import Title from './Title';
import { faBackward, faCar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function CarServiceList({ carServiceList, addDeliveredCarList, backwardCarList }) {
  return (
    <div>
      <Title text="Bakım Servisi"/>
      <hr />
      <div>
          <ul>
          {carServiceList.map((car) => (
            <li key={car.id} className="d-flex justify-content-between align-items-center">
              {car.name}
              <div className='d-flex justify-content-start gap-1 mb-1'>
                <CommonButtons
                  text={<FontAwesomeIcon icon={faBackward} />} variant="primary" 
                   onClick={()=> backwardCarList(car)}
                />
                <br />
                <CommonButtons text={<FontAwesomeIcon icon={faCar} />} variant="warning"
                  onClick={()=> addDeliveredCarList(car)}
                />
              </div>
            </li>
          ))}
        </ul>  
      </div>
    </div>
  )
}

export default CarServiceList;
