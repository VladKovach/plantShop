import React from 'react'

const GetCustomersFotos = ({ customersFotos, fotosStatus }) => {
  const curentFotosIndex = fotosStatus.indexOf(true)
  const customersImages = customersFotos[curentFotosIndex].map((imageSrc, index) => (
    <img className={`image-${index + 1}`} src={imageSrc} />
  ))
  return (
    <div className='customers-fotos__container image'>
      <img
        src='images/plant-background3.png'
        className='customers-fotos__container-backGround__image'
      />

      {customersImages}
    </div>
  )
}

export default GetCustomersFotos
