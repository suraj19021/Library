import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

export default function AddBookPage() {
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });

  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validation: all fields must be filled (trimmed)
    for (const key in form) {
      if (form[key].trim() === '') {
        setError('Please fill all fields.');
        return;
      }
    }

    // Validate rating is number between 1 and 5
    const ratingNum = parseFloat(form.rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      setError('Rating must be a number between 1 and 5.');
      return;
    }

    // Prepare new book object with unique ID
    const newBook = {
      ...form,
      id: Date.now().toString(),
      rating: ratingNum,
      category: form.category.toLowerCase().trim(),
    };

    // Dispatch addBook action
    dispatch(addBook(newBook));

    // Redirect to browse page filtered by new book category
    navigate(`/books/${newBook.category}`);

    // Reset form
    setForm({
      title: '',
      author: '',
      category: '',
      description: '',
      rating: '',
    });
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
        />

        {/* Replaced category input with dropdown */}
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="romance">Romance</option>
          <option value="mystery">Mystery</option>
        </select>

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          value={form.rating}
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
