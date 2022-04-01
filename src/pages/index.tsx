import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HeroBanner from "../components/HeroBanner";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Scalable, High Performance, Open source web conferencing system <head />"
    >
      <HeroBanner />
      <main>
        <HomepageFeatures />
        {/* <div className="desktop-banner">
          <div className="container">
            <h1 className='headline'>plugNmeet that feel like Classroom</h1>
            <p>Our next-gen event platform and mobile apps connect attendees, sponsors, exhibitors and speakers for a meaningful virtual event experience.</p>
          </div>
          <div className="image-intro"></div>
        </div> */}
      </main>
    </Layout>
  );
}
