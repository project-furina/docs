import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Get Started Quickly',
    description: (
      <>
        Clear onboarding steps to help you navigate our documentation and services with ease.
      </>
    ),
  },
  {
    title: 'Guides & FAQs',
    description: (
      <>
        Find answers to common questions and step-by-step guides to solve issues fast.
      </>
    ),
  },
  {
    title: 'Stay Updated',
    description: (
      <>
        Learn about the latest changes, feature updates, and platform improvements in one place.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
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
