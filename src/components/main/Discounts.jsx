import React, { useState } from 'react'
import { Container } from 'reactstrap'
import DiscountsItem from './DiscountsItem'
import style from './Discount.module.css'

const show={
  display:'block',
}
const none={
  display:'none',
}

const Discounts = ({select,guzest,setGuzest}) => {
  return (
    <div>
      <Container onChange={e=>setGuzest(parseFloat(e.target.value))}  className={style.disContainer} style={select ? show :none}>
        <DiscountsItem header='' title='V.M. 102-2 Vergi tutulan gəlir 400 AZN azaldılır' element={<input value='400' name='discount' type='radio' />}/>
        <DiscountsItem header='' title='V.M. 102-3 Vergi tutulan gəlir 200 AZN azaldılır' element={<input value='200' name='discount' type='radio' />}/>
        <DiscountsItem header='' title='V.M. 102-4 Vergi tutulan gəlir 100 AZN azaldılır' element={<input value='100' name='discount' type='radio' />}/>
        <DiscountsItem header='' title='V.M. 102-5 Vergi tutulan gəlir 50 AZN azaldılır' element={<input value='50' name='discount' type='radio' />}/>
    </Container>
    </div>
  )
}

export default Discounts