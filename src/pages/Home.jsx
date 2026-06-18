import GlowEffect from "../components/GlowEffect";
import HeroText from "../components/HeroText";
import ParticleBackground from "../components/ParticleBackground";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full h-screen relative top-0 left-0 bg-black overflow-hidden"
    >
      <ParticleBackground />

      <div className="absolute inset-0 top-0 left-0">
        <GlowEffect style="-top-32 -left-32" />
        <GlowEffect style="-bottom-32 -right-32 delay-500" />
      </div>

    <HeroText/>
    </section>
  );
};

export default Home;
