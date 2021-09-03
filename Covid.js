import React, {useEffect,useState} from 'react'
import './Covid.css';

const Covid = () => {
const [summary, setData] = useState([]);

    const getCovidData = async () =>{
        try {
            const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest')
            const actualData = await res.json();
            console.log(actualData.data.summary);
            setData(actualData.data.summary)
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        getCovidData();
    },[]);
    
    
    
    
    return (
        <>
        <section className='vinay'>
        <h1> LIVE</h1>
        <h2>COVID 19 CASES</h2>
        <ul>
            <li className='card'>
                <div className= "card_main">
                    <div className= "inner1">
                    <p className="card_name"><span> OUR COUNTRY</span></p> 
                    <p className="card_total card_small">India</p> 
                </div>
                </div>
            </li>
            <li className='card'>
                <div className= "card_main">
                    <div className= "inner2">
                    <p className="card_name"><span> TOTAL</span></p> 
                    <p className="card_total card_small">{summary.total}</p> 
                </div>
                </div>
            </li>
            <li className='card'>
                <div className= "card_main">
                    <div className= "inner3">
                    <p className="card_name"><span> CONFIRMED CASES</span></p> 
                    <p className="card_total card_small">{summary.confirmedCasesIndian}</p> 
                </div>
                </div>
            </li>
            <li className='card'>
                <div className= "card_main">
                    <div className= "inner4">
                    <p className="card_name"><span> DEATHS</span></p> 
                    <p className="card_total card_small">{summary.deaths}</p> 
                </div>
                </div>
            </li>
            <li className='card'>
                <div className= "card_main">
                    <div className= "inner5">
                    <p className="card_name"><span> Recovered</span></p> 
                    <p className="card_total card_small">{summary.discharged}</p> 
                </div>
                </div>
            </li>
            </ul>
            </section>
            <section>
                <h1>
                    
                </h1>
                </section>
                
        
        </>
    )
}

export default Covid
