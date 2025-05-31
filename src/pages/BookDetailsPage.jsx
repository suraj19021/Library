import { useParams, useNavigate } from 'react-router-dom';

const books = [
  { id: '1', title: '1984', author: 'George Orwell', category: 'fiction', description: 'Dystopian classic', rating: 4.5 },
  { id: '2', title: 'Sapiens', author: 'Yuval Noah Harari', category: 'non-fiction', description: 'History of humankind', rating: 4.8 },
  { id: '3', title: 'Dune', author: 'Frank Herbert', category: 'sci-fi', description: 'Epic sci-fi novel', rating: 4.7 },
  { id: '4', title: 'The Alchemist', author: 'Paulo Coelho', category: 'fiction', description: 'Philosophical novel', rating: 4.2 },
  { id: '5', title: '1984', author: 'George Orwell', category: 'fiction', description: 'Dystopian classic', rating: 4.5 },
  { id: '6', title: 'Sapiens', author: 'Yuval Noah Harari', category: 'non-fiction', description: 'History of humankind', rating: 4.8 },
  { id: '7', title: 'Dune', author: 'Frank Herbert', category: 'sci-fi', description: 'Epic sci-fi novel', rating: 4.7 },
  { id: '8', title: 'The Alchemist', author: 'Paulo Coelho', category: 'fiction', description: 'Philosophical novel', rating: 4.2 },
  { id: '9', title: 'Pride and Prejudice', author: 'Jane Austen', category: 'romance', description: 'Classic romance novel', rating: 4.6 },
  { id: '10', title: 'The Notebook', author: 'Nicholas Sparks', category: 'romance', description: 'Heartwarming love story', rating: 4.1 },
  { id: '11', title: 'Gone Girl', author: 'Gillian Flynn', category: 'mystery', description: 'Psychological thriller', rating: 4.3 },
  { id: '12', title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', category: 'mystery', description: 'Crime mystery novel', rating: 4.4 },
];

export default function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find(b => b.id === id);

  if (!book) return <p>Book not found.</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Description:</b> {book.description}</p>
      <p><b>Rating:</b> {book.rating}</p>
      <button onClick={() => navigate(-1)}>Back to Browse</button>
    </div>
  );
}