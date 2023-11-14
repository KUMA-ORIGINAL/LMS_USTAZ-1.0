//import components
import List from './components/List'

const MentorStudentsList = () => {
  //fetch students
  const students = [
    {
      lastName: 'Иванов',
      firstName: 'Иван',
      telegram: '@kany_maks',
      email: 'maksat@mail.com',
      tel: '+996708186699',
      raiting: '51.8%',
      coins: 41,
    },
    {
      lastName: 'Петров',
      firstName: 'Петр',
      telegram: '@maxknb',
      email: 'maksatkanybekov2004_kg@gmail.com',
      tel: '+996708186699',
      raiting: '51.8%',
      coins: 41,
    },
    {
      lastName: 'Иванов',
      firstName: 'Иван',
      telegram: '@ivan123',
      email: 'ivan123@example.com',
      tel: '+996708186699',
      raiting: '51.8%',
      coins: 41,
    },
    {
      lastName: 'Смирнова',
      firstName: 'Анна',
      telegram: '@annasmirnova',
      email: 'anna.smirnova@mail.com',
      tel: '+996708186699',
      raiting: '51.8%',
      coins: 41,
    },
    {
      lastName: 'Козлов',
      firstName: 'Дмитрий',
      telegram: '@dima_kozlov',
      email: 'dima.kozlov@example.com',
      tel: '+996708186699',
      raiting: '51.8%',
      coins: 41,
    },
    {
      lastName: 'Соколова',
      firstName: 'Мария',
      telegram: '@maria_sokolova',
      email: 'maria.sokolova@mail.com',
      tel: '+996708186699',
      raiting: '51.8%',
      coins: 41,
    },
    {
      lastName: 'Иванова',
      firstName: 'Екатерина',
      telegram: '@katya_ivanova',
      email: 'katya.ivanova@example.com',
      tel: '+996708186699',
      raiting: '51.8%',
      coins: 41,
    },
    {
      lastName: 'Кузнецов',
      firstName: 'Алексей',
      telegram: '@alex_kuznetsov',
      email: 'alex.kuznetsov@mail.com',
      tel: '+996708186699',
      raiting: '51.8%',
      coins: 41,
    },
    {
      lastName: 'Семенов',
      firstName: 'Андрей',
      telegram: '@andrey_semenov',
      email: 'andrey.semenov@example.com',
      tel: '+996708186699',
      raiting: '51.8%',
      coins: 41,
    },
    {
      lastName: 'Павлова',
      firstName: 'Елена',
      telegram: '@elena_pavlova',
      email: 'elena.pavlova@mail.com',
      tel: '+996708186699',
      raiting: '51.8%',
      coins: 41,
    },
    {
      lastName: 'Михайлов',
      firstName: 'Сергей',
      telegram: '@sergey_mikhailov',
      email: 'sergey.mikhailov@example.com',
      tel: '+996708186699',
      raiting: '51.8%',
      coins: 41,
    },
  ]

  return (
    <div className="content">
      <List students={students} />
    </div>
  )
}

export default MentorStudentsList
