import React from 'react'

export default function Square(props) {
    return (
        <button className="square" onclick={props.onClick}>
            {props.value}
        </button>
    )
}