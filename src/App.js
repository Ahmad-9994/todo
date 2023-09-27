
import './App.css';
import BookDetail from './BookDetail';
import List from './List';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';



function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<List />} />
    <Route path='/detail' element={<BookDetail />} />
    
    </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;






