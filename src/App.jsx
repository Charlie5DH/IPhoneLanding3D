import { Hero, Highlights, Model, Navbar, Features, HowItWorks, Footer } from "./components";

export default function App() {
  return (
    <main className="background-body">
      <div className="background-SubBody"></div>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
