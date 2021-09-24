import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import './styles/global.scss'
import { ThemeContextProvider } from './contexts/ThemeContext';


export function App() {
  return (
    <>
      <ThemeContextProvider>
        <Header />
        <TaskList />
      </ThemeContextProvider>
    </>
  )
}