import React from 'react'
import './index.css'
import BookCard from './components/BookCard'
import img1 from './img/1.webp'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.png'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'

const StudentBooks = () => {
  const bookData = [
    {
      title: 'Programming Taskbook',
      author: 'М. Э. Абрамян',
      image: img1,
      description: 'A comprehensive guide to learning React.js for beginners.',
      link: 'https://www.kaznu.kz/content/files/news/folder23098/%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%BD%D0%B8%D0%BA%20%D0%90%D0%B1%D1%80%D0%B0%D0%BC%D1%8F%D0%BD%D0%B0.pdf',
    },
    {
      title: 'Изучаем HTML, XHTML и CSS, Эрик Фримен и Элизабет Робсон',
      author: 'John Doe',
      image: img2,
      description: 'A comprehensive guide to learning React.js for beginners.',
      link: 'https://books.google.kg/books/about/%D0%98%D0%B7%D1%83%D1%87%D0%B0%D0%B5%D0%BC_HTML_XHTML_%D0%B8_CSS_2_%D0%B5_%D0%B8.html?id=kGGLDwAAQBAJ&redir_esc=y',
    },
    {
      title: 'React.js for Beginners',
      author: 'John Doe',
      image: img3,
      description: 'A comprehensive guide to learning React.js for beginners.',
      link: 'https://www.kaznu.kz/content/files/news/folder23098/%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%BD%D0%B8%D0%BA%20%D0%90%D0%B1%D1%80%D0%B0%D0%BC%D1%8F%D0%BD%D0%B0.pdf',
    },
    {
      title: 'HTML5 и CSS3 для чайников, Крис Минник и Эд Титтел',
      author: 'John Doe',
      image: img4,
      description: 'A comprehensive guide to learning React.js for beginners.',
      link: 'https://www.kaznu.kz/content/files/news/folder23098/%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%BD%D0%B8%D0%BA%20%D0%90%D0%B1%D1%80%D0%B0%D0%BC%D1%8F%D0%BD%D0%B0.pdf',
    },
    {
      title: 'Совершенный код',
      author: 'Стив Макконнелл',
      image: img6,
      description: 'A comprehensive guide to learning React.js for beginners.',
      link: 'https://www.kaznu.kz/content/files/news/folder23098/%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%BD%D0%B8%D0%BA%20%D0%90%D0%B1%D1%80%D0%B0%D0%BC%D1%8F%D0%BD%D0%B0.pdf',
    },
    {
      title: 'Javascript и jQuery. Интерактивная веб-разработка, Джон Дакетт',
      author: 'John Doe',
      image: img5,
      description: 'A comprehensive guide to learning React.js for beginners.',
      link: 'https://www.kaznu.kz/content/files/news/folder23098/%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%BD%D0%B8%D0%BA%20%D0%90%D0%B1%D1%80%D0%B0%D0%BC%D1%8F%D0%BD%D0%B0.pdf',
    },
  ]

  return (
    <div className="books">
      {bookData.map((book) => {
        return <BookCard {...book} />
      })}
    </div>
  )
}

export default StudentBooks
