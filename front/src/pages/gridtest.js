import React, {useEffect, useState} from 'react'
import 'tui-grid/dist/tui-grid.css';
import Grid from '@toast-ui/react-grid';
import axios from 'axios';
import { useAsync } from 'react-async';


const data = [
    {username: '김두현', id: 1, name: 'Editor'},
    {username: '김두현2', id: 2, name: 'Grid'},
    {username: '김두현3', id: 3, name: 'Chart'}
  ];
  
const columns = [
    {name: 'id', header: 'ID'},
    {name: 'username', header: 'UserName'},
    {name: 'servicenumber', header: 'ServiceNumber'},
    {name: 'email', header: 'Email'},
    {name: 'affiliatedunit', header: 'AffiliatedUnit'},
  ];

async function getUsers() {
  const response = await axios.get(
    'https://mdoms-backend.run.goorm.io/user/'
  );
  return response.data.data[0];
}

function GridTest() {
    const [patchdata, setPatchData] = useState();
    const [length, setLength] = useState();
    const [userdata, setUserData] = useState();
    const data = []

    const fatchdata = async() => {
      const response = await axios.get('https://mdoms-backend.run.goorm.io/user/')
      return response.data.data[0]
    }
    useEffect(() => {
      setUserData = fatchdata();
    }, [])
    // useEffect(() => {
    //   axios.get('https://mdoms-backend.run.goorm.io/user/')
    //   .then(result => {
    //     setPatchData(result.data.data[0])
    //     setLength(result.data.data[0].length)
    //   })
    // }, []);
    // for (let i = 0 ; i <= length; i++) {
    //   let id = patchdata[i].id;
    //   let username = patchdata[i].UserName;
    //   let servicenumber = patchdata[i].ServiceNumber;
    //   let email = patchdata[i].Email;
    //   let affiliatedunit = patchdata[i].AffiliatedUnit;
    //   let tmp = {
    //     id: {id},
    //     username: {username},
    //     servicenumber: {servicenumber},
    //     email: {email},
    //     affiliatedunit: {affiliatedunit}
    //   }
    //   data.push(tmp)
    // }
    console.log(userdata)
    console.log(userdata)

    return(
        <>
            <Grid
            data={userdata}
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