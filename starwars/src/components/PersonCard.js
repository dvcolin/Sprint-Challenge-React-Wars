import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { PersonName, PersonHeight, PersonMass, personGender, personBirthYear, PersonGender, PersonBirthYear } from './PersonContent';


function PersonCard (props) {
    const [name, setName] = useState([]);
    const [height, setHeight] = useState([]);
    const [mass, setMass] = useState([]);
    const [gender, setGender] = useState([]);
    const [birthYear, setBirthYear] = useState([]);

    useEffect(() => {
        Axios.get(`https://swapi.co/api/people/${props.personID}/?format=json`)

        .then(res => {
            const personData = res.data;
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
            <PersonName>{name}</PersonName>
            <PersonHeight>Height: {height}</PersonHeight>
            <PersonMass>Mass: {mass}</PersonMass>
            <PersonGender>Gender: {gender}</PersonGender>
            <PersonBirthYear>Birth Year: {birthYear}</PersonBirthYear>
        </div>
    );
}

export default PersonCard;