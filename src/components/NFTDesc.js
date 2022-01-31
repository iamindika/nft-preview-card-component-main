import React from 'react';
import NFTStats from './NFTStats';

export default function NFTDesc() {
  return (
    <section className="nft-desc">
      <h1 className="nft-desc__title">Equilibrium #3429</h1>
      <p className="nft-desc__text blur">Our Equilibrium collection promotes balance and calm.</p>
      <NFTStats />
    </section>
  )
}