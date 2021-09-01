
import { render } from 'react-dom'
import { App } from './App' // Não é necessário colocar a extensão graças a configuração (resolve) do webpack

render(<App />, document.getElementById('root'))