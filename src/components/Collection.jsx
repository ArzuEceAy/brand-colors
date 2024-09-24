import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Brand from './Brand';
import { useContext } from 'react';
import MainContex from '../MainContex';
import LazyLoad from 'react-lazyload';
import Download from './Download';
import { GrLinkPrevious } from 'react-icons/gr';
import Loader from './Loader';

const Collection = (props) => {
  const { slugs } = useParams();
  const navigate = useNavigate();
  const { selectedBrands, setSelectedBrands, brands } = useContext(MainContex);

  const clearSelectedBrands = () => {
    setSelectedBrands = [];
    navigate.push('/');
  };

  useEffect(() => {
    setSelectedBrands(slugs.split(','));
  }, [slugs, setSelectedBrands]);
  return (
    <div className="content">
      <div className="toolbar">
        <Link to="/" onClick={clearSelectedBrands}>
          <button className="back-btn">
            <GrLinkPrevious />
            All Brands
          </button>
        </Link>
        {selectedBrands.length !== 0 && <Download />}
      </div>
      <div className="brands">
        {selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return (
            <LazyLoad
              key={brand.slug}
              once={true}
              overflow={true}
              placeholder={<Loader />}
            >
              <Brand key={brand.slug} brand={brand} />
            </LazyLoad>
          );
        })}
      </div>
    </div>
  );
};

export default Collection;
