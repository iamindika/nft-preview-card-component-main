import React from 'react';
import logo from '../assets/images/image-equilibrium.jpg'

export default function NFTLogo() {
  return (
    <header className="nft-logo">
      <img 
        src={logo}
        alt="nft equilibrium logo"
      />
    </header>
  )
}