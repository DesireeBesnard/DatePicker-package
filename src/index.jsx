import React, { useState } from "react"
import styled from "styled-components"

function DatePicker(props) {

    const [date, setDate] = useState()

    return (
        <>
            <input type="date" id={props.id} onChange={e => setDate(e.target.value)}/>
        </>
    )
}

export { DatePicker }