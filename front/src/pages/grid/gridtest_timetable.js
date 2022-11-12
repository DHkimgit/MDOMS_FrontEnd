import React from 'react'
import Grid from '@toast-ui/react-grid';
import TuiGrid from 'tui-grid';
import axios from 'axios';
import { ThemeConsumer } from 'styled-components';

TuiGrid.applyTheme('default');

const columns = [
    {name: 'time', header: '시간', width: 180},
    {name: 'Monday', header: '월요일'},
    {name: 'Tuesday', header: '화요일'},
    {name: 'Wednesday', header: '수요일'},
    {name: 'Thursday', header: '목요일'},
    {name: 'Friday', header: '금요일'},
    {name: 'Saturday', header: '토요일'},
    {name: 'Sunday', header: '일요일'}
];
const data_2 = [{'time': '06:00 - 08:00', 'Monday': '일병 김두현', 'Tuesday': '상병 이정현', 'Wednesday': '상병 박상하', 'Thursday': '상병 이승만', 'Friday': '상병 윤보선', 'Saturday': '일병 박정희', 'Sunday': '일병 김영삼'}, {'time': '08:00 - 10:00', 'Monday': '일병 김두현', 'Tuesday': '일병 박정희', 'Wednesday': '병장 문재인', 'Thursday': '일병 이회창', 'Friday': '일병 우규민', 'Saturday': '상병 윤보선', 'Sunday': '일병 이명박'}, {'time': '10:00 - 12:00', 'Monday': '상병 이정현', 'Tuesday': '일병 김영삼', 'Wednesday': '병장 윤석열', 'Thursday': '일병 진중권', 'Friday': '일병 김두현', 'Saturday': '일병 박정희', 'Sunday': '병장 문재인'}, {'time': '12:00 - 14:00', 'Monday': '상병 박상하', 'Tuesday': '일병 노태우', 'Wednesday': '병장 김대중', 'Thursday': '일병 오지환', 'Friday': '상병 이정현', 'Saturday': '일병 김영삼', 'Sunday': '병장 윤석열'}, {'time': '14:00 - 16:00', 'Monday': '상병 이승만', 'Tuesday': '일병 박근혜', 'Wednesday': '병장 노무현', 'Thursday': '일병 이민호', 'Friday': '상병 박상하', 'Saturday': '일병 노태우', 'Sunday': '병장 김대중'}, {'time': '16:00 - 18:00', 'Monday': '상병 윤보선', 'Tuesday': '일병 이명박', 'Wednesday': '상병 김무성', 'Thursday': '일병 임찬규', 'Friday': '상병 이승만', 'Saturday': '일병 박근혜', 'Sunday': '병장 노무현'}, {'time': '18:00 - 20:00'}, {'time': '20:00 - 22:00'}]
const data = [
    {
        "time" : '06:00 - 08:00',
        "Monday" : '일병 김두현',
        "Tuesday" : '일병 김두현',
        "wednesday" : '일병 김두현',
        "Thursday" : '일병 김두현',
        "Friday" : '일병 김두현',
        "Saturday" : '일병 김두현',
        "Sunday" : '일병 김두현'
    },
    {
        "time" : '08:00 - 10:00',
        "Monday" : '일병 김두현',
        "Tuesday" : '일병 김두현',
        "wednesday" : '일병 김두현',
        "Thursday" : '일병 김두현',
        "Friday" : '일병 김두현',
        "Saturday" : '일병 김두현',
        "Sunday" : '일병 김두현'
    },
    {
        "time" : '10:00 - 12:00',
        "Monday" : '일병 김두현',
        "Tuesday" : '일병 김두현',
        "wednesday" : '일병 김두현',
        "Thursday" : '일병 김두현',
        "Friday" : '일병 김두현',
        "Saturday" : '일병 김두현',
        "Sunday" : '일병 김두현'
    },
    {
        "time" : '12:00 - 14:00',
        "Monday" : '일병 김두현',
        "Tuesday" : '일병 김두현',
        "wednesday" : '일병 김두현',
        "Thursday" : '일병 김두현',
        "Friday" : '일병 김두현',
        "Saturday" : '일병 김두현',
        "Sunday" : '일병 김두현'
    },
    {
        "time" : '14:00 - 16:00',
        "Monday" : '일병 김두현',
        "Tuesday" : '일병 김두현',
        "wednesday" : '일병 김두현',
        "Thursday" : '일병 김두현',
        "Friday" : '일병 김두현',
        "Saturday" : '일병 김두현',
        "Sunday" : '일병 김두현'
    },
    {
        "time" : '16:00 - 18:00',
        "Monday" : '일병 김두현',
        "Tuesday" : '일병 김두현',
        "wednesday" : '일병 김두현',
        "Thursday" : '일병 김두현',
        "Friday" : '일병 김두현',
        "Saturday" : '일병 김두현',
        "Sunday" : '일병 김두현'
    },
    {
        "time" : '18:00 - 20:00',
        "Monday" : '일병 김두현',
        "Tuesday" : '일병 김두현',
        "wednesday" : '일병 김두현',
        "Thursday" : '일병 김두현',
        "Friday" : '일병 김두현',
        "Saturday" : '일병 김두현',
        "Sunday" : '일병 김두현'
    },
    {
        "time" : '20:00 - 22:00',
        "Monday" : '일병 김두현',
        "Tuesday" : '일병 김두현',
        "wednesday" : '일병 김두현',
        "Thursday" : '일병 김두현',
        "Friday" : '일병 김두현',
        "Saturday" : '일병 김두현',
        "Sunday" : '일병 김두현'
    }

  ]

const columnOptions = {
    frozenCount: 1,
    frozenBorderWidth: 1
}

class Timetable_test extends React.Component {
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
        
    }

    gridRef = React.createRef();
  
    handleAppendRow = () => {
      this.gridRef.current.getInstance().appendRow({});
    };
    
    handleModifiedRow = () => {
        console.log(this.gridRef.current.getInstance().getModifiedRows({}))
    }
    
    handleColor = () => {
        this.gridRef.current.getInstance().addRowClassName(2, 'redasdasdsad')
    }
    getvalue = () => {
        console.log(this.gridRef.current.getInstance().getValue(2, 'time'))
    }

    render() {
      return (
        <>
          <Grid ref={this.gridRef} data={data_2} columns={columns} columnOptions={columnOptions} draggable={false}/>
          <button onClick={this.handleColor}>Change Color</button>
        </> 
      );
    }
  }

export default Timetable_test;