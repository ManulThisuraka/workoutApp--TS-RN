import React from 'react';
import useCachedResources from './hooks/useCachedResource';
import Navigation from './navigation';

export default function App() {
  const isLoaded = useCachedResources();
  console.log(isLoaded);
  return (
    <>
      <Navigation />
    </>
  );
}
