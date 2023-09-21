import React, { useEffect } from "react";
import { useState } from "react";

export const Text = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log("Component Mounted");

        return () => {
            console.log("Component Unmounted");
        }
    }, [text])

    return (
        <div>
            <input type="text" onChange={(e) => {
                setText(e.target.value);
            }} />

            <h1> {text} </h1>
        </div>
    )

}