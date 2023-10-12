import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Pages
import articleContent from './article-content';
import NotFound from './NotFound';

// Components
import Articles from '../components/Articles';
import CommentsList from '../components/CommentsList';
import AddComments from '../components/AddComments';

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    }
    fetchData();
  }, [name]);

  if (!article) return <NotFound />;
  const otherArticles = articleContent.filter((article) => article.name !== name);
  return (
    <>
      <Link to="/articles-list" className="text-indigo-500 block mb-4 text-sm hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
        </svg>
        Back to Articles
      </Link>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-grey-900 font-serif'>
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className='mx-auto leading-relaxed text-base mb-4 font-sans' key={index}>{paragraph}</p>
      ))}
      
      <CommentsList comments={articleInfo.comments} />
      <AddComments articleName={name} setArticleInfo={setArticleInfo} />

      <h1 className='sm:text-2xl text-xl font-bold mt-10 my-4 text-gray-900'>Other Articles</h1>
      <div className='flex flex-wrap -m-4'>
          <Articles articles={otherArticles} />
      </div>
    </>
  );
}

export default Article;
