import { useState } from 'react';
import NavLink from '../NavLink';

interface Props {

};

const NavBar = (props: Props) => {
    const [ activeTab, setActiveTab ] = useState(0);

    return (
        <div className="w-full bg-indigo-800 px-10 py-6 drop-shadow fixed">
            <p className="text-orange-400 text-xl font-black inline-block pr-8">
                ONE PAGE
            </p>
            <NavLink title='Home' isSelected />
            <NavLink title='About' />
        </div>
    )
}

export default NavBar;
