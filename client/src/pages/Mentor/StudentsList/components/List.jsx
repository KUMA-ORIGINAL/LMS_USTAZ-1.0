import styled from 'styled-components'

const List = ({ students }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>№</th>
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Telegram</th>
          <th>Email</th>
          <th>Номер Телефона</th>
          <th>Рейтинг</th>
          <th>Баллы</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{student.lastName}</td>
            <td>{student.firstName}</td>
            <td>{student.telegram}</td>
            <td>{student.email}</td>
            <td>{student.tel}</td>
            <td>{student.raiting}</td>
            <td>{student.coins}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
}

export default List

//styles for this components

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid;
    padding: 10px;
  }

  td:first-child {
    max-width: 50px;
  }

  tr:hover {
    background-color: grey;
  }
`
