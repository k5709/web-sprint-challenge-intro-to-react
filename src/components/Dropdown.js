import React from 'react'
import { Dropdown } from 'react-dropdown'
import 'react-dropdown/Dropdown'
import Character from './components/Character';


export default function DropdownMenu( ) {
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <button></button>
            </Dropdown.Toggle>
        </Dropdown>
    )
}
