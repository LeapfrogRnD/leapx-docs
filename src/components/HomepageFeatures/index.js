import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Automated Document Extraction',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Extract structured data from PDFs, images, and text files automatically.
        LeapX handles OCR, parsing, and data extraction in one seamless flow.
      </>
    ),
  },
  {
    title: 'Pipeline Architecture',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Modular pipeline stages (OCR → Parser → LLM Extraction) with built-in
        caching, error handling, and observability. Define your schema and go.
      </>
    ),
  },
  {
    title: 'AI-Powered & Schema-Driven',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Use Pydantic models or JSON Schema to define extraction targets.
        Leverage LLMs to extract exactly the data you need with high accuracy.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
