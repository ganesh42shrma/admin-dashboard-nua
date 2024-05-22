import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { useAuth } from '../../contexts/authContext';
import { fetchBooks } from '../../services/api';
import Pagination from './Pagination';
import SearchBar from '../searchBar/searchBar';
import Footer from '../../components/Footer/footer'; 
import './dataTable.css';

const DataTable = () => {
  const { currentUser } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (searchResults) => {
    setData(searchResults);
    setSearchPerformed(true);
  };

  const fetchFirstPage = async () => {
    setLoading(true);
    try {
      const result = await fetchBooks(1, pageSize);
      const books = result.docs.map(book => ({
        title: book.title,
        author_name: book.author_name?.join(', ') || 'N/A',
        first_publish_year: book.first_publish_year || 'N/A',
        subject: book.subject?.join(', ') || 'N/A',
        author_birth_date: book.author_birth_date || 'N/A',
        author_top_work: book.author_top_work || 'N/A',
        ratings_average: book.ratings_average || 'N/A',
      }));
      setData(books);
    } catch (error) {
      console.error("Error loading books", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true);
      try {
        const result = await fetchBooks(page, pageSize);
        const books = result.docs.map(book => ({
          title: book.title,
          author_name: book.author_name?.join(', ') || 'N/A',
          first_publish_year: book.first_publish_year || 'N/A',
          subject: book.subject?.join(', ') || 'N/A',
          author_birth_date: book.author_birth_date || 'N/A',
          author_top_work: book.author_top_work || 'N/A',
          ratings_average: book.ratings_average || 'N/A',
        }));
        setData(books);
      } catch (error) {
        console.error("Error loading books", error);
      }
      setLoading(false);
    };

    loadBooks();
  }, [page, pageSize]);

  const columns = React.useMemo(() => [
    { Header: 'Title', accessor: 'title' },
    { Header: 'Author Name', accessor: 'author_name' },
    { Header: 'First Publish Year', accessor: 'first_publish_year' },
    { Header: 'Subject', accessor: 'subject' },
    { Header: 'Author Birth Date', accessor: 'author_birth_date' },
    { Header: 'Author Top Work', accessor: 'author_top_work' },
    { Header: 'Ratings Average', accessor: 'ratings_average' },
  ], []);

  return (
    <div className="data-table-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <button className="back-to-books" onClick={fetchFirstPage} disabled={!searchPerformed}>Back to all Books</button>
          <div id="text-container" className="text-container">
            <div>Hello <span className='user-name'>{currentUser.displayName ? currentUser.displayName : currentUser.email}</span>, you are now logged in.</div>
          </div>
          
          <table>
            <thead>
              <tr>
                {columns.map(column => (
                  <th key={column.Header}>{column.Header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <td key={colIndex}>{row[column.accessor]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            page={page}
            pageSize={pageSize}
            totalRecords={1000} // Assuming total records
            setPage={setPage}
            setPageSize={setPageSize}
          />
          <div>
            <CSVLink data={data} filename={"books_current_page.csv"} className="download-btn">Download Books (Current Page)</CSVLink>
          </div>
        </>
      )}
    </div>
    
  );
};

export default DataTable;
