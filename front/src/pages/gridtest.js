import React from 'react'
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';

const data = [
    {username: '김두현', id: 1, name: 'Editor'},
    {username: '김두현2', id: 2, name: 'Grid'},
    {username: '김두현3', id: 3, name: 'Chart'}
  ];
  
const columns = [
    {name: 'username', header: 'UserName'},
    {name: 'id', header: 'ID'},
    {name: 'name', header: 'Name'}
  ];

function GridTest() {
    
      return(
        <>
            <Grid
            data={data}
            columns={columns}
            rowHeight={25}
            bodyHeight={100}
            heightResizable={true}
            rowHeaders={['rowNum']}
            draggable={true}
            />
        </>
      )
}

export default GridTest;