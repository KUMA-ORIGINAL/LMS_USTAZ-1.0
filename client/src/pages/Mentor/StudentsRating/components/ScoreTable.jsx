import { useState } from 'react';
import styled from 'styled-components';

import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';


const ScoreTable = ({ data, onScoreChange }) => {
  const [editableCell, setEditableCell] = useState(null);
  const [highlightedHeader, setHighlightedHeader] = useState(null);

  const handleTdHover = (header) => {
    setHighlightedHeader(header);
  }

  const handleTdMouseLeave = () => {
    setHighlightedHeader(null);
  }


  const [page, setPage] = useState(1);

  const itemsPerPage = 7;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleEditCell = (studentId, lessonIndex) => {
    setEditableCell({ studentId, lessonIndex });
  };

  const handleSaveScore = () => {
    setEditableCell(null);
  };

  const handleCancelEdit = () => {
    setEditableCell(null);
  };

  const isCellEditable = (studentId, lessonIndex) => {
    return editableCell && editableCell.studentId === studentId && editableCell.lessonIndex === lessonIndex;
  };

  const totalPages = Math.ceil(data.lessons.length / itemsPerPage);

  const goToPage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            <th>ФИО</th>
            {data.lessons.slice(startIndex, endIndex).map((lesson, lessonIndex) => (
              <th key={lessonIndex} style={{ width: '10%' }}>{lesson}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.students.map((student, studentIndex) => (
            <tr key={studentIndex}>
              <td 
              className={highlightedHeader === student.id ? 'highlighted' : ''}>
                {student.name}</td>
              {student.scores.slice(startIndex, endIndex).map((score, lessonIndex) => (
                <td onMouseEnter={() => handleTdHover(student.id)} onMouseLeave={handleTdMouseLeave} key={lessonIndex} onClick={() => handleEditCell(student.id, lessonIndex + startIndex)} style={{ cursor: 'pointer' }}>
                  {isCellEditable(student.id, lessonIndex + startIndex) ? (
                    <div>
                      <input type="number" value={score} onChange={(e) => onScoreChange(student.id, lessonIndex + startIndex, e.target.value)} />
                      <button onClick={handleSaveScore}>Сохранить</button>
                      <button onClick={handleCancelEdit}>Отмена</button>
                    </div>
                  ) : (
                    score
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => goToPage(page - 1)}><WestIcon/></button>
        <button onClick={() => goToPage(page + 1)}><EastIcon/></button>
      </div>
      <div>
        <span>Страница {page} из {totalPages}</span>
      </div>
    </StyledTable>
  );
};

export default ScoreTable;



//styles

const StyledTable = styled.div`

table {
  border-collapse: collapse;
  width:100%;
}
.highlighted {
  background: #5d5d5d;
}

th, td {
  border: 1px solid;
  padding: 10px;
  width:auto;
 
}

td:first-child {
  max-width:350px;
}
td:not(:first-child){
  text-align:center;
}

button{
  margin:15px 15px 15px 0px;
  padding:6px 25px;
  border:none;
  border-radius:2px;
  color:auto;
}
td:hover{
  background:#5d5d5d;
}
`