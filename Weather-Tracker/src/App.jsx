import ThemeProvider from './contexts/ThemeProvider';
import Home from './components/Home';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
