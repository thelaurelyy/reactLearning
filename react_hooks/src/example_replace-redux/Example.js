import React  from "react";
import ShowArea from './ShowArea'
import Button from './Button'
import { Color } from "./color";

function Example() {
    return (
        <div>
            <Color>
                <ShowArea />
                <Button />
            </Color>
        </div>
    )
}

export default Example
