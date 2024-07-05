import React from 'react';

interface SideNavListProps {
  children: React.ReactNode;
}

export const SideNavList: React.FC<SideNavListProps> = ({ children }) => {
  return <div>{children}</div>;
};
