// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Romance', 'Mystery'];

const popularBooks = [
  { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction' },
  { id: '2', title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction' },
  { id: '3', title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi' },
];

export default function HomePage() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Welcome to the Online Library!</h1>
      
      <section>
        <h2>Book Categories</h2>
        <ul>
          {categories.map(cat => (
            <li key={cat}>
              <Link to={`/books/${cat.toLowerCase()}`}>{cat}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Popular Books</h2>
        <ul>
          {popularBooks.map(book => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} -{' '}
              <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
