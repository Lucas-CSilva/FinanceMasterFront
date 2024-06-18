import React, { useState } from "react";
import styles from '../styles/home.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap';


export default function LoginScreen() {

  return (
    <div>                           {/* padding y 5 pixels */}
      <section id="hero" className="py-5 text-center text-dark">
        <Container>
          <h1>Bem-vindo ao Finance Master</h1>
          <p className="lead">Descubra as incríveis funcionalidades do melhor gerenciador de finanças pessoais!</p>
                           {/*secondary, sucess, danger, warning, info*/}
                                        {/*lg = large, sm = small*/}
          {/* <Button variant="primary" size="lg">Comece Agora</Button> */}
        </Container>
      </section>
                                          {/*background light*/}
      <section id="features" className="py-5 bg-light">
        <Container>
                                  {/*margin bottom 4 px*/}
          <h2 className="text-center mb-4">Funcionalidades</h2>
          <Row>
                {/*ocupará 4 unidades de largura em dispositivos de tamanho médio (tamanho de tela de "md")*/}
            <Col md={4} sm={4}>
              <h3>Orçamentos Personalizados</h3>
              <p>Os usuários poderão criar orçamentos personalizados com metas específicas para diferentes categorias de gastos.</p>
            </Col>
            <Col md={4} sm={4} >
              <h3>Rastreamento de Despesas</h3>
              <p>Os usuários poderão registrar todos os seus gastos durante um período definido, categorizando-os para facilitar o acompanhamento.</p>
            </Col>
            <Col md={4} sm={4} >
              <h3>Projeção de Investimentos Pessoais</h3>
              <p>Os usuários poderão definir metas de investimento a longo prazo, com projeções baseadas em sua capacidade de poupança e fontes de renda.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="pricing" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Por quê usar o Finance Master?</h2>
          <Row>
            <Col md={4}>
              <div className="text-center p-4 border rounded">
                <h3>Prevenção de Dívidas</h3>
                <p>Sem um controle adequado das finanças, é fácil acumular dívidas. Controlar seus gastos e receitas ajuda a 
                  evitar o uso excessivo de crédito e empréstimos, mantendo sua saúde financeira em dia.</p>
                {/* <Button variant="primary">Inscreva-se</Button> */}
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4 border rounded">
                <h3>Planejamento para o Futuro</h3>
                <p>Um bom gerenciamento financeiro permite que você faça planos de longo prazo, como a compra de uma casa, 
                  educação dos filhos ou aposentadoria. Saber exatamente quanto você tem e quanto pode poupar é essencial para alcançar esses objetivos.</p>
                {/* <Button variant="primary">Inscreva-se</Button> */}
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4 border rounded">
                <h3>Segurança Financeira</h3>
                <p>Ter um controle preciso das suas finanças garante que você esteja preparado para emergências, como problemas de saúde ou reparos inesperados. 
                  Um fundo de emergência bem administrado pode ser a diferença entre tranquilidade e estresse.</p>
                {/* <Button variant="primary">Inscreva-se</Button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="footer" className="py-5 bg-dark text-white">
        <Container>
          <Row>
            <Col md={4} className="mb-4">
              <h5>Contato</h5>
              <ul className="list-unstyled">
                <li>Email: contato@financemaster.com</li>
                <li>Telefone: (11) 1234-5678</li>
              </ul>
            </Col>
            <Col md={4} className="mb-4">
              <h5>Redes Sociais</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.facebook.com/financemaster" className="text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/financemaster" className="text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/financemaster" className="text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/financemaster" className="text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4} className="mb-4">
              <h5>Sobre Nós</h5>
              <p>
                O Finance Master é um sistema de gerenciamento pessoal de finanças, projetado para ajudar você a controlar seu orçamento, planejar o futuro e alcançar suas metas financeiras.
              </p>
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <Col>
              <p>&copy; 2024 Finance Master. Todos os direitos reservados.</p>
            </Col>
          </Row>
        </Container>
      </section>


      {/* <section id="testimonials" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Depoimentos</h2>
          <Row>
            <Col md={4}>
              <div className="text-center p-4 border rounded">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h5>- João Silva</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4 border rounded">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h5>- Maria Oliveira</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center p-4 border rounded">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <h5>- José Santos</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </div>
  );
}