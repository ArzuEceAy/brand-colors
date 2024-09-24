import React, { useContext } from 'react';
import { getContrastYIQ } from '../helpers';
import MainContex from '../MainContex';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Brand = ({ brand }) => {
  const { selectedBrands, setSelectedBrands, setCopied } =
    useContext(MainContex);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const setColor = (color) => {
    setCopied(color);
  };

  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? 'selected' : ''
      }`}
    >
      <h5 onClick={toggleSelected}>{brand.title}</h5>
      <div className="brand-colors">
        {brand.colors.map((color, index) => (
          <CopyToClipboard
            key={`${color}-${index}`}
            text={color}
            onCopy={() => setColor(color)}
          >
            <span
              style={{
                backgroundColor: `#${color}`,
                color: getContrastYIQ(color),
                padding: '10px',
                margin: '5px',
                borderRadius: '4px',
                display: 'inline-block',
                cursor: 'pointer',
              }}
            >
              #{color}
            </span>
          </CopyToClipboard>
        ))}
      </div>
    </div>
  );
};

export default Brand;
