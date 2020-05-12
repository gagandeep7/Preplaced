import React from 'react';
import ShowItem from './ShowItem';
import Check from '../logo/check.png';
import Chat from '../logo/chat.png';
import Office from '../logo/office.png';
import Business from '../logo/business.png';
import './ShowList.css'

const ShowList = (props) => {

    let arr = [
        {
            logo: Check,
            heading: 'STEP 1',
            description: 'Signup and book an interview by filling the form.'

        },
        {
            logo:Chat,
            heading: 'STEP 2',
            description: 'Attend an introductory call from Preplaced.'

        },
        {
            logo: Office,
            heading: 'STEP 3',
            description: 'Schedule and attend your mock interview.'

        },
        {
            logo: Business,
            heading: 'STEP 4',
            description: 'Check your performance and review online'

        },
    ];


    const array = arr.map((item) => {


        return <ShowItem logo = {item.logo} heading = {item.heading} description = {item.description} />;
    });

    return (
        <div className ="card-deck">{array}</div>
    );

};

export default ShowList;