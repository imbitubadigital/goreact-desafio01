import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.scss';

import Header from './components/header/Header';
import Post from './components/cart/Post';

class App extends Component {
  state = {
    titleHeader: 'RocketBook',
    posts: [],
  };

  componentDidMount() {
    this.setState({
      posts: [
        {
          title: 'Porque nós o usamos?',
          hour: 'Há 23 min',
          img: 'https://pickaface.net/gallery/avatar/unr_aluno_171016_2217_zezdk.png',
          content:
            'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero',
        },
        {
          title: 'Onde posso conseguí-lo?',
          hour: 'Há 45 min',
          img: 'https://i.pinimg.com/originals/1b/01/5c/1b015cf06e1b41b9f3305c0b59046e3e.png',
          content:
            'Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do de Finibus Bonorum et Malorum (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, Lorem Ipsum dolor sit amet... vem de uma linha na seção 1.10.32',
        },
        {
          title: 'O que é Lorem Ipsum?',
          hour: 'Há 53 min',
          img: 'https://i.pinimg.com/originals/cc/eb/38/cceb389026830bf994744a1d9f9bad2f.png',
          content:
            'É simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
        },
        {
          title: 'Passagem padrão original de Lorem Ipsum, usada desde o século XVI',
          hour: 'Há 1 hora e 11 min',
          img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvy0371CRlv7x7Okwcpw2_v3DWYVlN5RwSENA1axefD0p_Y5fN',
          content:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
        },
      ],
    });
  }

  listPosts() {
    const { posts } = this.state;
    return posts.map(post => <Post post={post} key={post.title} />);
  }

  // listPosts = () => this.state.posts.map(post => <Post post={post} key={post.title} />);

  render() {
    const { titleHeader } = this.state;
    return (
      <div>
        <Header title={titleHeader} />
        <main className="container">{this.listPosts()}</main>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
