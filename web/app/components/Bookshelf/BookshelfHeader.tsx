import React from 'react';

interface BookshelfHeaderProps {
  heading: string;
  showAllUrl: string;
}

 const BookshelfHeader = ({ showAllUrl, heading = 'Default Heading'}: BookshelfHeaderProps) => {
  return (
    <div className="bookshelf_heading items-end justify-end mx-3">
      <div className="flex flex-1 min-w-0">
        <h2 className="text-2xl font-bold text-white">
          <a className="inline-block max-w-full overflow-hidden text-ellipsis whitespace-nowrap select-none" href={showAllUrl}>
            {heading}
          </a>
        </h2>
      </div>
      <a className="text-white text-sm my-1 font-semibold leading-3 ms-0 select-none" href={showAllUrl}>
        <span className="box-border">Show all</span>
      </a>
    </div>
  )
}

export default React.memo(BookshelfHeader);