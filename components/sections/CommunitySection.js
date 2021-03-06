import Link from "next/link";
import PropTypes from "prop-types";
import Button from "../Button";
import FloatingGrid from "../FloatingGrid.js";
import { ImageGrid } from "../ImageGrid";
import JoinCommunityButton from "../JoinCommunityButton";
import ContentLayout from "../layouts/ContentLayout";
import styles from "../modules/CommunitySection.module.css";
import Section from "../Section";
import SectionDescription from "../SectionDescription";

export default function CommunitySection({ title, description, images, link }) {
  return (
    <Section id="community" className={styles.communitySection}>
      <ContentLayout>
        <FloatingGrid floatingElement={<ImageGrid images={images} />}>
          <h1 className={styles.title}>{title}</h1>
          <SectionDescription color={"#DEE8FF"} richText={description} />
          {/* <div className={styles.buttons}>
            <Link href={link.to}>
              <Button color={"light"} label={link.label} />
            </Link>
            <JoinCommunityButton className={styles.marginButton} />
          </div> */}
        </FloatingGrid>
      </ContentLayout>
    </Section>
  );
}

CommunitySection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  link: PropTypes.object,
};
