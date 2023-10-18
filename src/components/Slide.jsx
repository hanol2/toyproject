import React from 'react'
import { Carousel } from 'react-bootstrap';
import CarouselImage from './CarouselImage';

const Slide = () => {

    return (
        <Carousel className='main-img'>
            <Carousel.Item>
                <CarouselImage />
                <div className='img-tag-font'>
                    <div className='img-tag'>
                        <h4 >우아한형제들이 알고싶다</h4>
                        <h1 >세종대왕님~</h1>
                        <h1 >감사합니다</h1>
                        <h4 >글꼴</h4>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage />
                <div className='img-tag'>
                    <h4>우아한형제들이 알고싶다</h4>
                    <h1>배달의 민족에서</h1>
                    <h1>광고하고 싶어요!</h1>
                    <h4>서비스</h4>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage />
                <div className='img-tag'>
                    <h4>우아한형제들이 알고싶다</h4>
                    <h1>배달용기 어떻게</h1>
                    <h1>처리하시나요?</h1>
                    <h4>함께가치</h4>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage />
                <div className='img-tag'>
                    <h4>우아한형제들이 알고싶다</h4>
                    <h1>퀵 커머스가</h1>
                    <h1>무엇인가요?</h1>
                    <h4>서비스</h4>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage />
                <div className='img-tag'>
                    <h4>우아한형제들이 알고싶다</h4>
                    <h1>배경음악</h1>
                    <h1>전격 무료 나눔</h1>
                    <h4>음악</h4>
                </div>
            </Carousel.Item>
        </Carousel >
    )
}

export default Slide
