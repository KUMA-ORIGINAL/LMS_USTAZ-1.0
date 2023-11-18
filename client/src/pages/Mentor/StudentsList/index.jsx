import StudentItem from './components/List'
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

const MentorStudentsList = () => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      width: 200,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'firstName', headerName: 'Telegram', width: 130 },
    { field: 'lastName', headerName: 'Email', width: 220 },
    {
      field: '',
      headerName: 'Активность',
      type: 'number',
      width: 150,
    },
    {
      field: 'rating',
      headerName: 'Баллы',
      type: 'number',
      width: 90,
    },
    {
      field: 'age',
      headerName: 'Рейтинг',
      type: 'number',
      width: 90,
    },
  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <div className="content">
      <h2 style={{marginBottom:"20px"}}>Список студентов</h2>

      <TableContainer>
        <div>
        <thead>
          <tr>
            <th>№</th>
            <th>ФИО</th>
            <th>Telegram</th>
            <th>Email</th>
            <th>Активность</th>
            <th>Баллы</th>
            <th>Рейтинг</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((data) => {
            return           <tr>
            <td>{data.id}</td>
            <td>{data.lastName}{data.firstName}</td>
            <td>{data.age}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          })}
        </tbody>
        </div>
      </TableContainer>
    </div>
  )
}

export default MentorStudentsList


const TableContainer  = styled.table`
    margin-top:20px;
    border-raduis:10px;
    border-collapse:collapse;
    div{
      border:1px solid grey;
      border-radius:5px;
      width:100%
    }
    tbody, thead{
     width:100%
    }
    tr{
      border-top:1px solid grey;
      padding:10px;
    }
    tr:hover{
      background:rgba(255, 255, 255, 0.08);
    }
    td{
      padding:5px ;
      border:none;
      text-align:left;
    }
    th, td:nth-child(3){
      font-size:13px;
    }
    th:first-child, td:first-child{
      max-width:40px;
      text-align:left;
    }
    th:nth-child(2), td:nth-child(2){
      max-width:200px;
      text-align:left;
    }
    th:nth-child(3), td:nth-child(3){
      width:150px;
      text-align:left;
    }
    th:nth-child(4), td:nth-child(4){
      width:230px;
      text-align:left;
    }
    th:nth-child(5), td:nth-child(5){
      width:150px;
      text-align:left;
    }
    th:nth-child(6), td:nth-child(6){
      width:100px;
      text-align:left;
    }
    th:last-child, td:last-child{
      width:100px;
      text-align:left;
    }
`
