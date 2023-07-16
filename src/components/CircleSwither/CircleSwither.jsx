import React from 'react'
import './circleSwither.scss'
import GetSvg from '../GetSvg/GetSvg'
const CircleSwither = ({ circlesStatus, setCircleStatus }) => {
  const circles = circlesStatus.map((active, index) =>
    active ? (
      <button>
        <GetSvg svg={'circle-active'} />
      </button>
    ) : (
      <button
        onClick={() => {
          const newStatus = circlesStatus.map((status) => (status = false))

          newStatus[index] = true
          console.log(circlesStatus)
          setCircleStatus(newStatus)
        }}
      >
        <GetSvg svg={'circle'} />
      </button>
    )
  )

  return <div className='circles-container'>{circles}</div>
}

export default CircleSwither
