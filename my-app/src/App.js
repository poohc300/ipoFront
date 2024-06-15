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
      <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '64px' }}>
        <Header />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <SideBar />
          <PageContainer
            sx={{
              maxWidth: '100%', maxHeight: '100%', overflow: 'auto',
              ml: 0, // 왼쪽 여백을 0으로 설정
              mr: 0, // 오른쪽 여백을 0으로 설정 }}
            }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/ipoAnalysis' element={<IpoAnalysis />} />
              <Route path='/marketAnalysis' element={<MarketAnalysis />} />
              <Route path='/issueAnalysis' element={<IssueAnalysis />} />
            </Routes>
          </PageContainer>
        </Box>
      </Box>
    </BrowserRouter >
  );
}

export default App;
