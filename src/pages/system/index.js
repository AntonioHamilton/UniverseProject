import React, { useState } from 'react';
import Slider from '../../components/slider/index';
import Header from '../../components/system/index';

export default function SystemPage () {

    const [menu, setMenu] = useState('planeta')

    return (
        <div>
            <Header changeMenu={setMenu}/>
            <Slider menu={menu}/>
        </div>
    )
}
