import { useContext } from "react";
import { PostContext } from "../context";

export default function SearchPosts() {
  const { setSearchQuery, searchQuery } = useContext(PostContext);

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}
