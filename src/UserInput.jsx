import React from "react"
import InputGroup from "./InputGroup"

export default function UserInput(){
    return (
        <div id="user-input" className="input-group">
            <InputGroup title="initial investment" />
            <InputGroup title="annual investment" />
            <InputGroup title="expected return" />
            <InputGroup title="duration" />
        </div>
    )
}