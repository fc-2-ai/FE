import { BrowserRouter as Router, Routes } from 'react-router-dom';
import GlobalStyles from '@/styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes></Routes>
    </Router>
  );
}

export default App;
