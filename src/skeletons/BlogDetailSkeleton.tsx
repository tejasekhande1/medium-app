export default function BlogDetailSkeleton() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8 animate-pulse">
            {/* Title */}
            <div className="h-10 w-3/4 bg-gray-200 rounded mb-6"></div>

            {/* Author section */}
            <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div className="space-y-2">
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    <div className="h-3 w-20 bg-gray-200 rounded"></div>
                </div>
            </div>

            {/* Tags */}
            <div className="flex gap-2 mb-6">
                <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
            </div>

            {/* Body */}
            <div className="space-y-3 mb-8">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>

            {/* Reactions */}
            <div className="flex gap-6 border-t border-gray-200 pt-6">
                <div className="h-8 w-24 bg-gray-200 rounded"></div>
                <div className="h-8 w-24 bg-gray-200 rounded"></div>
            </div>
        </div>
    );
}
