import React, { useState } from 'react';
import Header from '../../components/gerenciar/index';
import Form from '../../components/fomularioGerenciar/index';

export default function Manage ({state}) {
    return (
        <div>
            <Header {...state}/>
            <Form {...state}/>
        </div>
    )
}
