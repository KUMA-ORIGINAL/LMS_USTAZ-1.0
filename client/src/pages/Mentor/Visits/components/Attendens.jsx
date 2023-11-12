import {useState} from 'react'
import styled from 'styled-components';


//import icons from material icons
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';


const Attendens = ({data}) => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    const numberOfItemsToShow = 6;
  
    const showNextSet = () => {
      if (visibleIndex + numberOfItemsToShow < data.dates.length) {
        setVisibleIndex(visibleIndex + numberOfItemsToShow);
      }
    };
  
    const showPreviousSet = () => {
      if (visibleIndex - numberOfItemsToShow >= 0) {
        setVisibleIndex(visibleIndex - numberOfItemsToShow);
      }
    };
    
  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>ФИО</th>
            {data.dates.slice(visibleIndex, visibleIndex + numberOfItemsToShow).map((date, index) => (
              <th key={index}>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.students.map((student, studentIndex) => (
            <tr key={studentIndex}>
              <td>{studentIndex + 1}</td>
              <td>{student.name}</td>
              {student.visits.slice(visibleIndex, visibleIndex + numberOfItemsToShow).map((visitStatus, visitIndex) => (
                <td key={visitIndex}>
                  {visitStatus === 'check' ? (
                    <CheckIcon />
                  ) : (
                    <CancelIcon />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={showPreviousSet}><WestIcon/></button>
        <button onClick={showNextSet}><EastIcon/></button>
      </div>
    </StyledTable>
  )
}

export default Attendens

const StyledTable = styled.div`
table{
  border-collapse:collapse;
  width:100%;
}
th, td{
  border:1px solid;
  padding:10px;
  width:auto
}
td:first-child{
  max-width:300px
}
button{
  margin:15px 15px 15px 0px;
  padding:6px 25px;
  border:none;
  border-radius:2px;
  color:auto;
}
`