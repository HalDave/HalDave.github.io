import './App.css';
import TopBar from './UI/TopBar';
import Sidebar from './UI/SideBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useThemeDetector } from './Services/ThemeDetector';
import Dashboard from './Pages/Dashboard';
import Work from './Pages/Work';
import Hobbies from './Pages/Hobbies';
import About from './Pages/About';
import { Routes, Route} from "react-router-dom"
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const isDarkTheme = useThemeDetector();
  return (
    <div className="App">

      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <TopBar/>
        <Sidebar />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="work" element={<Work />} />
            <Route path="hobbies" element={<Hobbies />} />
            <Route path="about" element={<About />} />
          </Routes>
        </ContentContainer>
      </ThemeProvider>

    </div>
  );
}

export default App;

const ContentContainer = styled(Box)`
  margin-left: 240px;
  margin-top: 64px;`
