// import React, { useState } from 'react';
// import "./list.css";
// import BookDetail from './BookDetail';

// const ITEMS_PER_PAGE = 3;

// const List = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [list, setList] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   function handleTitleChange(e) {
//     setTitle(e.target.value);
//   }

//   function handleDescriptionChange(e) {
//     setDescription(e.target.value);
//   }

//   function listdata() {
//     if (title.trim() === "" || description.trim() === "") {
//       alert("Please enter both book title and description.");
//       return;
//     }

//     setList([...list, { title, description }]);
//     alert("Book is added successfully.");
//     setTitle("");
//     setDescription("");
//   }

//   function clearall() {
//     setList([]);
//     setCurrentPage(1);
//   }

//   const totalPages = Math.ceil(list.length / ITEMS_PER_PAGE);

//   const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
//   const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (index) => setCurrentPage(index + 1);

//   function deleteitem(index) {
//     const updatedList = [...list];
//     updatedList.splice(indexOfFirstItem + index, 1);
//     setList(updatedList);
//   }

//   return (
//     <div className='todo-main'>
//       <h1>Add Book</h1>
//       <label>Add book title</label>
//       <input type='text' value={title} onChange={handleTitleChange} />
//       <label>Add book description</label>
//       <input type='text' value={description} onChange={handleDescriptionChange} />

//       <button onClick={listdata}>ADD</button>

//       {/* Displaying the list data in a table */}
//       <table>
//         <thead>
//           <tr>
//             <th>Index</th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentItems.map((book, index) => (
//             <tr key={index}>
//               <td>{indexOfFirstItem + index + 1}</td>
//               <td>{book.title}</td>
//               <td>{book.description}</td>
//               <td>
//                 <button onClick={() => deleteitem(index)}> X </button>
                
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {list.length !== 0 && (
//         <button onClick={clearall}>Clear All</button>
//       )}

//       {/* Pagination */}
//       <div className="pagination">
//         {Array.from({ length: totalPages }).map((_, index) => (
//           <button key={index} onClick={() => paginate(index)}>
//             {index + 1}
//           </button>
//         ))}
//       </div>

    
//     </div>
//   );
// }

// export default List;


import React, { useState } from 'react';
import "./list.css";
import BookDetail from './BookDetail';

const ITEMS_PER_PAGE = 3;

const List = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function listdata() {
    if (title.trim() === "" || description.trim() === "") {
      alert("Please enter both book title and description.");
      return;
    }

    setList([...list, { title, description }]);
    alert("Book is added successfully.");
    setTitle("");
    setDescription("");
  }

  function clearall() {
    setList([]);
    setCurrentPage(1);
  }

  // Calculate total pages based on the filteredBooks array
  const filteredBooks = list.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  // Slice the filteredBooks array based on the current page
  const currentItems = filteredBooks.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (index) => setCurrentPage(index + 1);

  function deleteitem(index) {
    const updatedList = [...list];
    updatedList.splice(indexOfFirstItem + index, 1);
    setList(updatedList);
  }

  // Function to handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset the current page when searching
  };

  return (
    <div className='todo-main'>

    <div style={{display:"flex",justifyContent:"space-between"}}>
      <h1>Add Book</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div></div>
      <label>Add book title</label>
      <input type='text' value={title} onChange={handleTitleChange} />
      <label>Add book description</label>
      <input type='text' value={description} onChange={handleDescriptionChange} />

      <button onClick={listdata}>ADD</button>

      {/* Displaying the list data in a table */}
      
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((book, index) => (
            <tr key={index}>
              <td>{indexOfFirstItem + index + 1}</td>
              <td>{book.title}</td>
              <td>{book.description}</td>
              <td>
                <button onClick={() => deleteitem(index)}> X </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {list.length !== 0 && (
        <button onClick={clearall}>Clear All</button>
      )}

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => paginate(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default List;

