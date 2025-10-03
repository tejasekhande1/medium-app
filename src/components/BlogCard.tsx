import Avatar from "./Avatar.tsx";
import {Link} from "react-router-dom";

interface BlogCardProps {
    post: Post;
}

function BlogCard({post}: BlogCardProps) {
    return (
        <Link to={`/blogs/${post.id}`}>
            <div
                className="bg-white p-5 border-b border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                    <Avatar/>
                    <div>
                        <h2 className="font-semibold text-lg text-gray-800">{post.title}</h2>
                        <p className="text-sm text-gray-500">User ID: {post.userId}</p>
                    </div>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {post.body}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
                        >
                        #{tag}
                    </span>
                    ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex gap-4">
                  <span className="flex items-center gap-1">
                    👍 {post.reactions.likes}
                  </span>

                        <span className="flex items-center gap-1">
                        👎 {post.reactions.dislikes}
                    </span>

                    </div>
                    <span className="text-gray-500">{post.views} views</span>
                </div>
            </div>
        </Link>
    );
}

export default BlogCard;
