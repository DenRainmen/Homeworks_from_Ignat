import React from 'react'
import "./Message.css"

type ControlType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

export function Message(props: ControlType) {
    return (
        <div className="Message">
            <div className="Message_avatar">
                <img src={props.avatar} alt=""/>
            </div>
            <div className="Message_block">
                <div className="Message_name">{props.name}</div>
                <div className="Message_text">{props.message}</div>
                <div className="Message_time">{props.time}</div>


            </div>

        </div>
    )
}








