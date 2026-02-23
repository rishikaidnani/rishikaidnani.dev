import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Hero from './components/home/Hero';
import AboutMe from './components/home/AboutMe';
import WorkExperience from './components/experience/WorkExperience';
import BlogGrid from './components/blogs/BlogGrid';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <WorkExperience />
        <BlogGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
