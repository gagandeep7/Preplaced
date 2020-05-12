import React from 'react';
import { Card } from 'react-bootstrap';


const ShowItem = (props) => {

    return (
        <Card style={{
            width: '18rem', color: '#545454',
            fontFamily: "'Montserrat' ,'sans-serif'",
            fontWeight: '400px', border: 'none'
        }} className='text-center mt-5'>
            <Card.Img variant="top" src={props.logo} style={{
                width: '6rem', display: 'block'
                , margin: '0 auto'
            }} />
            <Card.Body className='mb-5'>
                <Card.Title style={
                    {
                        color: 'black',
                        letterSpacing: '1px',
                        fontWeight: '570',
                        fontSize: '0.9rem'
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