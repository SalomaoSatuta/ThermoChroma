import styles from '../public/styles/master.module.css'
import jsonData from '../data_source/weather.module.json'

import { useState, useEffect } from 'react'


export default function(){

    const [loading, setLoading] = useState(false)
    const [city, setCity] = useState('----')
    const [temperature, setTemperature] = useState('----')
    const [status, setStatus] = useState('----')
    const [color, setColor] = useState('----')
    const [hex, setHex] = useState('----')
    const [texture, setTexture] = useState('----')
    const [description, setDescription] = useState('----')
    const [displayResult, setDisplayResult] = useState('none')
    //const [fielValue, setFieldValue] = useState('')

    const fetchAllData = async () => {
  
        const cityName = document.getElementById('searchField').value
        setLoading(true)
        const response = await fetch('https://api.tomorrow.io/v4/weather/realtime?location='+cityName+'&apikey=fYcltvwljwZzAz0zljYx2m2itmoaCsrv')
        const weatherData = await response.json()

        if(weatherData.data){
      
            setCity(weatherData.location.name)
            setTemperature(weatherData.data.values.temperature + '°C')
            
                const gottenTemp = weatherData.data.values.temperature

                for (const data of jsonData) {

                    if(gottenTemp <  0){

                        if(gottenTemp <= data.temperatura && gottenTemp >= (data.temperatura+(-9.99))){
        
                            setStatus(data.estado)
                            setColor(data.cor)
                            setHex(data.hex)
                            setTexture(data.tecido)
                            setDescription(data.descricao)
                            setDisplayResult('block')

                        }

                    }else if(gottenTemp >= 0){

                        if(gottenTemp >= data.temperatura && (gottenTemp <= data.temperatura+(9.99))){
         
                            setStatus(data.estado)
                            setColor(data.cor)
                            setHex(data.hex)
                            setDescription(data.descricao)
                            setTexture(data.tecido)
                            setDisplayResult('block')

                        }

                    }
                    

                }
        }else{
            console.log('Sem resultados')
        }
    }
    
    useEffect(()=>{
        fetchAllData()
    }, [])

    const handleClick = () => {
        fetchAllData();
    };

    return(
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet"/>

            <div className={styles.flexbox}>
                <div className={styles.item}>

                    {/* This area is dedicated to the searching process */}

                    <div>

                        <div style={{textAlign:'center',marginTop:'30px'}}>

                            <h1 className={styles.title}>
                                Vista-se de acordo ao Clima, 
                                o seu estilo deve ultrapassar 
                                as sensações
                            </h1>

                            <span style={{fontWeight:'lighter', color:'grey'}}>
                                Use nosso app para receber dicas de cores que refletem perfeitamente a temperatura lá fora. 
                                Das tonalidades quentes às frescas, vista-se com harmonia. Transforme sua moda em meteorologia pessoal. 
                                ergulhe em um guarda-roupa que abraça o clima e seu estilo único.
                            </span>

                        </div>
                        
                        <input id='searchField' type='text' placeholder='Escreva o nome da cidade...' style={{textAlign:'center', marginTop:'35px'}} className={styles.mySelect} />
                          
                        <button style={{marginTop:'15px', width:'100%'}} className={styles.btnGrad} onClick={handleClick}>
                            Decida por mim!
                        </button>

                    </div>

                    {/* This area is dedicated to the results of the searching */}
                    <div style={{marginTop:'30px', display:displayResult}}>
                        {/* Information Card */}
                        <div>
                            <ul className={styles.myListUl}>
                                <li className={styles.myList}>Local: <span>{city}</span></li>
                                <li className={styles.myList}>Temperatura: <span>{temperature}</span></li>
                                <li className={styles.myList}>Estado: <span>{status}</span></li>
                                <li className={styles.myList} style={{height:'20px', marginRight:'10px',border:'.5px solid silver', textAlign:'center', backgroundColor:hex}}>
                                <span> {color}</span>
                                </li>
                     
                                <li className={styles.myList}>Hexadecimal: <span>{hex}</span></li>
                                <li className={styles.myList}>Tecido: <span>{texture}</span></li>
                                <li className={styles.myList}>Descrição: <span>{description}</span></li>
                            </ul>
                        </div>
                        {/* Generated Pallete */}
                    </div>


                </div>
            </div>
        </>
    )

}