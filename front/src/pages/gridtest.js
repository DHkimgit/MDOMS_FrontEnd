import React, {useEffect, useState} from 'react'
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import axios from 'axios';

const columns = [
    {name: 'id', header: 'ID'},
    {name: 'username', header: 'UserName', editor: 'text'},
    {name: 'servicenumber', header: 'ServiceNumber', editor: 'text'},
    {name: 'email', header: 'Email', editor: 'text'},
    {name: 'affiliatedunit', header: 'AffiliatedUnit', editor: 'text'},
  ];

// https://react.vlpt.us/integrate-api/02-useReducer.html
function GridTest() {
    const [userdata, setUserData] = useState([]);
    const dataSource = {
      withCredentials: false,
      initialRequest: true,
      api: {
        readData: { url: 'https://mdoms-backend.run.goorm.io/user/grid', method: 'GET' }
      }
    };
    const fatchdata = async () => {
      try {
        const response = await axios.get('https://mdoms-backend.run.goorm.io/user/grid');
        setUserData(response.data);
      }
      catch (e) {
        console.log(e);
      }
    }
    
    useEffect(() => {
      fatchdata(userdata);
    }, [])

    return(
        <>
            <Grid
            data={dataSource}
            columns={columns}
            rowHeight={25}
            bodyHeight={100}
            heightResizable={true}
            rowHeaders={['rowNum']}
            draggable={true}
            onSuccessResponse={data => {
              console.log(data);
            }}
            />
        </>
    )
}

export default GridTest;