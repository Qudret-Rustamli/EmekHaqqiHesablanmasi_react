import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Container } from 'reactstrap'
import style from './Main.module.css'
import IconButton from '@mui/material/IconButton';
import FormItem from './FormItem';
import Discounts from './Discounts';
import FooterPart from './FooterPart';
import ButtonPart from './ButtonPart';
import Result from './Result';

const Main = () => {
    const [select, setSelect] = useState(false)

    const [grossSalary, setGross] = useState(null)
    const [vergiyeCelbOlunanMebleg,setVergiyeCelbOlunanMebleg]=useState()
    const [vergi,setVergi]=useState()
    const [dsmf,setDsmf]=useState()
    const [issizlikdensigorta,setIssizlikdensigorta]=useState()
    const [hemkarlarr,setHemkarlarr]=useState()
    const [icbariSigorta,setIcbariSigorta]=useState()
    const [odenilecek,setOdenilecek]=useState()


    const [netSalary, setNet] = useState(null)
    const [sektor, setSektor] = useState()
    const [hemkarlar, sethemkarlar] = useState(0)
    const [guzest, setGuzest] = useState(null)

    const Hesabla = (gross) => {
        let guzestt = guzest
        let salary = gross -guzestt
        setVergiyeCelbOlunanMebleg(salary)
        let sektorr =sektor
        let dsmf = 0
        let hemkarlarFaiz=hemkarlar
        let həmkarlar = 0
        let issizlikdenSigortaHaqqi = 0
        let icbariTibbiSigorta = 0
        let gelirVergisi = 0
        let grossSalary = 0

        //qeyri neft sektoru uzre hesablama
        if (sektorr === 'QNQS') {
            if (salary <= 200) {
                gelirVergisi = 0;
                dsmf = (salary * 0.03).toFixed(2)
                həmkarlar = (salary * hemkarlarFaiz).toFixed(2)
                issizlikdenSigortaHaqqi = (salary * (0.005)).toFixed(2)
                icbariTibbiSigorta = ((salary * 0.02) / 2).toFixed(2)
                grossSalary = (salary - gelirVergisi - dsmf - həmkarlar - issizlikdenSigortaHaqqi - icbariTibbiSigorta).toFixed(2)
            }
            if (salary > 200 && salary < 8000) {
                gelirVergisi = 0;
                dsmf = (6 + ((salary - 200) * 0.1)).toFixed(2)
                həmkarlar = (salary * hemkarlarFaiz).toFixed(2)
                issizlikdenSigortaHaqqi = (salary * (0.005)).toFixed(2)
                icbariTibbiSigorta = ((salary * 0.02) / 2).toFixed(2)
                grossSalary = (salary - gelirVergisi - dsmf - həmkarlar - issizlikdenSigortaHaqqi - icbariTibbiSigorta).toFixed(2)
            }
            if (salary > 8000) {
                gelirVergisi = ((salary - 8000) * 0.14).toFixed(2);
                dsmf = (6 + ((salary - 200) * 0.1)).toFixed(2)
                həmkarlar = (salary *hemkarlarFaiz).toFixed(2)
                issizlikdenSigortaHaqqi = (salary * (0.005)).toFixed(2)
                icbariTibbiSigorta= ((salary * 0.02) / 2).toFixed(2)
                grossSalary = (salary - gelirVergisi - dsmf - həmkarlar - issizlikdenSigortaHaqqi - icbariTibbiSigorta).toFixed(2)
            }
        }

        //Neft sektoru
        if (sektorr === 'NQS') {
            if (salary < 2500) {
                gelirVergisi = ((salary - 200) * 0.14).toFixed(2);
                dsmf = (salary * 0.03).toFixed(2)
                həmkarlar = (salary * hemkarlarFaiz).toFixed(2)
                issizlikdenSigortaHaqqi = (salary * (0.005)).toFixed(2)
                icbariTibbiSigorta = (salary * 0.02).toFixed(2)
                grossSalary = (salary - gelirVergisi - dsmf - həmkarlar - issizlikdenSigortaHaqqi - icbariTibbiSigorta).toFixed(2)
            }

            if (salary > 2500 && salary < 8000) {
                gelirVergisi = (350 + (salary - 2500) * 0.25).toFixed(2);
                dsmf = (salary * 0.03).toFixed(2)
                həmkarlar = (salary * hemkarlarFaiz).toFixed(2)
                issizlikdenSigortaHaqqi = (salary * (0.005)).toFixed(2)
                icbariTibbiSigorta = ((salary * 0.02) / 2).toFixed(2)
                grossSalary = (salary - gelirVergisi - dsmf - həmkarlar - issizlikdenSigortaHaqqi - icbariTibbiSigorta).toFixed(2)
            }
            if (salary > 8000) {
                gelirVergisi = (350 + (salary - 2500) * 0.25).toFixed(2);
                dsmf = (salary * 0.03).toFixed(2)
                həmkarlar = (salary * hemkarlarFaiz).toFixed(2)
                issizlikdenSigortaHaqqi = (salary * (0.005)).toFixed(2)
                icbariTibbiSigorta = (160 + (salary - 8000) * 0.05).toFixed(2)
                grossSalary =( salary - gelirVergisi - dsmf - həmkarlar - issizlikdenSigortaHaqqi - icbariTibbiSigorta).toFixed(2)
            }
        }
        setNet(grossSalary)
        setDsmf(dsmf)
        setHemkarlarr(hemkarlar) 
        setIssizlikdensigorta(issizlikdenSigortaHaqqi)
        setIcbariSigorta(icbariTibbiSigorta)
        setVergi(gelirVergisi)
        setOdenilecek(grossSalary)
        
    }

    return (
        <div className={style.main}>
            <form>
                <Container>
                    <FormItem title='Hesablanan aylıq əmək haqqı' element={<TextField onChange={(e) => setGross(parseFloat(e.target.value))} style={{ backgroundColor: 'white' }} type='number' label="Salary" variant="outlined" />} />

                    <div onChange={e=>setSektor(e.target.value)}>
                        <FormItem sektor={sektor} setSektor={setSektor} title='Qeyri neft-qaz və özəl sektor' element={<IconButton><input value='QNQS' name='sektor' type='radio' /></IconButton>} />
                        <FormItem  title='Dövlət və Neft-qaz sektoru' element={<IconButton><input value='NQS' name='sektor' type='radio' /></IconButton>} />
                    </div>



                    <FormItem title='' element={<IconButton><input value='NQS' onChange={() => setSelect(!select)} name='sektor' checked={select} type='checkbox' /></IconButton>} />
                    <Discounts guzest={guzest} setGuzest={setGuzest} select={select} />
                    <FooterPart hemkarlar={hemkarlar} sethemkarlar={sethemkarlar} />
                    <ButtonPart hesabla={() => Hesabla(grossSalary)} />

                    <Result grossSalary={grossSalary} sektor={sektor} vergiyeCelbOlunanMebleg={vergiyeCelbOlunanMebleg} vergi={vergi} dsmf={dsmf} issizlikdensigorta={issizlikdensigorta} hemkarlarr={hemkarlarr} icbariSigorta={icbariSigorta} odenilecek={odenilecek}/>
                </Container>
            </form>


        </div>
    )
}

export default Main






