import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
    display: block;
    width: 532px;
    background: #F5F5F5;
    margin-top: 100px;
    margin-left: 100px;
    height: 200px;
`
const TableContainer = styled.div`
`
const TBody = styled.tbody`

`
const Thead = styled.thead`

`
const TR = styled.tr`

`
const TH = styled.th`
    width: 200px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    color: #000000;
    height: 25px;
    border-bottom: 0.5px solid #979797;
`
const TD = styled.td`
    height: 25px;
    width: 200px;
    text-align: center;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
`

const CustomTable = () => {
    return(
        <StyledTable>
            <Thead>
                <TR>
                    <TH>ID</TH>
                    <TH>Roster Name</TH>
                    <TH>Number</TH>
                    <TH>Create Date</TH>
                </TR>
            </Thead>
            <TBody>
                <TR>
                    <TD>01</TD>
                    <TD>무전실 근무</TD>
                    <TD>27</TD>
                    <TD>2022-07-22</TD>
                </TR>
                <TR>
                    <TD>02</TD>
                    <TD>위병소 근무</TD>
                    <TD>27</TD>
                    <TD>2022-07-22</TD>
                </TR>
            </TBody>
        </StyledTable>
    )
}

export default CustomTable
