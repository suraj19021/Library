// src/components/PageNotFound.js
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
