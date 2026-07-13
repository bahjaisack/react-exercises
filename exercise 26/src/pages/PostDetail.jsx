import React, { useContext } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router';
import { PostsContext } from './Posts';

const PostDetail = () => {
  const { posts } = useContext(PostsContext);
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = parseInt(postId);
  const post = posts.find((p) => p.id === currentId);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="rounded-full bg-amber-50 p-3 text-amber-600">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">Post not found</h3>
        <p className="mt-1 text-sm text-slate-500">The article you are looking for might have been moved or deleted.</p>
        <button 
          onClick={() => navigate('/')} 
          className="mt-5 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Back to Home
        </button>
      </div>
    );
  }

 
  const hasPrev = posts.some((p) => p.id === currentId - 1);
  const hasNext = posts.some((p) => p.id === currentId + 1);

  const handleNavigation = (direction) => {
    const newId = direction === 'next' ? currentId + 1 : currentId - 1;
    const newPost = posts.find((p) => p.id === newId);

    if (newPost) {
      navigate(`/posts/${newId}`, {
        state: { fromPostId: currentId },
      });
    }
  };

  return (
    <div className="mx-auto max-w-2xl py-4">
      {location.state?.fromPostId && (
        <div className="mb-6 flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-2.5 text-xs font-medium text-slate-600 border border-slate-100">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          <span>You navigated here from post ID: <strong className="text-slate-900">#{location.state.fromPostId}</strong></span>
        </div>
      )}

      <article className="space-y-6">
        <header className="space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-0.5 text-xs font-medium text-rose-600">
            Post #{post.id}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h2>
          <div className="h-0.5 w-12 bg-rose-500 rounded" />
        </header>

        <p className="text-base leading-relaxed text-slate-600 whitespace-pre-line">
          {post.content}
        </p>
      </article>

      <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-6">
        <button
          onClick={() => handleNavigation('prev')}
          disabled={!hasPrev}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-40"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Previous
        </button>

        <button
          onClick={() => handleNavigation('next')}
          disabled={!hasNext}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-40"
        >
          Next
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PostDetail;