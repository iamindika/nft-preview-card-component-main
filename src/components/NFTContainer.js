import React from 'react';
import NFTLogo from './NFTLogo';
import NFTDesc from './NFTDesc';
import NFTAuthor from './NFTAuthor';

export default function NFTContainer() {
  return (
    <article className="container">
      <NFTLogo />
      <NFTDesc />
      <NFTAuthor />
    </article>
  )
}