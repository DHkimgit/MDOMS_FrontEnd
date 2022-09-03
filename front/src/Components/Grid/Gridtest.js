import Grid from 'tui-grid';

const grid = new Grid({
    el: document.getElementById('wrapper'),
    columns: [

    ]
})

grid.setColumns([
    {
        header: 'ID',
        name: 'id'
    },
    {
        header: 'CITY',
        name: 'city',
        editor: 'text'
    },
    {
        header: 'COUNTRY',
        name: 'country'
    }
]);

const data = [
    {
      id: '10012',
      city: 'Seoul',
      country: 'South Korea'
    },
    {
      id: '10013',
      city: 'Tokyo',
      country: 'Japan'    
    },
    {
      id: '10014',
      city: 'London',
      country: 'England'
    },
    {
      id: '10015',
      city: 'Ljubljana',
      country: 'Slovenia'
    },
    {
      id: '10016',
      city: 'Reykjavik',
      country: 'Iceland'
    }
  ];

  grid.resetData(data);

  export default grid;