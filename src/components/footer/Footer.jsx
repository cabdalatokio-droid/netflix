import React from 'react';
import footerData from '../../content/footerLinks.json';
import FooterLink from './FooterLink';

const Footer = () => {
  return (
    <div className="mt-10 mb-16 sm:mx-auto sm:max-w-screen-lg px-4">
      <h1 className="text-[#6c6c6c] text-base mb-4">Questions? Contact Us</h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {footerData.columns.map((footer,index)=>(
          <FooterLink key={index} links={footer}/>
        ))}
      </div>

      <p className="mt-8 text-sm text-[#6c6c6c]">Netflix in Somalia</p>
    </div>
  );
};

export default Footer;