import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Icons from '@fortawesome/free-solid-svg-icons'
import React from "react"
import Style from '../../css/BackgroundButton.module.css'


const BackgroundButton = (props) => {
    return <div style={{background: props.color}} className={Style.BackgroundButton}>
        <FontAwesomeIcon icon={Icons[props.icon]} />
        { props.children }
    </div>
}

export default BackgroundButton