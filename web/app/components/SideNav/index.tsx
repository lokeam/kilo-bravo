import { SideNavWrapper } from './SideNavWrapper';
import { SideNavLogo } from './SideNavLogo';
import { SideNavList } from './SideNavList';
import { SideNavListItem } from './SideNavListItem';
import { SideNavCollapse } from './SideNavCollapse';

// Icons and Logos
import { MdOutlineGridView } from 'react-icons/md';
import { HiOutlineCollection } from 'react-icons/hi';
import kbLogo from '../../../public/tk_icon.webp'

interface SideNavState {
  isOpen: boolean;
}

interface SideNavProps {
  sidenavState: SideNavState;
}

export default function SideNav({sidenavState}: SideNavProps) {

  return (
    <SideNavWrapper className="" ariaLabel="Main navigation">
      <SideNavLogo href="#" img={kbLogo} imgAlt="Your Logo Here" />

      <SideNavList>
        <SideNavCollapse label="View As" icon={MdOutlineGridView} isOpen={sidenavState.isOpen}>
          <SideNavListItem href="#">Grid</SideNavListItem>
          <SideNavListItem href="#">Table</SideNavListItem>
          <SideNavListItem href="#">List</SideNavListItem>
        </SideNavCollapse>

        <SideNavCollapse label="Categories" icon={HiOutlineCollection} isOpen={sidenavState.isOpen}>
          <SideNavListItem href="#">My Category #1</SideNavListItem>
          <SideNavListItem href="#">My Category #2</SideNavListItem>
          <SideNavListItem href="#">Starred</SideNavListItem>
          <SideNavListItem href="#">To Read</SideNavListItem>
        </SideNavCollapse>

      </SideNavList>
    </SideNavWrapper>
  );
}
