import React, { useState } from 'react';
import Header from '../../components/gerenciar/index';
import Form from '../../components/fomularioGerenciar/index';

export default function Manage ({ data }) {

    const [menu, setMenu] = useState('planeta');

    return (
        <div>
            <Header {...data} changeMenu={setMenu}/>
            <Form {...data} menu={menu}/>
        </div>
    )
}

