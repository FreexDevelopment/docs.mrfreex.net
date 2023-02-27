import React from 'react'

export const WithColor = (props) => {
    return <span style={{ color : props.color }}>
        {props.children}
    </span>
}