import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

const CardGrid = ({ data }) => {
  return (
    <div className="row">
      {data.map((card, index) => (
        <div key={index} className="col col--4 margin-bottom--lg">
          <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="card__header">
              <Heading as="h3">{card.title}</Heading>
            </div>
            <div className="card__body" style={{ flex: 1 }}>
              <ul className="clean-list" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                {card.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="margin-bottom--sm">
                    <Link
                      to={link.URL}
                      className="button button--link button--block"
                      style={{
                        whiteSpace: 'normal',
                        height: 'auto',
                        lineHeight: '1.5',
                        padding: '0.5rem',
                        textAlign: 'left',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <span style={{ 
                        display: 'inline-block', 
                        wordBreak: 'break-word',
                        marginRight: '0.5rem'
                      }}>
                        {link.link_text}
                      </span>
                      {link.type && (
                        <span className="badge badge--secondary">
                          {(link.type === "PDF" || link.type === "HTML") ? link.type : ""}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
