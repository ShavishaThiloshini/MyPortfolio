import Layout from './components/common/Layout'
import About from './sections/About'
import BeyondCode from './sections/BeyondCode'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Skills from './sections/Skills'

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <BeyondCode />
      <Resume />
      <Contact />
    </Layout>
  )
}

export default App
