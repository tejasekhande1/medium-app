function BlogSkeleton() {
    return (
        <div className="bg-white p-5 border-b border-gray-200 animate-pulse">
            {/* Header Skeleton */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                </div>
            </div>

            {/* Body Skeleton */}
            <div className="space-y-2 mb-4">
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </div>

            {/* Tags Skeleton */}
            <div className="flex gap-2 mb-4">
                <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-14 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
            </div>

            {/* Footer Skeleton */}
            <div className="flex items-center justify-between text-sm">
                <div className="flex gap-4">
                    <div className="h-4 w-10 bg-gray-200 rounded"></div>
                    <div className="h-4 w-10 bg-gray-200 rounded"></div>
                </div>
                <div className="h-4 w-12 bg-gray-200 rounded"></div>
            </div>
        </div>
    );
}

export default BlogSkeleton;
