import React, { useState } from 'react'
import Banner from '../components/Banner';
import PartOne from '../components/PartOne';
import PartTwo from '../components/PartTwo';
import PartFour from '../components/PartFour';
import HomeSwiper from '../components/HomeSwiper';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <PartOne></PartOne>
            <HomeSwiper></HomeSwiper>
            <PartTwo></PartTwo>
            <PartFour></PartFour>
        </div>
    )
}

export default Home