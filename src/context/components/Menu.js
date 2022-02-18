import React, { useContext } from 'react';

import { LayoutContext } from '../Context';


/* Use case 1
<LayoutContext.Consumer>
    {value => {
        console.log(value);
        return (<div>
            {value.showMenu && <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>}
        </div>)
    }}
</LayoutContext.Consumer> 
*/
const Menu = () => {

    const value = useContext(LayoutContext);

    return (<div>
        {value.showMenu && <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>}
    </div>)
}

export default Menu;