import React from 'react'

import deletImge from "../../images/delete.svg"
import iditeImge from "../../images/edit.svg"

const Trnasection = () => {
  return (
    <li className="transaction income">
      <p>Earned this month</p>
      <div className="right">
        <p>৳ 100</p>
        <button className="link">
          <img className="icon" src={iditeImge} alt='edit' />
        </button>
        <button className="link">
          <img className="icon" src={deletImge} alt='delet' />
        </button>
      </div>
    </li>
  )
}

export default Trnasection