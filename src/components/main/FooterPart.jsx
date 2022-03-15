import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import style from './FooterPart.module.css'

const FooterPart = ({hemkarlar, sethemkarlar}) => {
  return (
    <Container>
        <Row className={style.footerpart}>
            <Col xs={6}>Həmkarlar təşkilatına üzvlük haqqı	</Col>
            <Col xs={4}>Hesablanan əmək haqqının:	</Col>
            <Col xs={2}>`<input onChange={e=>sethemkarlar(parseFloat(e.target.value))} type='number' max='100' min='0'/> %`</Col>
        </Row>
    </Container>
  )
} 

export default FooterPart