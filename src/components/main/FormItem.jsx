import React from 'react'
import { Col, Row } from 'reactstrap'
import style from './Main.module.css'

const FormItem = ({title,element}) => {
    return (
        <Row className={style.frmItem}>
            <Col xs={9}>{title}</Col>
            <Col  className={style.frmradio} xs={3}>{element}</Col>
        </Row>
    )
}

export default FormItem