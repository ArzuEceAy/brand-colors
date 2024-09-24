// const getContrastYIQ = (hexcolor) => {
//   const r = parseInt(hexcolor.substring(1, 3), 16);
//   const g = parseInt(hexcolor.substring(3, 5), 16);
//   const b = parseInt(hexcolor.substring(5, 7), 16);
//   const yiq = (r * 299 + g * 587 + b * 114) / 1000;
//   return yiq >= 128 ? 'black' : 'white';
// };

// export { getContrastYIQ };

const getContrastYIQ = (hexcolor) => {
  // Hex renk kodunu RGB'ye çevirme
  const r = parseInt(hexcolor.substring(0, 2), 16);
  const g = parseInt(hexcolor.substring(2, 4), 16);
  const b = parseInt(hexcolor.substring(4, 6), 16);

  // YIQ formülü ile parlaklık hesaplama
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Parlaklık değeri 128'den büyükse siyah, değilse beyaz yazı rengi seç
  return yiq >= 128 ? 'black' : 'white';
};

export { getContrastYIQ };
