import React from 'react';
import './Toggle.module.css'
import styled from 'styled-components';

function Toggle(props){
    return(
        <>
            <input type="checkbox" id="switch" name={props.name} value={props.value} onChange={props.onChange}/><label for="switch">Toggle</label>
        </>
    )
}
export default Toggle;