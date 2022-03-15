import React from 'react'
import { Col, Row } from 'reactstrap'
import style from './Result.module.css'

const Resultİtem = ({title,result}) => {
    return (
        <Row className={style.cardItem}>
            <Col xs={8}>{title}</Col>
            <Col xs={4}>{result}</Col>
        </Row>
    )
}

export default Resultİtem