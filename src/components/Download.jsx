import React, { useContext, useState, useEffect } from 'react';
import MainContex from '../MainContex';
import { GoLink, GoDownload } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Download = () => {
  const { selectedBrands, brands, setSelectedBrands } = useContext(MainContex);
  const [downloadUrl, setDownloadUrl] = useState();
  const [cssMethod, setCssMethod] = useState('css');

  useEffect(() => {
    let output = '';

    if (selectedBrands.length > 0) {
      switch (cssMethod) {
        case 'css':
          output += ':root {\n';
          selectedBrands.forEach((slug) => {
            let brand = brands?.find((brand) => brand.slug === slug);

            if (brand && brand.colors) {
              brand.colors.forEach((color, key) => {
                output += `  --${slug}-${key}: #${color};\n`;
              });
            }
          });
          output += '}';
          break;

        case 'scss':
          selectedBrands.forEach((slug) => {
            let brand = brands?.find((brand) => brand.slug === slug);

            if (brand && brand.colors) {
              brand.colors.forEach((color, key) => {
                output += `$${slug}-${key}: #${color};\n`;
              });
            }
          });
          break;

        case 'less':
          selectedBrands.forEach((slug) => {
            let brand = brands?.find((brand) => brand.slug === slug);

            if (brand && brand.colors) {
              brand.colors.forEach((color, key) => {
                output += `@${slug}-${key}: #${color};\n`;
              });
            }
          });
          break;

        default:
          break;
      }

      if (output) {
        const blob = new Blob([output], {
          type:
            cssMethod === 'css'
              ? 'text/css'
              : cssMethod === 'scss'
              ? 'text/x-scss'
              : 'text/x-less',
        });
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);

        return () => {
          URL.revokeObjectURL(url); // Bellek sızıntısını önlemek için URL'yi serbest bırak
        };
      }
    } else {
      setDownloadUrl(null);
    }
  }, [selectedBrands, brands, cssMethod]);

  return (
    <div className="download">
      <div className="actions">
        <a download={`brands.${cssMethod}`} href={downloadUrl}>
          <GoDownload />
        </a>
        <select onChange={(e) => setCssMethod(e.target.value)}>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <Link to={`/collection/${selectedBrands.join(',')}`}>
          <GoLink />
        </Link>
      </div>
      <div className="selected" onClick={() => setSelectedBrands([])}>
        <button>
          <GrClose />
        </button>
        {selectedBrands.length} brands collected
      </div>
    </div>
  );
};

export default Download;
