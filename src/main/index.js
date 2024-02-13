import { useContext } from "react";
import { PostContext } from "../context";

import FormAddPost from "../add-post";
import Posts from "../post";

export default function Main() {
  const { posts, onAddPost } = useContext(PostContext);

  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}
