import styles from '../public/styles/master.module.css'

export default function(){

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
                        
                        <select style={{textAlign:'center', marginTop:'35px'}} className={styles.mySelect}>
                            <option>Selecione a sua provícia</option>
                        </select>

                        <button style={{marginTop:'15px', width:'100%'}} className={styles.btnGrad}>
                            Decida por mim!
                        </button>
                    </div>

                    {/* This area is dedicated to the results of the searching */}
                    <div style={{marginTop:'30px'}}>
                        adasdasdas
                    </div>


                </div>
            </div>
        </>
    )

}