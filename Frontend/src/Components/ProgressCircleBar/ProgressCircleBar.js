import React from 'react'
import classes from './ProgressCircleBar.module.css'

export function ProgressCircleBar(props) {
    const status1 = props.status1 === 'yes' ? 'green' : props.status1 === 'no' ? 'red' : '#ced2d9'
    const status2 = props.status2 === 'yes' ? 'green' : props.status2 === 'no' ? 'red' : '#ced2d9'
    const status3 = props.status3 === 'yes' ? 'green' : props.status3 === 'no' ? 'red' : '#ced2d9'
    const status4 = props.status4 === 'yes' ? 'green' : props.status4 === 'no' ? 'red' : '#ced2d9'
    const status5 = props.status5 === 'yes' ? 'green' : props.status5 === 'no' ? 'red' : '#ced2d9'
    const status6 = props.status6 === 'yes' ? 'green' : props.status6 === 'no' ? 'red' : '#ced2d9'
    const status7 = props.status7 === 'yes' ? 'green' : props.status7 === 'no' ? 'red' : '#ced2d9'
    const status8 = props.status8 === 'yes' ? 'green' : props.status8 === 'no' ? 'red' : '#ced2d9'
    const status9 = props.status9 === 'yes' ? 'green' : props.status9 === 'no' ? 'red' : '#ced2d9'
    return (
        <>
            <div className={classes.progress_section}>
                <div className={classes.wrapper}>
                    <div className={classes.sector} style={{ transform: 'rotate(0deg)  skew(50deg)', background: `${status1}` }}></div>
                    <div className={classes.sector} style={{ transform: 'rotate(40deg) skew(50deg)', background: `${status2}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(80deg) skew(50deg)', background: `${status3}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(120deg) skew(50deg)', background: `${status4}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(160deg) skew(50deg)', background: `${status5}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(200deg) skew(50deg)', background: `${status6}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(240deg) skew(50deg)', background: `${status7}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(280deg) skew(50deg)', background: `${status8}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(320deg) skew(50deg)', background: `${status9}` }} ></div>
                    <div className={classes.wrapper_circle}>
                        <div className={classes.step_title}>Step</div>
                        <div className={classes.step_tag}>{props.stepsTag}</div>
                        <div>{props.TimeCounter}Sec</div>
                    </div>
                </div>
                <div className='d-block text-center'>
                    <div className="data-title">Operator Name</div>
                    <div className="data-text">{props.name}</div>
                    <div className="data-title">Machine Serial Number</div>
                    <div className="data-text">{props.machineID}</div>
                </div>
            </div>
        </>
    )
}

// -------------Ten segments progress circle ------------

export function ProgressCircleBarTen(props) {
    const status1 = props.status1 === 'yes' ? 'green' : props.status1 === 'no' ? 'red' : '#ced2d9'
    const status2 = props.status2 === 'yes' ? 'green' : props.status2 === 'no' ? 'red' : '#ced2d9'
    const status3 = props.status3 === 'yes' ? 'green' : props.status3 === 'no' ? 'red' : '#ced2d9'
    const status4 = props.status4 === 'yes' ? 'green' : props.status4 === 'no' ? 'red' : '#ced2d9'
    const status5 = props.status5 === 'yes' ? 'green' : props.status5 === 'no' ? 'red' : '#ced2d9'
    const status6 = props.status6 === 'yes' ? 'green' : props.status6 === 'no' ? 'red' : '#ced2d9'
    const status7 = props.status7 === 'yes' ? 'green' : props.status7 === 'no' ? 'red' : '#ced2d9'
    const status8 = props.status8 === 'yes' ? 'green' : props.status8 === 'no' ? 'red' : '#ced2d9'
    const status9 = props.status9 === 'yes' ? 'green' : props.status9 === 'no' ? 'red' : '#ced2d9'
    const status10 = props.status10 === 'yes' ? 'green' : props.status10 === 'no' ? 'red' : '#ced2d9'
    return (
        <>
            <div className={classes.progress_section}>
                <div className={classes.wrapper}>

                    {/* circle segments */}
                    <div className={classes.sector} style={{ transform: 'rotate(0deg)  skew(50deg)', background: `${status1}` }}></div>
                    <div className={classes.sector} style={{ transform: 'rotate(36deg) skew(50deg)', background: `${status2}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(72deg) skew(50deg)', background: `${status3}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(108deg) skew(50deg)', background: `${status4}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(144deg) skew(50deg)', background: `${status5}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(180deg) skew(50deg)', background: `${status6}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(216deg) skew(50deg)', background: `${status7}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(252deg) skew(50deg)', background: `${status8}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(288deg) skew(50deg)', background: `${status9}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(324deg) skew(50deg)', background: `${status10}` }} ></div>

                    {/* Data inside the circle bar */}
                    <div className={classes.wrapper_circle}>
                        <div className={classes.step_title}>Step</div>
                        <div className={classes.step_tag}>{props.stepsTag}</div>
                        <div>{props.TimeCounter}Sec</div>
                    </div>
                </div>

                {/* user data display block */}
                <div className='d-block text-center'>
                    <div className="data-title">Operator Name</div>
                    <div className="data-text">{props.name}</div>
                    <div className="data-title">Machine Serial Number</div>
                    <div className="data-text">{props.machineID}</div>
                </div>
            </div>
        </>
    )
}

