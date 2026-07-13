import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router';
import { PostsContext } from './Posts';

const Home = () => {
  const { posts } = useContext(PostsContext);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get('search') || '';

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-2xl py-4 space-y-6">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">Blog Posts</h2>
      
      <form className="flex gap-2">
        <input
          type="text"
          name="search"
          placeholder="Search posts"
          defaultValue={searchTerm}
          className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm placeholder-slate-400 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
        />
        <button 
          type="submit"
          className="rounded-xl bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-rose-500/20 transition-all hover:bg-rose-600 active:scale-[0.98]"
        >
          Search
        </button>
      </form>
 {filteredPosts.length === 0 ? (
        <div className="py-12 text-center border-t border-dashed border-slate-200 mt-4">
          <p className="text-base font-medium text-slate-900">No posts found</p>
          <p className="text-sm text-slate-500 mt-1">We couldn't find anything matching "{searchTerm}"</p>
        </div>
      ) : (
        <ul className="divide-y divide-slate-100 border-t border-slate-100">
          {filteredPosts.map((post) => (
            <li key={post.id} className="py-3.5">
              <Link 
                to={`/posts/${post.id}`}
                className="text-base font-medium text-slate-700 transition-colors hover:text-rose-500"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;