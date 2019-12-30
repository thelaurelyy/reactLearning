import React, { useReducer } from 'react';
import ShowArea from './showArea';
import Button from './Button';
import { Color } from './color';

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
