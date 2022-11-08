import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as Icons from '@fortawesome/free-solid-svg-icons'
import React from "react"
import Style from '../../css/BackgroundButton.module.css'


const BackgroundButton = React.forwardRef((props, ref) => {
    return <div {...props} ref={ref} style={{background: props.color, display: "flex", columnGap: "1ch", borderRadius:"15px", alignContent: "center"}} className={Style.BackgroundButton}>
        <FontAwesomeIcon style={{ margin: "auto" }} icon={Icons[props.icon]} />
        { props.children }
    </div>
})

export default BackgroundButton