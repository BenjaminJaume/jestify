import React, { useState } from 'react';

const Toggle = () => {
    const [toggled, setToggled] = useState(false);
    const toggle = () => setToggled(!toggled);

    return (
        <button onClick={toggle}>
            {toggled ? 'YES' : 'NO'}
        </button>
    )
}

export default Toggle;