import React from "react";
import AlternativeLayout from "../components/layouts/AlternativeLayout";
import Section from "../components/Section";
import RequirementSection from "../components/sections/RequirementSection";
import WayToContribute from "../components/WayToContribute";
import { getContributeContent } from "../services/sanity";

export default function Contribute({ data }) {
  return (
    <AlternativeLayout pageTitle={data.name} introduction={data.description}>
      <Section id={"contributions"} bgColor={"dark-light"}>
        <h2 className={"centered-text"}>{data.waysToContributeSectionTitle}</h2>
        <div>
          {data.waysToContribute.map((way) => (
            <WayToContribute key={way._key} way={way} />
          ))}
        </div>
      </Section>
      <RequirementSection
        title={data.requirementSectionTitle}
        description={data.requirementDescription}
      />
    </AlternativeLayout>
  );
}

export async function getStaticProps() {
  return {
    props: { data: await getContributeContent() },
  };
}