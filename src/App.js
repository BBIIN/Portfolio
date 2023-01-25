import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import MainPage from './page';
import GlobalStyles from './style/global';
import { theme } from './style/theme';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <MainPage/>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
