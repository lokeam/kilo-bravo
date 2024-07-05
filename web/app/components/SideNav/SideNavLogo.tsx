import React from 'react';

interface SideNavLogoProps {
  href: string;
  img: string;
  imgAlt: string;
}

export const SideNavLogo: React.FC<SideNavLogoProps> = ({ href, img, imgAlt }) => {
  return (
    <a href={href} className="flex items-center p-4">
      <img src={img} alt={imgAlt} className="h-8" />
    </a>
  );
};
