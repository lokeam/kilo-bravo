import React from 'react';
import { useFetcher } from '@remix-run/react';
import { IconType } from 'react-icons';
import { MdExpandMore, MdExpandLess } from 'react-icons/md'; // Example icons for collapse/expand

interface SideNavCollapseProps {
  label: string;
  icon: IconType;
  children: React.ReactNode;
  isOpen: boolean;
}

interface FetcherData {
  isOpen: boolean;
}

export const SideNavCollapse: React.FC<SideNavCollapseProps> = ({ label, icon: Icon, children, isOpen }) => {
  const fetcher = useFetcher<FetcherData>();
  const currentState = fetcher.data?.isOpen ?? isOpen;

  const toggleCollapse = () => {
    fetcher.submit({ isOpen: !currentState }, { method: 'post', action: '/library' });
  };

  return (
    <div>
      <button onClick={toggleCollapse} className="group flex w-full items-center justify-between p-4 text-left hover:bg-gray-700">
        <div className="flex items-center">
          <Icon className="w-5 h-5 mr-2" />
          <span>{label}</span>
        </div>
        {currentState ? <MdExpandLess className="w-5 h-5" /> : <MdExpandMore className="w-5 h-5" />}
      </button>
      {currentState && <div className="ml-4">{children}</div>}
    </div>
  );
};
