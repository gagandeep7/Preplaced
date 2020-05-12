import React from 'react';
import Faker from 'faker';
import { Carousel } from 'react-bootstrap';
import './Review.css';


const ReviewList = () => {
    const arr = ['', '', ''];
    return (
        <Carousel >
            {arr.map((item => {
                return (<Carousel.Item>
                    <div className="ui card" style={{ margin: '1rem auto', width: '80%', borderRadius: '1%' }}>
                        <div className="content">
                            <div className="header rating">{Faker.name.firstName()}
                                <span style={{ float: 'right' }}> <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span></span>
                            </div>
                            <div className="meta">
                                <span className="right floated time">2 days ago</span>
                                <span className="category">{Faker.company.companyName()}</span>
                            </div>
                            <div className="description">
                                <p>{Faker.lorem.paragraphs()}</p>
                            </div>
                        </div>
                        <div className="extra content">
                            <div className="right floated author">
                                <img className="ui avatar image" src={Faker.image.avatar()} alt="avatar" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>);
            }))}
        </Carousel>
    );
};






export default ReviewList;