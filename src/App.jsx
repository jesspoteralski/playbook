import { Layout } from "./layouts/Layout";
import { Stack } from "./layouts/Stack";
import { Text } from "./displays/Text";
import { Image } from "./displays/Image";
import { Video } from "./displays/Video";
import { Heading } from "./displays/Heading";
import { List } from "./displays/List";
import { Paragraph } from "./displays/Paragraph";
import { Button } from "./displays/Button";
import { Link } from "./displays/Link";
import { Card } from "./displays/Card";
import { Hero } from "./displays/Hero";
import "./App.css";

const textProps = {
  eyebrow: "Design Systems",
  title: "A composable layout system",
  body: "Layout elements control structure. Display elements control content. Container queries bridge the two — each Display adapts to its container, not the viewport.",
};

const imageProps = {
  src: "/pexels-roxanne-minnish-2936023-12319210.jpg",
  alt: "Violin section performing live in concert",
  caption: "Violinists mid-performance under stage lighting.",
};

const videoProps = {
  src: "/MPEG-4 movie.mp4",
  title: "Live at the Porch Sessions",
  caption: "A captivating orchestra performance featuring violins and cellos.",
};

export default function App() {
  return (
    <div>
      <Layout width="100%">
        <Hero
          src="/pexels-roxanne-minnish-2936023-12319210.jpg"
          eyebrow="The Playbook"
          heading="A Composable Layout System"
          body="Layout elements control structure. Display elements control content. Container queries bridge the two."
        />
      </Layout>

      <Layout columns={2} padding="2rem" background="#ffffff">
        <Heading level="1">A composable layout system</Heading>
        <Paragraph>
          Design and implement a flexible system that empowers non-technical
          users, primarily marketing and content teams, to independently create,
          assemble, and update web pages. The solution should minimize reliance
          on design and engineering resources, while maintaining brand
          consistency and design integrity.
        </Paragraph>
      </Layout>

      <p className="demo-label">Layout · columns=2 · Display wrappers styled</p>
      <Layout columns={2} gap="2rem" padding="2rem" background="#f5f5f5">
        <Text
          {...textProps}
          background="#fff"
          padding="1.5rem"
          borderRadius="8px"
        />
        <Image
          {...imageProps}
          background="#fff"
          padding="1.5rem"
          borderRadius="8px"
        />
      </Layout>

      <Layout columns={3} gap="1.5rem" padding="4rem 2rem">
        <Stack gap={"1rem"}>
          <Heading level="3">A composable layout system</Heading>
          <Paragraph>
            Design and implement a flexible system that empowers non-technical
            users, primarily marketing and content teams, to independently
            create, assemble, and update web pages. The solution should minimize
            reliance on design and engineering resources, while maintaining
            brand consistency and design integrity.
          </Paragraph>
          <Link>Read more</Link>
        </Stack>
        <Image
          {...imageProps}
          padding="1rem"
          border="1px solid #eee"
          borderRadius="6px"
        />
        <Video
          {...videoProps}
          padding="1rem"
          border="1px solid #eee"
          borderRadius="6px"
        />
      </Layout>

      <Layout columns="2fr 1fr" gap="2rem" padding="2rem" background="#f0f4ff">
        <Video {...videoProps} padding="2rem" />
        <Text
          eyebrow="Narrow column"
          title="Same component, different context"
          body="This Text is in a medium 1fr column — stacked. The Video beside it is in a wide 2fr column — side-by-side layout."
          padding="1.5rem"
        />
      </Layout>

      {/* Section 5: new display components */}
      <p className="demo-label">Heading · List · Paragraph · Button</p>
      <Layout columns={2} gap="2rem" padding="2rem" background="#ffffff">
        <Layout columns={1} gap="1rem" padding="0">
          <Heading level={1}>Heading One</Heading>
          <Heading level={2}>Heading Two</Heading>
          <Heading level={3}>Heading Three</Heading>
          <Heading level={4}>Heading Four</Heading>
        </Layout>
        <Layout columns={1} gap="1.5rem" padding="0">
          <List
            items={[
              "Layout controls structure",
              "Display controls content",
              "Container queries handle adaptation",
              "Wrappers manage visual styling",
            ]}
          />
          <Paragraph>
            Display elements are modular, self-contained units of content that
            live within a Layout container. Each one manages its own styling
            while the Layout governs placement.
          </Paragraph>
          <Layout columns={3} gap="0.75rem" padding="0">
            <Button primary>Primary</Button>
            <Button secondary>Secondary</Button>
            <Button url="https://jesspoteralski.com">Link</Button>
          </Layout>
          <Layout columns={1} gap="0.5rem" padding="0">
            <Link url="https://jesspoteralski.com" icon="chevron-right">
              Read the case study
            </Link>
            <Link url="https://jesspoteralski.com" icon="external">
              Open in new tab
            </Link>
            <Link url="https://jesspoteralski.com" icon="download">
              Download file
            </Link>
          </Layout>
        </Layout>
      </Layout>
      {/* Section 6: Card as container */}
      <p className="demo-label">Card · Display elements as children</p>
      <Layout columns={3} gap="1.5rem" padding="2rem" background="#f5f5f5">
        <Card>
          <Image {...imageProps} />
          <Heading level={3} eyebrow="Featured">
            String Section
          </Heading>
          <Paragraph>
            Violinists and cellists performing together in an intimate concert
            setting.
          </Paragraph>
          <Link url="https://jesspoteralski.com" icon="chevron-right">
            Learn more
          </Link>
        </Card>
        <Card>
          <Heading level={3}>About the Series</Heading>
          <Paragraph>
            A rotating roster of chamber ensembles performing original and
            traditional repertoire in unconventional spaces.
          </Paragraph>
          <List
            items={[
              "Weekly performances",
              "All acoustic",
              "Free admission",
              "Recorded and archived",
            ]}
          />
        </Card>
        <Card>
          <Heading level={3}>Get Involved</Heading>
          <Paragraph>
            Whether you play, record, or just love live music — there's a place
            for you.
          </Paragraph>
          <Button primary>Join the series</Button>
          <Button secondary>Submit a set</Button>
        </Card>
      </Layout>
    </div>
  );
}
