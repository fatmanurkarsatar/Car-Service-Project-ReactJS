import React from 'react'
import Title from './Title'


function DeliveredCarList({ deliveredCarList }) {
  return (
    <>
      <div>
        <Title text="Teslim Edilen Araçlar" />
      </div>
      <div className='d-flex justify-content-center'>
        <ul>
          {deliveredCarList.map((car) => (
            <li key={car.id}>{car.name}</li>
          ))}
        </ul>  
      </div>
    </>
  )
}

export default DeliveredCarList
