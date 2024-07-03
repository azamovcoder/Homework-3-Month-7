import "./App.css";

import Category from "./components/category/Category";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Hero from "./components/Hero/Hero";
import Job from "./components/job/Job";
import News from "./components/news";
import Service from "./components/service/Service";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Category />
        <Service />
        <Job />
        <News />
      </main>
      <Footer />
    </>
  );
}

export default App;
