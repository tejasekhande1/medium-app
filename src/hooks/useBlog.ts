import {useEffect, useState} from "react";
import {BASE_URL} from "../config/config.ts";

export function useBlog(id: number) {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState(null);

    useEffect(() => {

        const fetchBlogDetails = async () => {
            const res = await fetch(`${BASE_URL}posts/${id}`);
            const data = await res.json();
            setBlog(data);
            setLoading(false);
        }

        void fetchBlogDetails();
    }, [])

    return {loading, blog};
}