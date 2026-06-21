Atividade realizada voltada para programação em vetor realizando busca de livros do modulo 3 da pós-graduação em Automação de Testes. 

Objetivo:
Criar um vetor com 5 livros contendo as seguintes propriedades: ID, titulo, tema, preco.
Crie uma função que receba o ID de um livro e retorne o seu título.Caso não possua o ID informado deve retornar mensagem que o ID está inválido.

Exemplo:

**

if (id === undefined || id === null || id <= 0) {
        throw new Error('Id inválido, não possui nenhum livro com o ID informado.');
    }  

**

Entrega:
A entrevista deve ser realizada via Github e o repositório deve ter a classe a pasta src e os testes dos métodos dessa classe dentro da pasta test usando Mocha e Node Assert.



🚀 Instalação

Pré-requisitos

- Node.js 22.x instalado
  
Passos
1. Clonar ou baixar otante

git clone <url-do-repositorio>
cd projeto-livro-aula05

2. Instale as marcações
npm install

Como utilizar 

Teste do executar 
npx mocha ou yarn test

Gerar relátorio 

yarn test 


Estrutura do projeto 
projeto-livro-aula05/
├── mochawesome-report
├── src/
│   └── gestaoLivros.js
├── test/
│   └── gestaoLivros.test.js
├── .mocharc.json
├── package.json
└── README.md

Detalhes dos testes 
- Realizar a busca por cada livro que possui ID válido existente na base.
- Realizar a busca com o ID 0 deve exibir mensagem de erro.
- Realizar a busca po ID vazio deve da mensagem de erro.
- Realizar a busca por ID menor que 0.


Dependências
mocha: framework de testes 11.7.6
mochawesome: mochawesome-report-generator
mochawesome": 7.1.4
mochawesome-report-generator": 6.3.2
rimraf: 6.1.3


Tecnologias usadas
Node.js
ECMAScript Modules (type": "module")
Mocha
Mochawesome
Node Assert

# 🧪 Projeto de Testes Automatizados End-to-End (E2E)

Este projeto contém a suite de testes automatizados desenvolvida como parte do meu Trabalho de Conclusão. A solução foi desenhada para validar de forma contínua a integridade e disponibilidade da aplicação através de testes estruturados, integrando uma esteira moderna de CI/CD.


## 🚀 Tecnologias e Ferramentas

* **Node.js (v24.x):** Ambiente de execução do JavaScript no servidor.
* **Yarn:** Gerenciador de pacotes para controle preciso de dependências e execução de scripts.
* **Mocha:** Framework de testes automatizados para Node.js.
* **Mochawesome:** Gerador de relatórios visuais ricos em HTML e JSON.
* **GitHub Actions (v5):** Plataforma de automação e integração contínua (CI/CD).
* **ECMAScript modules** "type": "module"

---

## ⚙️ Arquitetura da Solução e Conceitos Aplicados

A arquitetura deste projeto priorizou as melhores práticas de mercado em engenharia de qualidade (QA) e DevOps, baseando-se em três pilares:

### 1. Gatilhos Inteligentes de Execução (Triggers)
A esteira do GitHub Actions está configurada para reagir de forma autônoma a diferentes eventos do ciclo de desenvolvimento:
* **Push e Pull Request:** Garante a execução dos testes sempre que um novo código é enviado para as branches principais (`main` ou `master`), validando que nenhuma alteração quebrou o sistema atual (Testes de Regressão).
* **Agendamento Contínuo (Cron Job):** Configurado para rodar automaticamente **de 2 em 2 horas**.
* **Execução Manual (Workflow Dispatch):** Permite disparar toda a suite de testes a qualquer momento diretamente pela interface gráfica do GitHub.

### 2. Consumo Dinâmico de Ambiente (`process.env.BASE_URL`)
Para manter a segurança e a flexibilidade do código, a URL da aplicação não foi fixada (*hardcoded*). O projeto utiliza o conceito de variáveis de ambiente:
* Em ambiente de desenvolvimento (**Local**), os testes buscam o padrão `http://localhost:3000`.
* Na pipeline de **CI/CD**, o GitHub Actions injeta de forma limpa a URL do projeto publicado (`https://jessicaemg.github.io/projeto-livro-aula05`), fazendo com que o código se adapte sozinho ao servidor.

### 3. Publicação e Isolamento de Relatórios (Artifacts)
Toda a configuração de relatórios está centralizada no arquivo `.mocharc.json`, mantendo o código limpo. 
Ao final de cada execução, a pipeline utiliza a biblioteca oficial `actions/upload-artifact@v5` para coletar a pasta gerada pelo Mochawesome. Para evitar conflitos de arquivos duplicados em reexecuções, o nome do artefato é gerado dinamicamente utilizando o identificador de tentativa do GitHub (`relatorio-livros-mocha-${{ github.run_attempt }}`), garantindo o armazenamento seguro por até 30 dias.

---

## 📂 Estrutura Estratégica do Projeto

* `.github/workflows/main.yml`: Configuração centralizada da pipeline, controle de gatilhos e armazenamento no GitHub.
* `.mocharc.json`: Arquivo isolado de configuração do Mocha, responsável por ditar as regras do relatório e o caminho dos testes (`test/**/*.test.js`).
* `package.json`: Gerencia os scripts de atalho do Yarn (`yarn e2e`).

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
Instale o [Node.js](https://nodejs.org/) e o [Yarn](https://yarnpkg.com/) em sua máquina.

### 1. Instalar as dependências do projeto
```bash
yarn install

### 2. Executar os testes localmente 
yarn e2e



