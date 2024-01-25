
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed } from './components';




function App() {
  
  return (
   <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail/>} />
        <Route path='/channel/:id' element={<ChannelDetail/>} />
        <Route path='/search/:searchTerm' element={<SearchFeed/>} />
      </Routes>
    </Box>
   </BrowserRouter>
  );
}

export default App;
