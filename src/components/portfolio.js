import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../styles/portfolio.css';

import Header from './header';
import PortfolioItem from './portfolio-item';

import hbgmconfImg from '../media/hb-gm-conf.png';
import twitchDataCollectorImg from '../media/twitch-data-collector.png';
import ahMonitorImg from '../media/ah-monitor.png';
import electronicsStoreImg from '../media/electronics-store.png';

const Portfolio = (props) => {
  return (
    <Grid fluid className="main-container">
      <Row>
        <Col md={6} mdOffset={3}>
          <Header />
          <hr />
          <p className="portfolio-description">I'm Nick!  I like to travel and create things on the web. I like hockey, video games, clean code, and learning new things!</p>
          <h3 className="portfolio-header">Check Out Some of My Projects</h3>
          <PortfolioItem
            title="hb-gm-conf"
            link="hbgmconf.com"
            description="A web application to support the annual Habit Burger General Managers Conference."
            img={hbgmconfImg}
            imgAlt="A portfolio image"
            techList={["React", "Redux", "AWS", "HTML", "CSS"]}
            githubUrl="https://github.com/nickrepetti/hb-gm-conf" />
          <PortfolioItem
            title="twitch-data-collector"
            description="A serverless Node.js application that collects data from the Twitch API. Analysis is run to help streamers build up their viewer base.  Currently housed on AWS."
            img={twitchDataCollectorImg}
            imgAlt="A portfolio image"
            techList={["Node.js", "AWS", "PostgreSQL", "Serverless"]}
            githubUrl="https://github.com/nickrepetti/twitch-data-collector" />
          <PortfolioItem
            title="ah-monitor"
            description="This application polls the World of Warcraft auction house and collects the data for the current auctions.  Will send a text message to notify when a specific auction falls below a threshold price."
            img={ahMonitorImg}
            imgAlt="A portfolio image"
            techList={["Java", "MySQL"]}
            githubUrl="https://github.com/nickrepetti/ah-monitor" />
          <PortfolioItem
            title="electronics-store"
            description="A Spring/AngularJS bare-bones e-commerce web application."
            img={electronicsStoreImg}
            imgAlt="A portfolio image"
            techList={["Java", "Spring Framework", "Angular 1", "H2 Database", "HTML", "CSS"]}
            githubUrl="https://github.com/nickrepetti/electronics-store" />
        </Col>
      </Row>
    </Grid>
  );
}

export default Portfolio;

