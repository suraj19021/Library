import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function BrowseBooksPage() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  // Retrieve books from Redux store
  const books = useSelector((state) => state.books);

  // Dynamically generate unique categories from the books
  const categories = [...new Set(books.map((book) => book.category.toLowerCase()))];

  // Filter books based on the selected category
  let filteredBooks = books.filter(
    (book) => book.category.toLowerCase() === category.toLowerCase()
  );

  // Further filter books based on the search term
  if (searchTerm) {
    filteredBooks = filteredBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div>
      <h2>Browsing: {category.charAt(0).toUpperCase() + category.slice(1)} Books</h2>

      {/* Category Filter Dropdown */}
      <select
        value={category}
        onChange={(e) => {
          // Redirect to the selected category
          window.location.href = `/books/${e.target.value}`;
        }}
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />

      {/* Display Filtered Books */}
      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> by {book.author} —{' '}
              <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
