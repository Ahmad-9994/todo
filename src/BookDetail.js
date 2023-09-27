import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = ({ list }) => {
  const { index } = useParams();
  const book = list[index];

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-detail">
    <h1>hellllllllllllllllllllllllllllo</h1>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetail;
