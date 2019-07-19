import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const PersonCard = ({personID}) => {
    const [name, setName] = useState([]);
    const [height, setHeight] = useState([]);
    const [mass, setMass] = useState([]);
    const [gender, setGender] = useState([]);
    const [birthYear, setBirthYear] = useState([]);

    useEffect(() => {
        Axios.get(`https://swapi.co/api/people/${personID}/format=json`)

        .then(res => {
            const personData = res.data.results;
            
            const personName = personData.name;
            const personHeight = personData.height;
            const personMass = personData.mass;
            const personGender = personData.gender;
            const personBirthYear = personData.birth_year;

            setName(personName);
            setHeight(personHeight);
            setMass(personMass);
            setGender(personGender);
            setBirthYear(personBirthYear);
        })

        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className='person-card'>
            
        </div>
    );
}

export default PersonCard;