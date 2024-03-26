import { DataBook } from './BookData';
import React, { useEffect, useState } from 'react';
import './App.css'; 
function App() {
  const [Data, setData] = useState([]);
  const [BookName, setBookName] = useState('');
  const [Author, setAuthor] = useState('');
  const [Generation, setGeneration] = useState('');
  const [YOP, setYOP] = useState('');
  const [id, setId] = useState(0);

  useEffect(() => {
    setData(DataBook);
  }, []);

  const handleEdit = (id) => {
    const dt = Data.find((item) => item.id === id);
    if (dt !== undefined) {
      setId(id);
      setBookName(dt.BookName);
      setAuthor(dt.Author);
      setGeneration(dt.Generation);
      setYOP(dt.YOP)
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      const dt = Data.filter((item) => item.id !== id);
      setData(dt);
    }
  };

  const handleSave = () => {
    const newItem = {
      id: Data.length + 1,
      BookName: BookName,
      Author: Author,
      Generation: Generation,
      YOP: YOP
    };
    setData([...Data, newItem]);
    handleClear();
  };

  const handleUpdate = () => {
    const updatedData = Data.map((item) =>
      item.id === id ? { ...item, BookName, Author, Generation,YOP } : item
    );
    setData(updatedData);
    handleClear();
  };

  const handleClear = () => {
    setId(0);
    setBookName('');
    setAuthor('');
    setGeneration('');
    setYOP('')
  };

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <div>
          <label>
            Book Name:&nbsp;
            <input
              type="text"
              placeholder="Enter Book Name"
              onChange={(e) => setBookName(e.target.value)}
              value={BookName}
            />
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            Author Name:&nbsp;
            <input
              type="text"
              placeholder="Enter Author Name"
              onChange={(e) => setAuthor(e.target.value)}
              value={Author}
            />
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            Generation:&nbsp;
            <input
              type="text"
              placeholder="Enter Generation"
              onChange={(e) => setGeneration(e.target.value)}
              value= {Generation}
            />
          </label>&nbsp;&nbsp;&nbsp;&nbsp;

          <label>
            YOP:&nbsp;
            <input
              type="text"
              placeholder="Enter YOP"
              onChange={(e) => setYOP(e.target.value)}
              value= {YOP}
            />
          </label>
        </div>
        <div>&nbsp;&nbsp;

          <button className="btn btn-primary" onClick={id ? handleUpdate : handleSave}>
            {id ? 'Update' : 'Save'}
          </button> &nbsp;
          <button className="btn btn-danger" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
      <table className="table table-hover" style={{marginLeft: '90px'}}>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>ID</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Generation</th>
            <th>YOP</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.BookName}</td>
              <td>{item.Author}</td>
              <td>{item.Generation}</td>
              <td>{item.YOP}</td>
              
              
              <td>
                <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>
                  Edit
                </button><span> </span>
              
                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>&nbsp;
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
