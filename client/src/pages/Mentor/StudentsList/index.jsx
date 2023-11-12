//import components
import List from './components/List';


const MentorStudentsList = () => {

  //fetch students
  const students = [
    {
      lastName: 'Иванов',
      firstName: 'Иван',
      telegram: '@kany_maks',
      email: 'maksat@mail.com',
    },
    {
      lastName: 'Петров',
      firstName: 'Петр',
      telegram: '@maxknb',
      email: 'maksatkanybekov2004_kg@gmail.com',
    },
    {
      lastName: 'Иванов',
      firstName: 'Иван',
      telegram: '@ivan123',
      email: 'ivan123@example.com',
    },
    {
      lastName: 'Смирнова',
      firstName: 'Анна',
      telegram: '@annasmirnova',
      email: 'anna.smirnova@mail.com',
    },
    {
      lastName: 'Козлов',
      firstName: 'Дмитрий',
      telegram: '@dima_kozlov',
      email: 'dima.kozlov@example.com',
    },
    {
      lastName: 'Соколова',
      firstName: 'Мария',
      telegram: '@maria_sokolova',
      email: 'maria.sokolova@mail.com',
    },
    {
      lastName: 'Иванова',
      firstName: 'Екатерина',
      telegram: '@katya_ivanova',
      email: 'katya.ivanova@example.com',
    },
    {
      lastName: 'Кузнецов',
      firstName: 'Алексей',
      telegram: '@alex_kuznetsov',
      email: 'alex.kuznetsov@mail.com',
    },
    {
      lastName: 'Семенов',
      firstName: 'Андрей',
      telegram: '@andrey_semenov',
      email: 'andrey.semenov@example.com',
    },
    {
      lastName: 'Павлова',
      firstName: 'Елена',
      telegram: '@elena_pavlova',
      email: 'elena.pavlova@mail.com',
    },
    {
      lastName: 'Михайлов',
      firstName: 'Сергей',
      telegram: '@sergey_mikhailov',
      email: 'sergey.mikhailov@example.com',
    },


  ];

  return (
    <div className='content'> 
      <List students={students}/>
    </div>
  )
}

export default MentorStudentsList