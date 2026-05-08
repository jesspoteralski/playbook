import { Layout } from './Layout';
import { TextDisplay } from './displays/TextDisplay';
import { ImageDisplay } from './displays/ImageDisplay';
import { VideoDisplay } from './displays/VideoDisplay';
import './App.css';

const textProps = {
  eyebrow: 'Design Systems',
  title: 'A composable layout system',
  body: 'Layout elements control structure. Display elements control content. Container queries bridge the two — each Display adapts to its container, not the viewport.',
};

const imageProps = {
  src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  alt: 'Abstract gradient',
  caption: 'The same ImageDisplay component adapts to any column width automatically.',
};

const videoProps = {
  src: 'https://www.w3schools.com/html/mov_bbb.mp4',
  title: 'Container queries in action',
  caption: 'Video maintains 16:9 at every size. Title and caption move beside the video in wide containers.',
};

export default function App() {
  return (
    <div className="demo-page">

      {/* Section 1: 1 column — wide container behavior */}
      <p className="demo-label">Layout · columns=1 · wide container (≥600px)</p>
      <Layout columns={1} padding="2rem" background="#ffffff">
        <TextDisplay {...textProps} />
      </Layout>

      {/* Section 2: 2 columns — medium container behavior */}
      <p className="demo-label">Layout · columns=2 · wide containers (≥600px)</p>
      <Layout columns={2} gap="2rem" padding="2rem" background="#f5f5f5">
        <TextDisplay {...textProps} />
        <ImageDisplay {...imageProps} />
      </Layout>

      {/* Section 3: 3 columns — narrow container behavior */}
      <p className="demo-label">Layout · columns=3 · medium containers (300–600px)</p>
      <Layout columns={3} gap="1.5rem" padding="2rem" background="#ffffff">
        <TextDisplay {...textProps} />
        <ImageDisplay {...imageProps} />
        <VideoDisplay {...videoProps} />
      </Layout>

      {/* Section 4: asymmetric 2:1 */}
      <p className="demo-label">Layout · columns="2fr 1fr" · wide (2fr) + medium (1fr)</p>
      <Layout columns="2fr 1fr" gap="2rem" padding="2rem" background="#f0f4ff">
        <VideoDisplay {...videoProps} />
        <TextDisplay
          eyebrow="Narrow column"
          title="Same component, different context"
          body="This TextDisplay is in a medium 1fr column — stacked. The VideoDisplay beside it is in a wide 2fr column — side-by-side layout."
        />
      </Layout>

    </div>
  );
}
