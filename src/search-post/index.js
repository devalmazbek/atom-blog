import { usePosts } from "../context";

export default function SearchPosts() {
  const { setSearchQuery, searchQuery } = usePosts();

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}