// -------------Thirteen segments progress circle ------------
export function ProgressCircleBar13(props) {
    const status1 = props.status1 === 'yes' ? 'green' : props.status1 === 'no' ? 'red' : '#ced2d9'
    const status2 = props.status2 === 'yes' ? 'green' : props.status2 === 'no' ? 'red' : '#ced2d9'
    const status3 = props.status3 === 'yes' ? 'green' : props.status3 === 'no' ? 'red' : '#ced2d9'
    const status4 = props.status4 === 'yes' ? 'green' : props.status4 === 'no' ? 'red' : '#ced2d9'
    const status5 = props.status5 === 'yes' ? 'green' : props.status5 === 'no' ? 'red' : '#ced2d9'
    const status6 = props.status6 === 'yes' ? 'green' : props.status6 === 'no' ? 'red' : '#ced2d9'
    const status7 = props.status7 === 'yes' ? 'green' : props.status7 === 'no' ? 'red' : '#ced2d9'
    const status8 = props.status8 === 'yes' ? 'green' : props.status8 === 'no' ? 'red' : '#ced2d9'
    const status9 = props.status9 === 'yes' ? 'green' : props.status9 === 'no' ? 'red' : '#ced2d9'
    const status10 = props.status10 === 'yes' ? 'green' : props.status10 === 'no' ? 'red' : '#ced2d9'
    const status11 = props.status11 === 'yes' ? 'green' : props.status11 === 'no' ? 'red' : '#ced2d9'
    const status12 = props.status12 === 'yes' ? 'green' : props.status12 === 'no' ? 'red' : '#ced2d9'
    const status13 = props.status13 === 'yes' ? 'green' : props.status13 === 'no' ? 'red' : '#ced2d9'
    return (
        <>
            <div className={classes.progress_section}>
                <div className={classes.wrapper}>

                    {/* circle segments */}
                    <div className={classes.sector} style={{ transform: 'rotate(0deg)  skew(62deg)', background: `${status1}` }}></div>
                    <div className={classes.sector} style={{ transform: 'rotate(27.6923076923deg) skew(62deg)', background: `${status2}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(55.3846153846deg) skew(62deg)', background: `${status3}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(83.0769230769deg) skew(62deg)', background: `${status4}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(110.7692307692deg) skew(62deg)', background: `${status5}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(138.4615384615deg) skew(62deg)', background: `${status6}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(166.15384615386deg) skew(62deg)', background: `${status7}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(193.8461538461deg) skew(62deg)', background: `${status8}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(221.5384615384deg) skew(62deg)', background: `${status9}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(249.23076923070deg) skew(62deg)', background: `${status10}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(276.923076923deg) skew(62deg)', background: `${status11}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(304.6153846153deg) skew(62deg)', background: `${status12}` }} ></div>
                    <div className={classes.sector} style={{ transform: 'rotate(332.3076923076deg) skew(62deg)', background: `${status13}` }} ></div>

                    {/* Data inside the circle bar */}
                    <div className={classes.wrapper_circle}>
                        <div className={classes.step_title}>Step</div>
                        <div className={classes.step_tag}>{props.stepsTag}</div>
                        <div>{props.TimeCounter}Sec</div>
                    </div>
                </div>

                {/* user data display block */}
                <div className='d-block text-center'>
                    <div className="data-title">Operator Name</div>
                    <div className="data-text">{props.name}</div>
                    <div className="data-title">Machine Serial Number</div>
                    <div className="data-text">{props.machineID}</div>
                </div>
            </div>
        </>
    )
}