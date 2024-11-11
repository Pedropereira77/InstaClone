// src/components/Feed.jsx
import { useState } from "react";

const posts = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/300?random=1",
    likes: 23,
    comments: ["Ótima foto!"],
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/300?random=2",
    likes: 12,
    comments: ["Adorei!"],
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/300?random=3",
    likes: 5,
    comments: [],
  },
];

const Feed = () => {
  const [postList, setPostList] = useState(posts);

  const toggleLike = (id) => {
    setPostList(
      postList.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const addComment = (id, comment) => {
    setPostList(
      postList.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div className="w-3/5 p-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {postList.map((post) => (
        <div key={post.id} className="mb-6 border-b pb-4 dark:border-gray-700">
          <img src={post.imageUrl} alt="Post" className="w-full mb-2" />
          <button onClick={() => toggleLike(post.id)} className="text-red-500">
            ❤️ {post.likes}
          </button>
          <div className="mt-2">
            {post.comments.map((comment, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-400">
                {comment}
              </p>
            ))}
            <input
              type="text"
              placeholder="Adicionar um comentário..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addComment(post.id, e.target.value);
                  e.target.value = "";
                }
              }}
              className="mt-2 w-full p-1 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
