<p align="center">
   <img src="../.github/cover_quiz.svg" alt="Ignite" width="100%"/>
</p>

## Pergunta 01
**Assinale a alternativa incorreta sobre React:**

- [ ] React é uma biblioteca Javascript para criar interfaces de usuário.
- [x] O React pode ser utilizado apenas em interfaces Web, ou seja, não é possível utilizá-lo em outros ambientes como Mobile por exemplo.
- [ ] Next.Js e Remix são exemplos de frameworks que utilizam React.
- [ ] React é uma das bibliotecas mais utilizadas no mercado de trabalho atualmente.

## Pergunta 02
**Assinale a alternativa incorreta sobre SPA e SSR:**

- [ ] SPA e SSR são formas de renderizar o conteúdo, também conhecido como Rendering Patterns.
- [ ] SSR é quando o browser se comunica com o back-end e esse retorna o conteúdo da página pronto (ex: HTML, CSS, JS).
- [ ] SPA é quando o browser se comunica com o back-end e ele retorna os dados necessários para o cliente renderizar a página, normalmente em um formato comum a múltiplas plataformas (ex: JSON). Dessa forma, o mesmo JSON pode ser utilizado para renderizar uma página no browser pelo ReactJS e uma tela nos aplicativos iOS/Android pelo React Native por exemplo.
- [x] No SSR temos back e front-end separados, podendo inclusive ter múltiplos front-ends (web, mobile, etc.). Já no SPA o back-end e o front-end normalmente unidos em uma única aplicação.

## Pergunta 03
**Sobre bundlers e compilers, assinale a alternativa correta:**

- [x] O Babel é um exemplo de compiler parta JS bem famoso e sua principal função é pegar sintaxes mais atuais do JS e converter para um código compatível com os browsers. 
- [ ] Webpack é um exemplo de bundler e sua principal função é pegar o bundle.js gerado pelo React e separar um vários arquivos para o browser conseguir executar.
- [ ] O Vite não utiliza nenhum tipo de bundling ou compiling para executar as aplicações.
- [ ] Os browsers ainda não lançaram o suporte a importação de modules JS. Portanto, o webpack ainda se faz bastante necessário nesse contexto.

## Pergunta 04
**No React, qual o lugar ideal para se importar o css dos componentes?**

- [ ] No `index.html`.
- [x] Nos arquivos jsx.
- [ ] No `package.json`.

## Pergunta 05
**No css, qual uma das formas de resolver o problema de escopo?**

- [x] Com módulos css.
- [ ] Com funções.
- [ ] Com at-rules.

## Pergunta 06
**Qual das opções é a forma correta de nomeação de um componente?**

- [x] Header (com a primeira letra maiúscula).
- [ ] header (com a todas as letras minúsculas).
- [ ] HEADER (com a todas as letras maiúsculas).

## Pergunta 07
**Qual a forma correta de se nomear um arquivo css escopado?**

- [ ] `*.modules.css`
- [ ] `*.escope.css`
- [x] `*.module.css`

## Pergunta 08
**Qual a forma que utilizamos para importar um arquivo de módulo css?**

- [ ] `import './styles.module.css';`
- [x] `import styles from './styles.module.css';`
- [ ]`import {styles} from './styles.module.css';`

## Pergunta 09
**Nas Tags HTML no React, como comumente utilizamos a escrita de atributos?**

- [x] Em camelCase (inicial em minúscula e as composições com a inicial maiúscula).
- [ ] Em lowercase (todas as letras em minúscula).
- [ ] Em kebab-case (letras minúsculas separadas por hífen como no HTML real).

## Pergunta 10
**Utilizae o método `forEach` é a forma mais recomendada para se iterar um array no JSX?**

- [ ] Verdadeiro.
- [x] Falso.

## Pergunta 11
**Das seguintes alternativas, qual é a maneira correta de se usar o `map` para iterar um array e exibir o valor do item em tela? Considere o array de strings, como `['item1', 'item2', 'item3']`.**

- [ ] `array.map(item => {<p>item</p>})`
- [ ] `array.map(item => <p>item</p>)`
- [x] `array.map(item => <p>{item}</p>)`

## Pergunta 12
**Qual a forma correta de se adicionar um valor que existe na variável `novoItem` ao final de um estado chamado `items` no React?**

- [ ] `items.push(novoItem)`.
- [ ] `setItems(novoItem)`.
- [x] `setItems(state => [...state, novoItem])`.

## Pergunta 13
**Sobre programação declarativa x programação imperativa, assinale a alternativa correta?**

- [ ] Programação declarativa é quando a gente diz exatamente as etapas que o nosso código deve seguir, e imperativa é quando programamos um fluxo de condições para um resultado acontecer.
- [ ] No ReactJS é sempre indicado utilizar a programação imperativa.
- [x] Programação declarativa é a forma em que, na maioria das vezes, vamos programar as aplicações React.

## Pergunta 14
**O que significa uma linguagem ter tipagem dinâmica?**

- [x] Ser possível trocar o valor de uma variável para um tipo diferente do valor anterior.
- [ ] Ter um tipo para cada variável.
- [ ] Ter um valor dinâmico para cada variável.

## Pergunta 15
**O que é o TypeScript?**

- [ ] É uma linguagem de programação com tipagem dinâmica.
- [x] É uma linguagem de programação construída em cima do JavaScript, que traz tipagem e novas funcionalidades.
- [ ] É um superset que introduz tipos na linguagem Java.

## Pergunta 16
**O código abaixo é válido no TypeScript?**
```tsx
   interface CreateUser {
      name: string;
      age: number;
   }

   function createUser(user: CreateUser) {
      //...
   }

   createUser('Diego Fernandes');
```

- [ ] Sim, é válido.
- [x] Não, não é válido.

## Pergunta 17
**Para que serve o `generic` no TypeScript?**

- [ ] É uma forma de criar todas as funções com um tipagem genérica.
- [ ] É uma forma de adicionar uma tipagem à uma callback.
- [x] É uma forma de enviar tipos como parâmetros.
