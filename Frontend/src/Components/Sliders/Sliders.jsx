import React, { Component } from 'react'
import Slider from "react-slick";
import Step1 from "../../assets/img/sliders/1.png";
import Step2 from "../../assets/img/sliders/2.png";
import Step3 from "../../assets/img/sliders/3.png";
import Step4 from "../../assets/img/sliders/4.png";
import Step5 from "../../assets/img/sliders/5.png";
import Step6 from "../../assets/img/sliders/6.png";
import Step7 from "../../assets/img/sliders/7.png";
import Step8 from "../../assets/img/sliders/8.png";
import Step9 from "../../assets/img/sliders/9.png";
import "./sliders.css"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Slidercontext } from "../../Contexts/Slidercontext"

import {
    Button,
} from "react-bootstrap";
import { Link } from 'react-router-dom';

const NextArrow = ({ onClick }) => {
    return (
        <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
        </div>
    );
};
const images = [Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9];
export default class Sliders extends Component {
    static contextType = Slidercontext
    state = {
        imageIndex: 0
    }
    render() {
        const settings = {
            infinite: true,
            lazyLoad: true,
            speed: 300,
            slidesToShow: 3,
            centerMode: true,
            centerPadding: 0,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            beforeChange: (current, next) => {
                this.setState({
                    imageIndex: next
                })
            },

        };
        const { enabled } = this.context
        var stepsArray = Object.keys(enabled).map(function (stepsindex) {
            let steps = enabled[stepsindex];
            return steps;
        });
        return (
            <div className='d-flex justify-content-center flex-column h-100vh bg-primary container-fluid'>
                <div className="App slider-custom animation">
                    <h3 className="heading mb-5 slider-title white text-center py-2">Vaccum Lifting CheckList</h3>
                    <Slider {...settings} className="slider-position">
                        {images.map((img, idx) => (
                            <div key={idx} className={idx === this.state.imageIndex ? "slide activeSlide" : "slide"}>
                                <Link to={stepsArray.includes(`step${idx + 1}`) ? `/step${idx + 1}` : "#"}>
                                    <img src={img} alt={img} className={stepsArray.includes(`step${idx + 1}`) ? "active" : "inactive"} />
                                </Link>
                            </div>
                        ))}
                    </Slider>
                    <center className="button-position"><Button color="primary" className="Button-pad btn-success">
                        <Link className="Button-font" to={`/`}>Back To Home</Link>
                    </Button></center>
                </div>
            </div>
        )
    }
}