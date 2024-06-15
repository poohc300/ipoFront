import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Home from './Pages/Home/index';
import IpoAnalysis from './Pages/IpoAnalysis/index';
import MarketAnalysis from './Pages/MarketAnalysis';
import IssueAnalysis from './Pages/IssueAnalysis';
import PageContainer from './Components/PageContainer';
import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <PageContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/ipoAnalysis' element={<IpoAnalysis />} />
              <Route path='/marketAnalysis' element={<MarketAnalysis />} />
              <Route path='/issueAnalysis' element={<IssueAnalysis />} />
            </Routes>
          </PageContainer>
        </Box>

      </Box>
    </BrowserRouter>
  );
}

export default App;
