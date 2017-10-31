import React from 'react';

import '../styles/portfolio-item.css';

const PortfolioItem = ({ title, link, description, img, imgAlt, techList, githubUrl }) => {
  return (
    <div className="portfolio-item">
      <hr />
      <h1 className="portfolio-item__title">{title}</h1>
      {link &&
        <a href={link} className="portfolio-item__link" target="_blank">{link}</a>
      }
      <p className="portfolio-item__description">{description}</p>
      <img className="portfolio-item__image" src={img} alt={imgAlt} />
      <ul className="portfolio-item__tech-list">
        {techList.map((tech) => { return <li key={tech}>{tech}</li>; })}
      </ul>
      <a className="githubLink" href={githubUrl} target="_blank">
        View on GitHub
      </a>
    </div>
  );
};

export default PortfolioItem;

