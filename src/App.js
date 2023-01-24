import { ThemeProvider } from 'styled-components';
import './App.css';
import MainPage from './page';
import GlobalStyles from './style/global';
import { theme } from './style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <MainPage/>
    </ThemeProvider>
  );
}

export default App;
