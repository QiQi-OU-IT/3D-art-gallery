export const paintingData = [
  // Front Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `artworks/${i + 1}.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 5, // width of the painting
    height: 3, // height of the painting
    position: { x: -15 + 10 * i, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: {
      // info about the painting
      title: `Van Gogh ${i + 1}`,
      artist: 'Vincent van Gogh',
      description: `This is one of the masterpieces by Vincent van Gogh, showcasing his unique style and emotional honesty. Artwork ${
        i + 1
      } perfectly encapsulates his love for the beauty of everyday life.`,
      year: `Year ${i + 1}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
  // Back Wall
  ...[
  {
    imgSrc: `artworks/5.jpg`,
    width: 5,
    height: 3,
    position: { x: -15, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Van Gogh 5`,
      artist: 'Vincent van Gogh',
      description: `Artwork 5 by Vincent van Gogh is an exceptional piece showcasing his remarkable ability to capture emotion and atmosphere.`,
      year: `Year 5`,
      link: 'https://github.com/theringsofsaturn',
    },
  },
  {
    imgSrc: `artworks/6.jpg`,
    width: 5,
    height: 3,
    position: { x: -5, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Van Gogh 6`,
      artist: 'Vincent van Gogh',
      description: `Artwork 6 by Vincent van Gogh is an exceptional piece showcasing his remarkable ability to capture emotion and atmosphere.`,
      year: `Year 6`,
      link: 'https://github.com/theringsofsaturn',
    },
  },
  {
    imgSrc: `artworks/7.jpg`,
    width: 5,
    height: 3,
    position: { x: 5, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `OU Help To Be Helped Club`,
    artist: 'CLB Hỗ trợ người nước ngoài học tập tại trường Đại học Mở TP.HCM', // <-- dùng lại key 'artist'
    year: `2025`,
    description: `Founded on Sept 20, 2024, the club supports international students at OU with extracurricular activities and mental well-being.`,
    link: 'https://example.com/tranh7',
    },
  },
  {
    imgSrc: `artworks/8.jpg`,
    width: 5,
    height: 3,
    position: { x: 15, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Van Gogh 8`,
      artist: 'Vincent van Gogh',
      description: `Artwork 8 by Vincent van Gogh is an exceptional piece showcasing his remarkable ability to capture emotion and atmosphere.`,
      year: `Year 8`,
      link: 'https://github.com/theringsofsaturn',
    },
  }
],
  // Left Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 9}.jpg`,
    width: 5,
    height: 3,
    position: { x: -19.5, y: 2, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Van Gogh ${i + 9}`,
      artist: 'Vincent van Gogh',
      description: `With its striking use of color and brushwork, Artwork ${
        i + 9
      } is a testament to Van Gogh's artistic genius.`,
      year: `Year ${i + 9}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
  // Right Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 13}.jpg`,
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Van Gogh ${i + 13}`,
      artist: 'Vincent van Gogh',
      description: `Artwork ${
        i + 13
      } is a captivating piece by Vincent van Gogh, reflecting his distinctive style and deep passion for art.`,
      year: `Year ${i + 13}`,
      link: 'https://github.com/theringsofsaturn',
    },
  })),
];
