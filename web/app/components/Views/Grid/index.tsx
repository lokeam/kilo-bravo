import React, { useState, useEffect } from 'react';
import BookShelf from '../../Bookshelf';
import { cachedSettings } from '../../../mockData/gridCategoryRecent';

interface Card {
  alt: string;
  author: string;
  img: string;
  title: string;
}

interface Category {
  heading: string;
  books: Card[];
}

interface CachedSettings {
  recent: Category;
  userCategories: Category[];
}

const Grid: React.FC = () => {
  const [recentData, setRecentData] = useState<Category | null>(null);
  const [userCategoryData, setUserCategoryData] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    const recentObj = (cachedSettings as CachedSettings).recent;
    const userCategoryObj = (cachedSettings as CachedSettings).userCategories;

    setRecentData(recentObj);
    setUserCategoryData(userCategoryObj);
    setIsLoading(false);
  }, []);

  return (
    <main className="p-4 h-auto pt-20">
      {/* Recently Accessed Data */}
      {isLoading ? (
        <div>Loading...</div>
      ) : recentData ? (
        <BookShelf category={recentData} isLoading={isLoading} />
      ) : null}

      {/* User Defined Categories */}
      {isLoading ? (
        <div>Loading...</div>
      ) : userCategoryData.length > 0 ? (
        <div>User Defined Bookshelf here</div>
      ) : null}
    </main>
  );
};

export default Grid;
