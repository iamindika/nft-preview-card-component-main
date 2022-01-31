import React from "react";
import ReactDOM from "react-dom";
import NFTLogo from '../src/components/NFTLogo';
import NFTDesc from '../src/components/NFTDesc';
import NFTAuthor from '../src/components/NFTAuthor';
import './styles/index.css'

ReactDOM.render(
  <React.Fragment>
    <NFTLogo />
    <NFTDesc />
    <NFTAuthor />
  </React.Fragment>,
  document.getElementById('container')
)