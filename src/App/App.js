import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Day from '../Day/Day';
import {v4 as uuidv4} from 'uuid';

import s from './App.module.css';

const urlForecast =
    'http://api.openweathermap.org/data/2.5/forecast?q=London,UKus&cnt=40&mode=json&appid=47e69b822b5de870839d6c8b5b679e56';
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

function App() {
    const [time, setTime] = useState(new Date())
    const [list, setList] = useState([])
    const [firstElem, setFirstElem] = useState('')
    useEffect(() => {
        axios.request(urlForecast).then(result => {
            const data = result.data.list;
            console.log(result.data)
            let tempForecast = []
            let count = 0
            data.map(function (el, index) {
                if (index === count) {
                    let obj = {
                        day: '',
                        temp: '',
                        icon: ''
                    }
                    if (index === 0) {
                        setFirstElem("" + Math.round(el['main'].temp - 273) + "°")

                    }
                    let apiDate = new Date(el.dt_txt)
                    let actualDay = apiDate.getDay()
                    obj.temp = el['main'].temp
                    obj.day = days[actualDay]
                    obj.icon = el['weather'][0].icon
                    tempForecast.push(obj);
                    count = count + 8
                }

                return true
            });
            setList(tempForecast)

        }).catch(err => {
            console.log(err)
        })

    }, [])
    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(new Date());
        }, 60000);
        return () => clearTimeout(timer);
    })
    // console.log('---------list---------', list)
    // console.log('---------firstElem---------', firstElem)
    return (
        <div className={s.container}>
            <div className={s.statusCol}>
                <div className={s.header}>
                    <h3>
                        London
                        {"                                   "}
                        {time.toLocaleTimeString().slice(0, 5)}
                        {"                                   "}
                        {firstElem}
                    </h3>
                </div>


                {list.map(el => (
                    <Day key={uuidv4()} temp={el.temp} day={el.day} icon={el.icon}/>
                ))}
            </div>
        </div>
    );
}

export default App;
