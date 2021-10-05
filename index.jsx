// Ramon e Gustavo
function Sony() {
    return (
      <div className="sony">
        <img className="logoSony" src="./img/logoSony.png" alt="" srcSet="" />
      </div>
    )
  }
  function Cabecalho() {
      return(
  <nav className="navbar navbar-expand-lg navbar">
    <div className="container-fluid bg-ligth">
      <a className="navbar-brand" href="#">
        <img className="R-logo" src="https://i.pinimg.com/originals/6b/29/c6/6b29c65d5c07bc3efa1db830151d753e.png" alt="" srcSet="" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle container-fluid" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Jogos
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li>
              <div className="d-flex row teste">
              <Consoles />
              <Hr />
              <Links/>
              </div>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Hardware
            </a>
            <ul className="dropdown-menu R-hardware" aria-labelledby="navbarScrollingDropdown">
            <div className="d-flex row teste">
              <Consoles2 />
              <Hr />
              <Links2/>
              </div>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Serviços
            </a>
            <ul className="dropdown-menu R-servicos" aria-labelledby="navbarScrollingDropdown">
            <div className="d-flex row teste">
              <Consoles3 />
              <Hr />
              <Links3/>
              </div>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Notícias
            </a>
            <ul className="dropdown-menu R-noticias" aria-labelledby="navbarScrollingDropdown">
            <div className="d-flex row teste">
              <Consoles4 />
              <Hr />
              <Links4/>
              </div>
            </ul>
          </li>
          <li className="nav-item dropdown ">
            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Loja
            </a>
            <ul className="dropdown-menu R-loja" aria-labelledby="navbarScrollingDropdown">
            <div className="d-flex row teste">
              <Consoles5 />
              <Hr />
              <Links5/>
              </div>
            </ul>
          </li>
          <li className="nav-item dropdown ">
            <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Suporte
            </a>
            <ul className="dropdown-menu R-suporte" aria-labelledby="navbarScrollingDropdown">
            <div className="d-flex row teste">
              <Consoles6 />
              </div>
            </ul>
          </li>
        </ul>
        <form className="d-flex align-items-center">
          <button className="btn btn-header rounded-pill m-4" type="submit">Iniciar sessão</button>
          <a href=""><i className="bi bi-search text-black"></i></a>
        </form>
      </div>
    </div>
  </nav>
      )
      $(".nav-item dropdown").click(function(){
        $(".dropdown-menu").fadeIn("slow");
      });
  } 
  
  //Funções complementares
  
  function Hr() {
    return(
      <hr className="hr" />
    )
  }
  
  function Links() {
    return(
      <div>
    <ul className="ul">
      <li className="links">PlayStation Indies</li>
      <li className="links">Jogos para PS4 no PS5</li>
      <li className="links">PlayStation Hits</li>
      <li className="links">Ofertas e promoções</li>
    </ul>
  </div>
    )
  
  }
  
  function Links2() {
    return(
      <div>
    <ul className="ul">
      <li className="links li2">Controle sem fio DualSense</li>
      <li className="links li2">Headset Pulse 3D</li>
      <li className="links li2">Acessórios para o PS5</li>
      <li className="links li2">controle sem fio DUALSHOCK 4</li>
      <li className="links li2">Acessórios para o PS4</li>
    </ul>
  </div>
    )
  
  }
  
  function Links3() {
    return(
      <div>
    <ul className="ul">
      <li className="links li3">Entretenimento no PS5</li>
      <li className="links li3">Entretenimento no PS4</li>
    </ul>
  </div>
    )
  
  }
  
  function Links4() {
    return(
      <div>
    <ul className="ul">
      <li className="links li4">Central de competições</li>
    </ul>
  </div>
    )
  
  }
  function Links5() {
    return(
      <div>
    <ul className="ul">
      <li className="links li5">Comprar Jogos PS5</li>
      <li className="links li5">Comprar Jogos PS4</li>
      <li className="links li5">Comprar PlayStation Plus</li>
      <li className="links li5">Comprar PS4</li>
      <li className="links li5">Comprar PS VR</li>
    </ul>
  </div>
    )
  
  }
  
  function IconesGames(props) {
    return (
      <div className="" key={props.id}>
          <img className="R-icones" src={"img/"+ props.img} alt="" />
          <p className="">{props.texto}</p>
      </div>
  )  
                 }
                 
  function Consoles () {
  
  const conteudos = [ 
    {
        id: 1,
        img: 'PS5.png',
        texto: 'PS5'
    },
    {
        id: 2,
        img: 'PS4.png',
        texto: 'PS4'
    },
    {
        id: 3,
        img: 'PS VR.png',
        texto: 'PS VR'
    },
    {
      id: 4,
      img: 'PS PLUS.png',
      texto: 'PS Plus',
  
  },
  {
    id: 5,
    img: 'compras.png',
    texto: 'Comprar Jogos',
  
  },
  ]
  return (
  conteudos.map(conteudo=>(
  <div className="col-2">
  <IconesGames img={conteudo.img} texto={conteudo.texto}/>
  </div>
  ))
  )
  }
  
  function Consoles2 () {
                   
    const conteudos = [ 
     {
         id: 1,
         img: 'PS5.png',
         texto: 'PS5'
     },
     {
         id: 2,
         img: 'PS4.png',
         texto: 'PS4'
     },
     {
         id: 3,
         img: 'PS4pro.png',
         texto: 'PS4 Pro'
     },
     {
       id: 4,
       img: 'PS VR.png',
       texto: 'PS VR',
  
   }
  ]
  return (
  conteudos.map(conteudo=>(
  <div className="col-2">
   <IconesGames img={conteudo.img} texto={conteudo.texto}/>
  </div>
  ))
  )
  }
  
  function Consoles3 () {
                   
    const conteudos = [ 
     {
         id: 1,
         img: 'PS PLUS.png',
         texto: 'PS Plus'
     }
  ]
  return (
  conteudos.map(conteudo=>(
  <div className="col-2">
   <IconesGames img={conteudo.img} texto={conteudo.texto}/>
  </div>
  ))
  )
  }
  
  function Consoles4 () {
                   
    const conteudos = [ 
     {
         id: 1,
         img: 'Noticia1.png',
         texto: 'PS Blog'
     },
     {
         id: 2,
         img: 'Noticia2.png',
         texto: 'Este mês no PlayStation'
     }
  ]
  return (
  conteudos.map(conteudo=>(
  <div className="col-2">
   <IconesGames img={conteudo.img} texto={conteudo.texto}/>
  </div>
  ))
  )
  }
  
  function Consoles5 () {
                   
    const conteudos = [ 
     {
         id: 1,
         img: 'compras.png',
         texto: 'PS Store'
     },
  ]
  return (
  conteudos.map(conteudo=>(
  <div className="col-2">
   <IconesGames img={conteudo.img} texto={conteudo.texto}/>
  </div>
  ))
  )
  }
  
  function Consoles6 () {
                   
    const conteudos = [ 
     {
         id: 1,
         img: 'Servico1.png',
         texto: 'Suporte'
     },
     {
         id: 2,
         img: 'Servico2.png',
         texto: 'Status da PSN'
     }
  ]
  return (
  conteudos.map(conteudo=>(
  <div className="col-2">
   <IconesGames img={conteudo.img} texto={conteudo.texto}/>
  </div>
  ))
  )
  }

  function PlayPlus() {
    return(
        <div class="row align-items-center bg-Plus">
          <div className="col-6 plau">
            <div className="centralizar">
            <img className="PlusPlus" src="./img/Playplus2.png"  alt="" />
            <p className="playplay">Melhore sua experiência PlayStation com o modo multijogador online, jogos mensais, descontos exclusivos e muito mais.</p>
            <button class="btn btn-plus rounded-pill m-4">Explore o PlayStation Plus 
            </button>
            </div>
          </div>
          <div class="col-6">
            <img className="Hitman d-block" src="./img/PlayPlus.png" alt=""/>
          </div>
        </div>
        
    )
  }
  

    
      // Kaique e Brenda
      function Carrossel(){
        return (
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active k-death">
                    <div className="row align-items-end">
                        <div className="col-4 k-margin">
                            <img src="img/death-logo.png" />
                            <h2>O futuro está nas suas mãos</h2>
                            <p>O lendário criador de jogos, Hideo Kojima, apresenta uma experiência que desafia o gênero, agora expandida e remasterizada para o PS5.</p>
                            <a href="#" class="btn k-btn-laranja">Comprar agora</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item k-kena">
                    <div className="row">
                        <div className="col-4 m-5">
                            <img src="img/kena-logo.png" />
                            <h2>Conheça os Rot, os ajudantes fofinhos da Kena</h2>
                            <p>Descubra alguns dos segredos que envolvem as curiosas criaturinhas do novo jogo de ação e aventura mágico da Ember Labs.</p>
                            <a href="#" class="btn k-btn-laranja">Comprar agora</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        );
    }

    function Galeria(){
        const imagens = [
            {
                id: 1,
                img: "img/fifa-icon.jpg"
            },
            {
                id: 2,
                img: "img/playstation-icon.jpg"
            },
            {
                id: 3,
                img: "img/diablo-icon.jpg"
            },
            {
                id: 4,
                img: "img/death-icon.jpg"
            },
            {
                id: 5,
                img: "img/deathloop-icon.jpg"
            }
        ];
        return (
            imagens.map(imagem=>(
                <div className="col-6 col-md-2" key={imagem.id}>
                    <img className="k-icone-galeria" src={imagem.img} />
                </div>
            ))
        )
    }

    function Main(){
        return (
            <div>
                <Carrossel />
                <div className="container">
                    <div className="row my-5 justify-content-between">
                            <Galeria />
                    </div>
                </div>
                <Banner2 />
                <FooterBanner3 />
                <Banner3 />
                <div>
                  <div className="g-brenda">
                    <h2>Explore o PlayStation®4</h2>
                    <p className="g-center">Jogos incríveis e diversão sem parar. Nunca houve época melhor para se divertir com o PS4.</p>
                  </div>
                  
                  <div className="row g-brenda">
                    <Card />
                  </div>
                  
                  <PlayPlus/>
                </div>
                
            </div>
        );
    }
    
    function Banner2(){
      return(
        <div className="jp-bannerbg container-fluid">
          <div className="jp-container">
            <div className="row">
              <div className="jp-textos col-6"> 
                <h1 className="jp-mtext"><span className="jp-h1text">ESTE MÊS</span><br />NO  PLAYSTATION®</h1>
                <p className="jp-texto2">Confira os maiores lançamentos deste mês, além de recursos dedicados, guias e muito mais.</p>
                <button className="jp-botão"><span className="jp-negrito">Saiba Mais</span></button>
              </div>
            </div>
            <FooterBanner2 />
          </div>
          
         </div>  
      )
    }
    function CardBanner(props) {
            return (
                <div className="jp-cardsjão">
                    <img src={props.image} className="jp-imgborder card-img-top" alt={props.title} />
                    <div className="card-body">
                        <h5 className="jp-card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                    </div>
                </div>
            )
        }
        function ImagensBanner2(){
            const ImagensBanner2 = [
                {
                    id: 101,
                    Image:"https://gmedia.playstation.com/is/image/SIEPDC/tmop-horizon-zero-dawn-editorial-image-block-01-en-23aug21?$1600px--t$",
                    Title: 'Horizon Zero Dawn: A história até agora',
                },
                {
                    id: 202,
                    Image:"https://gmedia.playstation.com/is/image/SIEPDC/tmop-fifa-22-editorial-image-block-01-en-23aug21?$1600px--t$",
                    Title:'Como FIFA 22 aproveita os recursos inovadores do PS5',
                },
                {
                    id: 303,
                    Image:"https://gmedia.playstation.com/is/image/SIEPDC/tmop-deathloop-editorial-image-block-01-en-23aug21?$1600px--t$",
                    Title:"Como DEATHLOOP utiliza o poder do PS5",
                }
            ]
            return(
                ImagensBanner2.map(Produto_row=>(
                    <div id="tamanho" className="col-3 mx-3 text-center justify-content-center jp-margin">
                        <CardBanner title={Produto_row.Title} image={Produto_row.Image} />
                    </div>    
                ))
            )
        }




        function FooterBanner2(){
            return(
            <div className="jp-jão texto3">
                <div className="container">
                    <div className="cardsjão row">
                        <ImagensBanner2 />
                    </div>
                </div>
            </div>
            );
        }
        function FooterBanner3(){
            return(
            <div className="container-fluid jp-gui jp-texto1" />
            );
          }

          function Card() {
            const cardMain = [
                {
                    id: 1,
                    padding: 'p-2',
                    img: 'img/ps4 (2).png',
                    title: 'PlayStation 4',
                    description: 'Os jogos mais incríveis estão no PS4, com 1TB de armazenamento.'
                },
                {
                    id: 2,
                    padding: "",
                    img: 'img/vr.png',
                    title: 'PlayStation VR',
                    description: 'Mais de 500 jogos e experiências, e subindo. Conheça todos eles.'
                },
                {
                    id: 3,
                    padding: 'p-2',
                    img: 'img/controle.png',
                    title: 'Acessórios',
                    description: 'Aprimore sua experiência PS4 com vários acessórios oficiais.'
                },
                
            ]
            return ( 
                cardMain.map(cardsMain=>(
                    <div className="card col-4 m-2" key={cardsMain.id}>
                        <img src={cardsMain.img} className="card-img-top" alt={cardsMain.title} title={cardsMain.title} />
                        <div className="card-body">
                            <h5 className="card-title">{cardsMain.title}</h5>
                            <p className={"card-text " + cardsMain.padding}>{cardsMain.description}</p>
                            <a href={"produtos.html?idproduto=" + cardsMain.id} className="k-btn btn-primary">Saiba mais</a>
                        </div>
                    </div>                        
                ))
            )
        }



    function Template() {
      return(
          <div>
              <Sony />
              <Cabecalho />
              <Main />
          </div>
      )
  }

    

    let template = <Template/>;
    ReactDOM.render(
        template,
        document.getElementById('root')
        
    )

      //ramon e gustavo














      //Pedro e joao
      function Banner3(){
        return(
        <div>
          <div className="jp-banner3bg">
            <div className="jp-container2">
              <div className="row">
                <div className="col-6 jp-espaço">
                  <img className="jp-logo" src="img/horizonlogo1.png" />
                  <h1 className="jp-texto-branco">Disponível em 18 de fevereiro<br/> de 2022</h1>
                  <p className="jp-texto-branco">Junte-se à Aloy para desbravar o Oeste Proibido, uma  área majestosa e <br />perigosa que esconde novas ameaças misteriosas.</p>
                  <button className="jp-botão"><span className="jp-negrito">Explore a franquia Horizon</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
    
    
      


