import {useEffect, useState} from "react";
import {BASE_URL} from "../config/config.ts";

export function useBlogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            const res = await fetch(`${BASE_URL}posts`);
            const blogs = await res.json();
            setBlogs(blogs.posts);
            setLoading(false);
        }

        void fetchBlogs();
    }, [])

    return {loading, blogs};
}