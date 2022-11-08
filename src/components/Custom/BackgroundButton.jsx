import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Icons from '@fortawesome/free-solid-svg-icons'
import React from "react"
import Style from '../../css/BackgroundButton.module.css'


const BackgroundButton = (props) => {
    return <div style={{background: props.color, verticalAlign: "middle", borderRadius: "15px", padding: "1vh 1vw"}} className={Style.BackgroundButton}>
        <FontAwesomeIcon style={{ margin : "auto 1ch auto auto" }} icon={Icons[props.icon]} />
        { props.children }
    </div>
}

export default BackgroundButton