import { Heading } from './Heading';
import { Paragraph } from './Paragraph';
import './Hero.css';

export function Hero({ src, eyebrow, heading, level = 1, body, height = '70vh' }) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${src})`, height }}>
      <div className="hero__overlay" />
      <div className="hero__content">
        <Heading level={level} eyebrow={eyebrow}>{heading}</Heading>
        {body && <Paragraph>{body}</Paragraph>}
      </div>
    </div>
  );
}
