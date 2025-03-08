import { useQuery } from '@tanstack/react-query';
import supabase from '../lib/supabase';
import Blog from '../components/Blog';

const fetchPosts = async () => {
  const { data } = await supabase.from('posts').select('*');
  return data;
};

export default function Home() {
  const { data, error } = useQuery(['posts'], fetchPosts);

  return (
    <div>
      <header>
        <h1>Chicago Bulls Blog</h1>
      </header>
      <Players />
      {error ? (
        <p>Failed to load blog</p>
      ) : (
        data?.map((post) => <BlogPost key={post.id} post={post} />)
      )}
    </div>
  );
}
