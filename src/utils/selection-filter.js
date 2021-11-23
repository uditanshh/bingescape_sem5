export default function selectionFilter({ Netflix, Prime, Hotstar } = []) {
  return {
    Netflix: [
      { title: 'Action', data: Netflix?.filter((item) => item.genre === 'action') },
      { title: 'Family', data: Netflix?.filter((item) => item.genre === 'family') },
      { title: 'Comedy', data: Netflix?.filter((item) => item.genre === 'comedy') },
      { title: 'Thriller', data: Netflix?.filter((item) => item.genre === 'thriller') },
      { title: 'Romance', data: Netflix?.filter((item) => item.genre === 'romance') },
    ],

    Prime: [
      { title: 'Action', data: Prime?.filter((item) => item.genre === 'action') },
      { title: 'Adventure', data: Prime?.filter((item) => item.genre === 'adventure') },
      { title: 'Comedies', data: Prime?.filter((item) => item.genre === 'comedies') },
      { title: 'Thriller', data: Prime?.filter((item) => item.genre === 'thriller') },
      { title: 'Romance', data: Prime?.filter((item) => item.genre === 'romance') },
    ],
    Hotstar: [
      { title: 'Action', data: Hotstar?.filter((item) => item.genre === 'action') },
      { title: 'Family', data: Hotstar?.filter((item) => item.genre === 'family') },
      { title: 'Scifi', data: Hotstar?.filter((item) => item.genre === 'scifi') },
      { title: 'Thriller', data: Hotstar?.filter((item) => item.genre === 'thriller') },
      { title: 'Romance', data: Hotstar?.filter((item) => item.genre === 'romance') },
    ],
  };
}
