import React from 'react';
import { Card } from 'react-bootstrap';


const ShowItem = (props) => {

    return (
        <Card style={{
             color: '#545454',
            fontFamily: "'Montserrat' ,'sans-serif'",
            fontWeight: '400px', border: 'none'
        }} className='text-center mt-5'>
            <Card.Img variant="top" src={props.logo} style={{
                 display: 'block'
                , margin: '0 auto'
                , width : '8rem'
            }} />
            <Card.Body className='mb-5'>
                <Card.Title style={
                    {
                        color: 'black',
                        letterSpacing: '1px',
                        fontWeight: '570',

                    }
                }>
                    {props.heading}
                </Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>

            </Card.Body>
        </Card>
    );

};


export default ShowItem;