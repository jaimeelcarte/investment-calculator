import React from "react"
import InputGroup from "./InputGroup"

export default function UserInput(){
    return (
        <div id="user-input" className="input-group">
            <InputGroup title="initial investment" step="10" />
            <InputGroup title="annual investment" step="100" />
            <InputGroup title="expected return" step="0.1"/>
            <InputGroup title="duration" />
        </div>
    )
}