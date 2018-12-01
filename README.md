# Desafio 01 - GoReact

Conforme proposto no desafio, devemos configurar uma estrutura ReactJS do zero com Babel, Webpack e Webpack Dev Server. Além disso, devemos utilize as ferramentas ESLint, EditorConfig e Prettier durante o desenvolvimento desse projeto.

![Feed](/public/assets/desafio.png)

# Objetivo

Desenvolver um feed de posts estilo Facebook. Criando um layout tentando chegar o mais próximo possível da imagem acima:

# Regras

-   O Header deve ser um componente separado;
-   O Post deve ser um componente separado;
-   O header do post aonde estão o avatar, nome e tempo do post devem estar em um componente separado chamado PostHeader;
-   Os posts devem estar armazenado no estado (state) do arquivo principal App.js;
-   Você deve passar a informação dos posts como uma única propriedade para o componente de Post quando realizar o map no state de posts: <Post data={post} />;
