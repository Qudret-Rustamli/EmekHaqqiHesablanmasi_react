import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import style from './Result.module.css'
import Resultİtem from './Resultİtem'

const Result = ({grossSalary,sektor,vergiyeCelbOlunanMebleg,vergi,dsmf,issizlikdensigorta,hemkarlarr,icbariSigorta,odenilecek}) => {
    return (
        <div className={style.cardContainer}>
            <Container>
                <Resultİtem title='Gross Əmək haqqı' result={grossSalary}/>
                <Resultİtem title='Sektor' result={sektor}/>
                <Resultİtem title='Vergiyə cəlb olunan məbləğ' result={vergiyeCelbOlunanMebleg}/>
                <Resultİtem title='Gəlir vergisi' result={vergi}/>
                <Resultİtem title='DSMF ayırmaları' result={dsmf}/>
                <Resultİtem title='İşsizlikdən sığorta haqqı' result={issizlikdensigorta}/>
                <Resultİtem title='Həmkarlar təşkilatına üzvlük haqqı' result={hemkarlarr}/>
                <Resultİtem title='İcbari tibbi sığorta haqqı' result={icbariSigorta}/>
                <Resultİtem title='Yekun ödəniləcək məbləğ' result={odenilecek}/>
            </Container>
        </div>

    )
}

export default Result

/* console.log('salary',salary)
console.log('sektorr',sektorr)
console.log('dsmf',dsmf)
console.log('həmkarlar',həmkarlar)
console.log('issizlikdenSigortaHaqqi',issizlikdenSigortaHaqqi)
console.log('icbariTibbiSigorta',icbariTibbiSigorta)
console.log('gelirVergisi',gelirVergisi)
console.log('grossSalary',grossSalary) */