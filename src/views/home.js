import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import GalleryCard3 from '../components/gallery-card3'
import Question from '../components/question'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>ArteLocal</title>
        <meta property="og:title" content="ArteLocal" />
      </Helmet>
      <div className="home-header">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <span className="home-logo">ARTELOCAL</span>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <span>Home</span>
              <span className="home-nav2">Sobre</span>
              <span className="home-nav3">Produtos</span>
              <span className="home-nav4">Artistas</span>
              <span className="home-nav5">Contato</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login button">Login</button>
              <button className="home-register button">Registre-se</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <span className="home-logo1">ARTELOCAL</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav11">Home</span>
                <span className="home-nav21">About</span>
                <span className="home-nav31">Products</span>
                <span className="home-nav41">Artists</span>
                <span className="home-nav51">Contact</span>
              </nav>
              <div className="home-buttons1">
                <button className="home-login1 button">Login</button>
                <button className="home-register1 button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              Descubra Arte e Artesanato Local.
            </h1>
            <span className="home-hero-sub-heading">
              <br className="home-text"></br>
              <br className="home-text01"></br>
              <span className="home-text02">
                ArteLocal: Promovendo Artistas e Produtores Locais.
              </span>
            </span>
            <div className="home-btn-group">
              <button className="home-hero-button1 button">Comece Agora</button>
              <button className="home-hero-button2 button">Saiba Mais →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container02">
            <span className="home-text03 sectionTitle">
              <span>DETALHES</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Promovendo Cultura e Comunidade Locais
            </h2>
            <span className="home-details-sub-heading">
              ArteLocal é uma plataforma que conecta você diretamente a artistas
              talentosos, artesãos e pequenos produtores locais. Ao adquirir
              seus produtos, você não apenas apoia seus meios de subsistência,
              mas também preserva a arte, o artesanato e a cultura locais
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1578926314433-e2789279f4aa?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTIwMDI3OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container03">
              <span className="home-text06 sectionTitle">Recursos</span>
              <h2 className="home-features-heading heading2">
                Descubra Recursos Únicos
              </h2>
              <span className="home-features-sub-heading">
                Explore como o ArteLocal se destaca de outras plataformas de
                comércio eletrônico
              </span>
            </div>
            <div className="home-container04">
              <FeatureCard
                Heading="Mostra de Produtos"
                SubHeading="Exiba uma ampla variedade de produtos de artistas locais, artesãos e pequenos produtores locais."
              ></FeatureCard>
              <FeatureCard
                Heading="Vendas Diretas"
                SubHeading="Permita que artistas, artesãos e pequenos produtores locais vendam seus produtos diretamente aos consumidores, sem intermediários."
              ></FeatureCard>
              <FeatureCard
                Heading="Fomente a Arte e o Artesanato Locais"
                SubHeading="Destaque a arte e o artesanato únicos das comunidades locais, promovendo seu patrimônio cultural."
              ></FeatureCard>
              <FeatureCard
                Heading="Empodere as comunidades locais"
                SubHeading="Apoie artistas locais, artesãos e pequenos produtores locais, oferecendo a eles uma plataforma para exibir e vender seus produtos."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>

      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">
            Descubra Arte e Artesanato Locais
          </h1>
          <span className="home-gallery-sub-heading">
            Explore a ampla gama de produtos criados por talentosos artistas
            locais, artesãos e pequenos produtores locais.
          </span>
          <div className="home-container29">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1588007375169-926788bdab2f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTIwMDI3N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1581345837468-7005611ea4de?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTIwMDI3N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1581345837522-cc359ece37a1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTIwMDI3N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1522839206838-1cfecf32cc72?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTIwMDI3N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1614519679749-3189ec5687d9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTIwMDI3N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1579169233264-1f7866d3a890?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTIwMDI3N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1578321272066-408f68f92cf4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTIwMDI3N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1559431803-2cba2fc893cc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTIwMDI3N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1614519679717-a75c4201c2df?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTIwMDI3N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1581344895000-b5deedbd1660?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTIwMDI3N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1580713863898-935d6eb98cca?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTIwMDI3N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1579762593131-b8945254345c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMTIwMDI3N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Apoie Artistas e Produtores Locais
          </h1>
          <span className="home-banner-sub-heading">
            Explore uma ampla variedade de produtos únicos e artesanais.
          </span>
          <button className="home-banner-button button">
            Navegue pela coleção
          </button>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container30">
              <span className="home-text41 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text44 heading2">Perguntas Frequentes</h2>
              <span className="home-text45">
                Aqui estão algumas das perguntas mais comuns que recebemos.
              </span>
            </div>
            <div className="home-container31">
              <Question
                Answer="ArteLocal é uma plataforma de comércio eletrônico que permite a artistas, artesãos e pequenos produtores locais venderem seus produtos diretamente aos consumidores."
                Question="O que é ArteLocal?"
              ></Question>
              <Question
                Answer="ArteLocal fornece uma plataforma onde artistas, artesãos e pequenos produtores locais podem criar sua própria loja online e exibir seus produtos. Os consumidores podem navegar pelas diferentes lojas e comprar produtos diretamente dos vendedores."
                Question="Como ArteLocal funciona?"
              ></Question>
              <Question
                Answer="ArteLocal está aberto para artistas, artesãos e pequenos produtores locais que desejam vender seus produtos online. Também está disponível para consumidores interessados em apoiar a arte, o artesanato e a cultura locais."
                Question="Quem pode usar ArteLocal?"
              ></Question>
              <Question
                Answer="ArteLocal permite a venda de uma ampla gama de produtos, incluindo obras de arte, artesanato, roupas, acessórios, decoração para casa e muito mais. Desde que os produtos sejam criados por artistas locais, artesãos ou pequenos produtores, eles são elegíveis para venda na plataforma."
                Question="Que tipos de produtos podem ser vendidos no ArteLocal?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-footer1">
          <div className="home-container32">
            <span className="home-logo2">ARTELOCAL</span>
            <nav className="home-nav1 home-nav1">
              <span className="home-nav12">Home</span>
              <span className="home-nav22">Sobre</span>
              <span className="home-nav32">Produtos</span>
              <span className="home-nav42">Artistas</span>
              <span className="home-nav52">Contato</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container33">
            <div className="home-icon-group1">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon14">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
