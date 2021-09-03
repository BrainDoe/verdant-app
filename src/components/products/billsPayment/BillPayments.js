import React, { useState } from 'react'
import CardPayment from './CardPayment';
import CryptoPayment from './CryptoPayment';



const BillPayments = () => {
  const [show, setShow] = useState([false])
  return (
    <>
      <CardPayment />
      <CryptoPayment />
    </>
  )
}

export default BillPayments
