import React, { useState, useCallback } from 'react';

export default props => {
    const [ counter, setCounter ] = useState(0);
    const inc = useCallback(() => setCounter(counter + 3), [counter]);
    const dec = useCallback(() => setCounter(counter - 2), [counter]);

    return (
        <div className='rwdg-main-container' onClick={inc} onMouseEnter={dec}>
            <p>{counter}</p>
        </div>
    )
}