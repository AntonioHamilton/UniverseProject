import React, { useState } from 'react';
//import Slider from '../../components/slider/index';
import Header from '../../components/system/index';
import EntitieList from '../../components/entitieList/index';

export default function SystemPage () {

    const [menu, setMenu] = useState('galaxia')
    const [search, setSearch] = useState('')
    return (
        <div>
            <Header changeMenu={setMenu} changeSearch={setSearch}/>
            <EntitieList menu={menu} search={search}/>
        </div>
    )
}

//<Slider menu={menu}/>