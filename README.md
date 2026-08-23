# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Planej.ai

  > Um educador financeiro digital para transformar planos em decisões mais conscientes.

  Este projeto nasceu como a aplicação prática de tudo que aprendi no curso. A ideia foi sair dos exercícios isolados e construir uma experiência completa: uma pessoa informa sua realidade financeira, define uma meta e recebe uma análise personalizada para entender o próximo passo.

  ## O que o curso me ensinou

  Cada parte da aplicação representa uma habilidade que fui desenvolvendo durante o curso:

  - **React**: componentização, composição de telas e atualização da interface com estado.
  - **TypeScript**: definição de tipos para os dados da simulação e contratos mais seguros entre componentes.
  - **React Router**: navegação entre formulário, resultado e histórico sem perder o fluxo da aplicação.
  - **Hooks**: criação e uso de hooks para encapsular persistência local, tema e integração com a API.
  - **Integração com API**: envio de um prompt estruturado para o Gemini e tratamento do diagnóstico retornado em JSON.
  - **Persistência no navegador**: armazenamento, leitura, atualização e exclusão das simulações com `localStorage`.
  - **Tailwind CSS**: construção de uma interface responsiva, organizada e consistente.
  - **Acessibilidade e experiência**: labels, estados vazios, feedback de carregamento, mensagens de erro e navegação clara.
  - **Qualidade de código**: tipagem, ESLint, Prettier e uma estrutura de pastas separada por responsabilidade.

  O mais importante foi aprender que uma aplicação não é apenas uma tela bonita. Ela precisa organizar dados, lidar com estados diferentes, conversar com serviços externos e continuar compreensível quando crescer.

  ## Como funciona

  1. A pessoa responde às seis etapas do formulário: renda, custos fixos, dívidas, nome da meta, valor e prazo.
  2. Os dados são salvos localmente com um identificador único e a aplicação abre a tela de resultado.
  3. O app calcula a economia mensal disponível e envia os dados para a API do Gemini.
  4. O diagnóstico aparece dividido em viabilidade, diagnóstico financeiro, sugestões, renda extra, investimento e motivação.
  5. A resposta da API é salva junto da simulação, evitando perder o histórico.
  6. No histórico, é possível revisar os dados, abrir o resultado novamente ou excluir uma simulação.

  ## Tecnologias

  - React 19
  - TypeScript
  - Vite
  - React Router
  - Tailwind CSS
  - Lucide React
  - Gemini API
  - ESLint e Prettier

  ## Estrutura do projeto

  ```text
  src/
  ├── components/     Componentes reutilizáveis e componentes de cada funcionalidade
  ├── context/        Contexto global do tema
  ├── data/           Tipos, etapas do formulário e construção do prompt
  ├── hooks/          Persistência local, tema e diagnóstico com IA
  ├── pages/          Telas do formulário, resultado e histórico
  ├── services/       Comunicação com a API do Gemini
  ├── styles/         Tokens e variações de tema
  └── utils/          Cálculos financeiros e formatação
  ```

  ## Como executar

  Pré-requisitos: Node.js e npm instalados.

  ```bash
  npm install
  npm run dev
  ```

  Para gerar a versão de produção:

  ```bash
  npm run build
  npm run preview
  ```

  ## Configuração da API

  Crie um arquivo `.env` na raiz do projeto e informe sua chave do Gemini:

  ```env
  VITE_GEMINI_API_KEY=sua_chave_aqui
  ```

  Não compartilhe essa chave publicamente. Como ela é usada no frontend, este projeto é uma aplicação educacional e de demonstração; em um cenário de produção, a integração deveria passar por um backend ou função serverless.

  ## Scripts disponíveis

  | Comando | O que faz |
  | --- | --- |
  | `npm run dev` | Inicia o servidor de desenvolvimento |
  | `npm run build` | Verifica os tipos e cria o build de produção |
  | `npm run lint` | Executa o ESLint |
  | `npm run format` | Formata os arquivos com Prettier |
  | `npm run format:check` | Verifica a formatação |
  | `npm run preview` | Abre uma prévia do build |

  ## Meu aprendizado em prática

  Construir o Planej.ai me ensinou a conectar as peças: pensar na jornada do usuário antes do componente, modelar os dados antes de renderizar a tela, separar responsabilidades e tratar tanto o caminho feliz quanto os estados de carregamento, erro e ausência de dados.

  Este projeto é o registro desse processo. Mais do que uma simulação financeira, ele mostra como o conhecimento adquirido no curso pode virar uma aplicação útil, tipada, persistente e integrada com inteligência artificial.
