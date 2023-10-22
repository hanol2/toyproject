import React, { useState } from 'react'
import Banner from '../components/Banner';
import PartOne from '../components/PartOne';
import PartTwo from '../components/PartTwo';
import PartThree from '../components/PartThree';
import PartFour from '../components/PartFour';
import HomeSlider from '../components/HomeSlider';
import Footer from '../components/Footer';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <PartOne></PartOne>
            <HomeSlider></HomeSlider>
            <PartTwo></PartTwo>
            <PartThree></PartThree>
            <PartFour></PartFour>
            <Footer></Footer>
        </div>
    )
}

export default Home