import { Contacts, Hero, HeroProject, Skills, Text } from "@/Components";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <Text/>
      <HeroProject/>
      <Skills/>
      <Contacts/>
      
      
    </div>
  );
}
