import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Mix',
    description: (
      <>
        Our cocktail menu is designed for simplicity – easy to mix and enjoy without the fuss.
        Every drink is crafted with ease to bring you the best flavors.
      </>
    ),
  },
  {
    title: 'Focus on the Flavors',
    description: (
      <>
        We believe in letting the flavors speak for themselves. Dive into each drink's unique taste 
        while we handle the details.
      </>
    ),
  },
  {
    title: 'Crafted for You',
    description: (
      <>
        Whether you like your drinks smooth, bold, or refreshing, our menu is made to suit every palate.
        Your perfect cocktail is just a mix away.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Heading as="h3">{title}</Heading>
      </div>
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
