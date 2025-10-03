import BlogCard from "../components/BlogCard.tsx";
import AppBar from "../components/AppBar.tsx";
import {useBlogs} from "../hooks/useBlogs.ts";
import Blog from "./Blog.tsx";

function Blogs() {
    const {loading, blogs} = useBlogs();
    console.log("Blogs page", blogs);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <AppBar/>
            <div className="flex justify-center">
                <div className="w-full max-w-3xl mx-auto">
                    {
                        blogs.map((blog: Blog) => (
                            <BlogCard key={blog.id} post={blog}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Blogs;