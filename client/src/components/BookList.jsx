import React from 'react';
import Book from './Book';

const BookList = () => {
  const books = [
    { title: 'The Great Adventure', price: '$40.00 - $80.00', image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', sale: false },
    { title: 'Mystery of the Night', price: '$18.00', image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', sale: true, rating: 5 },
    { title: 'Classic Tales', price: '$25.00', image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', sale: true },
    { title: 'Popular Reads', price: '$40.00', image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', rating: 5 },
    { title: 'The Great Adventure', price: '$40.00 - $80.00', image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', sale: false },
    { title: 'Mystery of the Night', price: '$18.00', image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', sale: true, rating: 5 },
    { title: 'Classic Tales', price: '$25.00', image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', sale: true },
    { title: 'Popular Reads', price: '$40.00', image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg', rating: 5 },
    
  ];

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div>

        </div>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {books.map((book, index) => (
            <Book key={index} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;
