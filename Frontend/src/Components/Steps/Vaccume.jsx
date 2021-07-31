import React, { Component } from 'react'
import Step1 from "../../assets/img/sliders/1.png";
import Step2 from "../../assets/img/sliders/2.png";
import Step3 from "../../assets/img/sliders/3.png";
import Step4 from "../../assets/img/sliders/4.png";
import Step5 from "../../assets/img/sliders/5.png";
import Step6 from "../../assets/img/sliders/6.png";
import Step7 from "../../assets/img/sliders/7.png";
import Step8 from "../../assets/img/sliders/8.png";
import Step9 from "../../assets/img/sliders/9.png";
import lockedImg from "../../assets/img/home/locked.svg"
import { Link } from 'react-router-dom'
import { Slidercontext } from "../../Contexts/Slidercontext"
import '../Home/Homes.css'
import "./vaccume.css"
const images = [
    {
        image: Step1,
        title: "Lifting Handle and Pad Cleaning",
        // Animation: "fade-up-left",
    },
    {
        image: Step2,
        title: "Clean And Inspect The Vaccum Hose",
        // Animation: "zoom-in-up",
    },
    {
        image: Step3,
        title: "Vacuum Barrel and Joints Cleaning And Inspection",
        // Animation: "fade-up-right",
    },
    {
        image: Step4,
        title: "Vacuum Pump Cleaning And Inspection",
        // Animation: "fade-left",
    },
    {
        image: Step5,
        title: "Lifter Handle Switch Inspection",
        // Animation: "zoom-in",
    },
    {
        image: Step6,
        title: "Horizontal Arm Inspection",
        // Animation: "fade-right",
    },
    {
        image: Step7,
        title: "Power on Switch Inspection",
        // Animation: "fade-down-left",
    },
    {
        image: Step8,
        title: "Vacuum hose- from pump to barrel ( Big hose)",
        // Animation: "fade-down",
    },
    {
        image: Step9,
        title: "Vacuum Pressure Gauge",
        // Animation: "fade-down-right",
    },
]

class Vacuum extends Component {
    constructor(props) {
        super()
        this.state = {}
    }

    static contextType = Slidercontext
    render() {
        const { vacStep1 } = this.props
        console.log(vacStep1)
        const { enabled } = this.context
        var stepsArray = Object.keys(enabled).map(function (stepsindex) {
            let steps = enabled[stepsindex];
            return steps;
        });
        if (stepsArray.length === 0) {
            localStorage.removeItem("step1")
            localStorage.removeItem("step2")
            localStorage.removeItem("step3")
            localStorage.removeItem("step4")
            localStorage.removeItem("step5")
            localStorage.removeItem("step6")
            localStorage.removeItem("step7")
            localStorage.removeItem("step8")
        }
        return (
            <>
                <div className='d-flex justify-content-center flex-column align-items-center align-content-center'>
                    <div className=''>
                        {
                            images.map((data, index) => (
                                <div key={index} data-aos-easing="ease-in-sine" data-aos-duration="1500" data-aos={data.Animation} className={stepsArray.includes(`step${index + 1}`) ? "m-3 active_div" : "m-3 inactive_div"}>
                                    <div className='grid-card vacuum-menu-grid d-flex flex-column justify-content-center align-items-center text-center zoom bg-card position-relative' >
                                        <Link to={stepsArray.includes(`step${index + 1}`) ? `/step${index + 1}` : "#"}>
                                            <div className={(localStorage.getItem(`step${index + 1}`) === "notOkay") ? "notchecked_steps" : (localStorage.getItem(`step${index + 1}`) === "okay") ? "checked_steps" : "hide-checked"}><i className="fa fa-check" aria-hidden="true"></i></div>
                                            <img src={stepsArray.includes(`step${index + 1}`) ? data.image : lockedImg} alt='Step1' loading="lazy" className={stepsArray.includes(`step${index + 1}`) ? "w-75 h-75 pt-5 " : "w-100 h-100 "} />
                                        </Link>
                                        {stepsArray.includes(`step${index + 1}`) && <span className="vacuum-grid-tag">{data.title}</span>}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }
}
export default Vacuum