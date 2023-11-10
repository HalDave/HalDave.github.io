import * as React from 'react';
import './App.css';
import TopBar from './UI/TopBar';
import Sidebar from './UI/SideBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useThemeDetector } from './Services/ThemeDetector';
import Dashboard from './Content/Dashboard';
import Work from './Content/Work';
import Hobbies from './Content/Hobbies';
import About from './Content/About';
import { Routes, Route} from "react-router-dom"
import styled from '@emotion/styled';
import useScreenSize from './Services/ScreenSize';
import BottomBar from './UI/BottomBar';

const minScreenWidth = 600;

interface ContentContainerProps {
  $isMobile?: boolean;
}

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
  const screenSize = useScreenSize();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = screenSize.width < minScreenWidth;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="App">
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <CssBaseline />
        <TopBar onClick={handleDrawerToggle}/>
        <Sidebar mobileOpen={mobileOpen} isMobile={isMobile} onClose={handleDrawerToggle}/>
        <ContentContainer $isMobile={isMobile}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="work" element={<Work />} />
            <Route path="hobbies" element={<Hobbies />} />
            <Route path="about" element={<About />} />
          </Routes>
        </ContentContainer>
        <BottomBar />
      </ThemeProvider>
    </div>
  );
}

export default App;

const ContentContainer = styled.div<ContentContainerProps>`
  margin-top: 64px;
  ${({ $isMobile }) => !$isMobile ? `
    margin-left: 240px;
  ` : ''}
`;
