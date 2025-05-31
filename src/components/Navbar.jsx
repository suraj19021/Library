import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    marginRight: '1.5rem',
    textDecoration: location.pathname === path ? 'underline' : 'none',
    fontWeight: location.pathname === path ? 'bold' : 'normal',
    color: '#333',
    transition: 'all 0.3s ease',
  });

  const linkHover = {
    textDecoration: 'underline',
    cursor: 'pointer',
  };

  return (
    <nav style={{ padding: '1rem', background: '#eee', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Link 
        to="/" 
        style={linkStyle('/')} 
        onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'} 
        onMouseOut={e => e.currentTarget.style.textDecoration = location.pathname === '/' ? 'underline' : 'none'}
      >
        Home
      </Link>
      <Link 
        to="/books/fiction" 
        style={linkStyle('/books/fiction')} 
        onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'} 
        onMouseOut={e => e.currentTarget.style.textDecoration = location.pathname === '/books/fiction' ? 'underline' : 'none'}
      >
        Browse Books
      </Link>
      <Link 
        to="/add" 
        style={linkStyle('/add')} 
        onMouseOver={e => e.currentTarget.style.textDecoration = 'underline'} 
        onMouseOut={e => e.currentTarget.style.textDecoration = location.pathname === '/add' ? 'underline' : 'none'}
      >
        Add Book
      </Link>
    </nav>
  );
}
