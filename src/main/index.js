import { usePosts, memo } from "../context";

import FormAddPost from "../add-post";
import Posts from "../post";

export const Main = memo(function Main() {
  const { posts, onAddPost } = usePosts();

  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
});
