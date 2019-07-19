import React from 'react';
import PersonCard from './PersonCard';
import { personIDs } from '../data';

const CardsContainer = props => {

    return (
        <div className='cards-container'>
            {personIDs.map(id => <PersonCard personID={id}></PersonCard>)};
        </div>
    );
}

export default CardsContainer;