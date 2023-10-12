import React from 'react';
import { Link } from 'react-router-dom';

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className="p-4 md:w-1/2">
          <div className="h-full border-2 border-grey-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-md transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
            <Link to={`/article/${article.name}`}>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
                src={article.thumbnail}
                alt="blog"
              />
            </Link>
            <div className="p-6">
              <Link key={index} to={`/article/${article.name}`}>
                <h3 className="text-xl font-medium text-gray-900 relative mb-3 hover:text-indigo-500 transition-colors">
                  {article.title}
                  <span className="absolute left-0 w-full h-1 bg-indigo-500 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
                </h3>
              </Link>
              <p className="leading-relaxed mb-3 text-gray-600">
                {article.content[0].substring(0, 110)}...
              </p>
              <div className="flex item-center flex-wrap">
                <Link
                  className="text-indigo-500 hover:text-indigo-700 inline-flex items-center md:mb-2 lg:mb-0 transition-colors"
                  to={`/article/${article.name}`}
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;
