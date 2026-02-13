import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LandingPage from "@/components/valentine/LandingPage";
import FloatingHearts from "@/components/valentine/FloatingHearts";
import CountdownTimer from "@/components/valentine/CountdownTimer";
import Timeline from "@/components/valentine/Timeline";
import LoveGames from "@/components/valentine/LoveGames";
import Gallery from "@/components/valentine/Gallery";
import LoveLetters from "@/components/valentine/LoveLetters";
import FutureSection from "@/components/valentine/FutureSection";
import FinalSurprise from "@/components/valentine/FinalSurprise";
import MusicToggle from "@/components/valentine/MusicToggle";
import DarkModeToggle from "@/components/valentine/DarkModeToggle";
import EasterEgg from "@/components/valentine/EasterEgg";
import ILoveYouLanguages from "@/components/valentine/ILoveYouLanguages";
import ReasonsWhy from "@/components/valentine/ReasonsWhy";
import OurPromises from "@/components/valentine/OurPromises";
import DateIdeas from "@/components/valentine/DateIdeas";

const Index = () => {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence>
        {!entered && <LandingPage onEnter={() => setEntered(true)} />}
      </AnimatePresence>

      {entered && (
        <>
          <FloatingHearts />
          <DarkModeToggle />
          <MusicToggle />
          <EasterEgg />

          <CountdownTimer />
          <OurPromises />
          <ILoveYouLanguages />
          <Timeline />
          <ReasonsWhy />
          <LoveGames />
          <Gallery />
          <LoveLetters />
          <DateIdeas />
          <FutureSection />
          <FinalSurprise />

          <footer className="text-center py-10 text-muted-foreground text-sm">
            <p className="font-script text-lg">Made with 💖 by Vauldan D'Souza</p>
            <p className="mt-1">For Shevellie D'costa — my everything</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;
