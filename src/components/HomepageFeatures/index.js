import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Red Scripts',
    Svg: require('@site/static/img/Red.svg').default,
    description: (
      <>
        Red is the prefix and the brand for the Development newest scripts. All of these scripts require the red_lib library.
      </>
    ),
  },
  {
    title: 'Red Library',
    Svg: require('@site/static/img/red_lib.svg').default,
    description: (
      <>
        Red Library is a development library that simplifies the creation of scripts and avoids repeated code which would only lead to badly optimized scripts.<br/>
        <code>One more resource, 20 times less code waste.</code>
      </>
    ),
  },
  {
    title: 'FX Scripts',
    Svg: require('@site/static/img/FX.png').default,
    description: (
      <>
        Legacy scripts built without the red library.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        { typeof Svg === "string" ? <img style={{ borderRadius: "50%" }} src={Svg} /> : <Svg className={styles.featureSvg} role="img" /> }
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
