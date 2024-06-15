import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Home from './Pages/Home/index';
import IpoAnalysis from './Pages/IpoAnalysis/index';
import MarketAnalysis from './Pages/MarketAnalysis';
import IssueAnalysis from './Pages/IssueAnalysis';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/ipoAnalysis' element={<IpoAnalysis />} />
        <Route path='/marketAnalysis' element={<MarketAnalysis />} />
        <Route path='/issueAnalysis' element={<IssueAnalysis />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
