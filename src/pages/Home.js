import React from 'react';
import Form from '../components/Form';
import LikePage from './LikePage';

const Home = () => {
    return (
        <div className='home-page'>
            <Form />
            <LikePage />
        </div>
    );
};

export default Home;