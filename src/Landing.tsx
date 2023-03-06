import './App.scss';
import { HeadSection } from './components/HeadSection/HeadSection';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Generation } from './components/Generation/Generation';
export const Landing = () => {
  return (
    <>
    <div className="App">
            <Header/>
            <HeadSection/>
            <AboutMe/>
            <Generation/>
            <Footer/>
          </div>
    </>
  )
}
