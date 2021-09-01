import { Counter } from './components/Counter';
import { RepositpryList } from './components/RepositoryList'
import './styles/globals.scss'

export function App() {
    return (
        <>
            <RepositpryList />
            <Counter />
        </>
    );
}