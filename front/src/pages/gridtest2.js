import React from 'react'
import Grid from '@toast-ui/react-grid';
import axios from 'axios';

const columns = [
    {name: 'id', header: 'ID'},
    {name: 'username', header: 'UserName', editor: 'text'},
    {name: 'servicenumber', header: 'ServiceNumber', editor: 'text'},
    {name: 'email', header: 'Email', editor: 'text'},
    {name: 'affiliatedunit', header: 'AffiliatedUnit', editor: 'text'},
];

const dataSource = {
    withCredentials: false,
    initialRequest: true,
    api: {
      readData: { url: 'https://mdoms-backend.run.goorm.io/user/grid', method: 'GET' }
    }
};

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata: []
        }
    }

    callApi = () => {
        axios.get('https://mdoms-backend.run.goorm.io/user/grid')
        .then(res => {
            this.setState({
                userdata: res.data
            })
        })

    }

    componentDidMount() {
        this.callApi();
    }

    gridRef = React.createRef();
  
    handleAppendRow = () => {
      this.gridRef.current.getInstance().appendRow({});
    };
    
    handleModifiedRow = () => {
        console.log(this.gridRef.current.getInstance().getModifiedRows({}))
    }

    render() {
      return (
        <>
          <Grid ref={this.gridRef} data={this.state.userdata} columns={columns} draggable={true}/>
          <button onClick={this.handleAppendRow}>Append Row</button>
          <button onClick={this.handleModifiedRow}>Modified Row</button>
        </> 
      );
    }
  }

export default MyComponent;