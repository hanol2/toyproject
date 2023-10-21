import React, { useState } from 'react'
import Banner from '../components/Banner';
import PartOne from '../components/PartOne';
import PartTwo from '../components/PartTwo';
import PartFour from '../components/PartFour';
import HomeSlider from '../components/HomeSlider';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <PartOne></PartOne>
            <HomeSlider></HomeSlider>
            <PartTwo></PartTwo>
            <PartFour></PartFour>
        </div>
    )
}

export default Home