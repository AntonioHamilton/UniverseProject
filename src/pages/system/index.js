import React, { useState } from 'react';
//import Slider from '../../components/slider/index';
import Header from '../../components/system/index';
import EntitieList from '../../components/entitieList/index';

export default function SystemPage () {

    const [menu, setMenu] = useState('galaxia')

    return (
        <div>
            <Header changeMenu={setMenu}/>
            <EntitieList menu={menu}/>
        </div>
    )
}

//<Slider menu={menu}/>