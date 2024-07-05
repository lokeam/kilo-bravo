import React from 'react';
import { useFetcher } from '@remix-run/react';
import { IconType } from 'react-icons';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

interface SideNavCollapseProps {
  label: string;
  icon: IconType;
  children: React.ReactNode;
  isOpen: boolean;
  collapseKey: string;
}

interface FetcherData {
  [key: string]: boolean;
}

export const SideNavCollapse: React.FC<SideNavCollapseProps> = ({ label, icon: Icon, children, isOpen, collapseKey }) => {
  const fetcher = useFetcher<FetcherData>();
  const currentState = fetcher.data && collapseKey in fetcher.data ? fetcher.data[collapseKey] : isOpen;

  const toggleCollapse = () => {
    const nextIsOpen = !currentState;
    fetcher.submit(
      { collapseKey, isOpen: nextIsOpen.toString() },
      { method: 'post', action: '/library' }
    );
  };

  return (
    <div>
      <button
        onClick={toggleCollapse}
        className="group flex w-full items-center justify-between p-4 text-left hover:bg-gray-700"
        aria-expanded={currentState}
        aria-controls={`${collapseKey}-content`}
      >
        <div className="flex items-center">
          <Icon className="w-5 h-5 mr-2" />
          <span>{label}</span>
        </div>
        {currentState ? <MdExpandLess className="w-5 h-5" /> : <MdExpandMore className="w-5 h-5" />}
      </button>
      {currentState && <div id={`${collapseKey}-content`} className="ml-4">{children}</div>}
    </div>
  );
};
