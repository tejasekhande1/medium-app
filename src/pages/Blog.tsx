import {useBlog} from "../hooks/useBlog.ts";
import {useParams} from "react-router-dom";
import Avatar from "../components/Avatar.tsx";

function Blog() {
    const { id } = useParams<{ id: string }>();
    const {loading, blog} = useBlog(Number(id));

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                {blog.title}
            </h1>

            <div className="flex items-center gap-3 mb-8">
                <Avatar />
                <div>
                    <p className="text-sm font-medium text-gray-800">
                        Author ID: {blog.userId}
                    </p>
                    <p className="text-xs text-gray-500">
                        {new Date().toLocaleDateString()} • {blog.views} views
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
            #{tag}
          </span>
                ))}
            </div>

            <div className="prose max-w-none text-gray-800 leading-relaxed mb-8">
                <p>{blog.body}</p>
            </div>

            <div className="flex items-center gap-6 border-t border-gray-200 pt-6">
                <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                    👍 <span>{blog.reactions.likes} Likes</span>
                </button>
                <button className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors">
                    👎 <span>{blog.reactions.dislikes} Dislikes</span>
                </button>
            </div>
        </div>
    )
}

export default Blog;