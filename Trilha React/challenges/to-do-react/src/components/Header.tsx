import { usetheme } from '../Hooks/useTheme';
import '../styles/header.scss';


export function Header() {
  const { theme, toggleTheme } = usetheme();
  return (
    <main className={`header-main ${theme}`}>
      <header className={`header ${theme}`}>
        <div>
          <img src="/logo.svg" alt="to.do" />
        </div>

        <input onClick={toggleTheme} type="checkbox" id="theme-switcher" />
       
        <article id="app-container">
          <div className="theme-switcher-area">
            <label htmlFor="theme-switcher" className="theme-switcher-button">
            </label>
          </div>

        </article>


      </header>
    </main>




  )
}