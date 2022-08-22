import React from 'react';
import './Toggle.module.css'
import styled from 'styled-components';

function Toggle(){
    return(
        <>
            <input type="checkbox" id="switch"/><label for="switch">Toggle</label>
        </>
    )
}
export default Toggle;