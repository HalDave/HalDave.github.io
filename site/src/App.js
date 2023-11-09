import './App.css';
import TopBar from './UI/TopBar';
import Sidebar from './UI/SideBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useThemeDetector } from './Services/ThemeDetector';

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
      <ThemeProvider theme={isDarkTheme ? darkTheme: lightTheme}>
        <CssBaseline />
        <TopBar />
        <Sidebar />
      </ThemeProvider>
    </div>
  );
}

export default App;
