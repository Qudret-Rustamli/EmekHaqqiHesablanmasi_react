import { IconButton } from '@mui/material'
import React from 'react'
import { Col, Row } from 'reactstrap'
import style from './Discount.module.css'

const DiscountsItem = ({header,title,element}) => {
  return (
    <Row className={style.disCItem}>
        <Col xs={2}>{header}</Col>
        <Col xs={9}>{title}</Col>
        <Col xs={1}>{<IconButton>{element}</IconButton>}</Col>
    </Row>
  )
}

export default DiscountsItem