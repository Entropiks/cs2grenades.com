import AuthCard from "@components/molecules/AuthCard";
import IconCard from "@components/atoms/IconCard";
// import TECH_STACK_INFO from "@constants/TechStackInfo";
import CustomAvatar from "@components/atoms/CustomAvatar";
import { HeaderMenu } from "@components/molecules/HeaderMenu/HeaderMenu";
import { Hero } from "@components/molecules/Hero/Hero";
import InfoCard from "@components/molecules/InfoCard/InfoCard";
import { SideBySide } from "@components/molecules/SideBySide/SideBySide";
import styles from "./styles.module.sass";
import { Container } from "@mantine/core";

export default function Home() {

  return (
    <main className={styles.container}>
      <HeaderMenu />
      <Hero />
      <Container size="lg" className={styles.infocard_wrapper}>
        <InfoCard title="Improve Your Game" description="Quickly browse our broad selection of cs2 map smokes. Quick enough to look up before your round starts." />
        <InfoCard className={styles.middle_gap} title="Improve Your Game" description="Quickly browse our broad selection of cs2 map smokes. Quick enough to look up before your round starts." />
        <InfoCard title="Improve Your Game" description="Quickly browse our broad selection of cs2 map smokes. Quick enough to look up before your round starts." />
      </Container>
      <Container size="lg" className={styles.sidebyside_wrapper}>
        <SideBySide flipped={false} useButton={true} />
      </Container>
      <AuthCard />
      <div className={styles.footer}>
        <p className={styles.footer_text}>cs2grenades.com</p>
        <CustomAvatar
          image='/images/author.png'
          mainText='Devon Wijesinghe'
          subText='wdevon99'
        />
      </div>
    </main>
  );
}