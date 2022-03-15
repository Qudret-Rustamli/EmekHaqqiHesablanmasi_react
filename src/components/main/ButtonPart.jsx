import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';
import style from './FooterPart.module.css'


const ButtonPart = ({hesabla}) => {
    return (
        <Container >
            <Row className={style.btnHesabla}>
                <Col className={style.cardColLeft} xs={8}></Col>
                <Col xs={4}><Button onClick={hesabla} variant="outlined" startIcon={<CheckIcon />}> Hesabla</Button></Col>
            </Row>
        </Container>
    )
}

export default ButtonPart