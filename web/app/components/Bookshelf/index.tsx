import React from 'react';
import BookshelfHeader from './BookshelfHeader';
import BookshelfList from './BookshelfList';


interface BookShelfProps {
  category: Category;
  isLoading: boolean;
}

interface Category {
  heading: string;
  books: Card[];
}

interface Card {
  alt: string;
  author: string;
  img: string;
  title: string;
}

const BookShelf = ({ category, isLoading }: BookShelfProps) => {

  console.log('Bookshelf: ', category);

  return (
    <section className="bookshelf_wrapper pt-3">
      <BookshelfHeader heading={category.heading} showAllUrl="/" />
      <BookshelfList cardData={category.books} isLoading={isLoading} />
    </section>
  )
};

export default React.memo(BookShelf);