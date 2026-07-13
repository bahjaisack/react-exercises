import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { PostsContext } from './Posts';

const CreatePost = () => {
  const { addPost } = useContext(PostsContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    navigate('/');
  };

  return (
    <div className="mx-auto max-w-2xl py-4 space-y-6">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">Create a New Post</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm placeholder-slate-400 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
          />
        </div>
        
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="6"
            className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm placeholder-slate-400 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500"
          ></textarea>
        </div>
        
        <button 
          type="submit"
          className="w-full sm:w-auto rounded-xl bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-rose-500/20 transition-all hover:bg-rose-600 active:scale-[0.98]"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;