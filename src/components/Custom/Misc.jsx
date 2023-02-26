import React from 'react'
import styled from 'styled-components'

export const WithColor = (props) => {
    return <span style={{ color : props.color }}>
        {props.children}
    </span>
}

export const ComponentIcon = (props) => {
    const WithStyle = styled(props.component)`
        height: 13pt;
        display: inline;

        & path {
            fill: #fff;
        }
    `
    return <WithStyle />
}