import { useEffect, useState, useMemo } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import MainContex from './MainContex';
import BrandsData from './brands.json';
import Copied from './components/Copied';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Collection from './components/Collection';
import { forceCheck } from 'react-lazyload';

function App() {
  const brandsArray = useMemo(() => Object.values(BrandsData), []);

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  useEffect(() => {
    setBrands(
      brandsArray.filter((brand) =>
        brand.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, brandsArray]);

  useEffect(() => {
    forceCheck();
  }, [brands]);

  useEffect(() => {
    document.title = 'React BrandColors Project';
  }, []);

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  };

  return (
    <MainContex.Provider value={data}>
      {copied && <Copied color={copied} />}
      <Sidebar />
      <Router>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/collection/:slugs" element={<Collection />} />
        </Routes>
      </Router>
    </MainContex.Provider>
  );
}

export default App;
