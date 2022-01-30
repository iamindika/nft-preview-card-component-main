import React from 'react';
import NFTLogo from './NFTLogo';
import NFTDesc from './NFTDesc';

export default function NFTContainer() {
  return (
    <article className="container">
      <NFTLogo />
      <NFTDesc />
    </article>
  )
}