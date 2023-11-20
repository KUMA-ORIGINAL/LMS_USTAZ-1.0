import React from 'react'

const BookCard = ({ title, author, image, description, link }) => {
  return (
    <div className="book-card">
      <img src={image} alt={`${title} cover`} className="book-cover" />
      <div className="book-details">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <p className="book-description">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="book-button"
        >
          Подробнее
        </a>
      </div>
    </div>
  )
}

export default BookCard