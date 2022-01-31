import React from 'react';
import avatar from '../assets/images/image-avatar.png';

export default function NFTAuthor() {
  return (
    <footer className="nft-author row">
      <div className="nft-author__avatar">
        <img
          src={avatar}
          alt="avatar"
        />
      </div>
      <p 
        className="nft-author__info blur"
      >Creation of <span className="nft-author__info--highlight">Jules Wyvern</span></p>
    </footer>
  )
}