import Search from './Search';
import Brand from './Brand';
import { useContext } from 'react';
import MainContex from '../MainContex';
import LazyLoad from 'react-lazyload';
import Download from './Download';
import Loader from './Loader';

const Content = () => {
  const { brands, selectedBrands } = useContext(MainContex);
  return (
    <div className="content">
      <div className="toolbar">
        <Search />
        {selectedBrands.length !== 0 && <Download />}
      </div>
      <div className="brands">
        {brands.map((brand) => (
          <LazyLoad
            key={brand.slug}
            once={true}
            overflow={true}
            placeholder={<Loader />}
          >
            <Brand key={brand.slug} brand={brand} />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};

export default Content;
