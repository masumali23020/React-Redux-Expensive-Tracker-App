import React from 'react'
import Trnasection from './Trnasection'

const Trnsections = () => {
  return (
    <>
    <p className="second_heading">Your Transactions:</p>

<div className="conatiner_of_list_of_transactions">
  
  <ul>
    <Trnasection />
   
  </ul>
</div>
    </>
  )
}

export default Trnsections