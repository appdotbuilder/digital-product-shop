import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
// Shop index page with inline layout

interface Product {
    id: number;
    name: string;
    slug: string;
    price: number;
    sale_price?: number;
    images?: string[];
    short_description?: string;
    category: {
        name: string;
        slug: string;
    };
    rating: number;
    downloads: number;
    is_on_sale?: boolean;
}

interface Category {
    id: number;
    name: string;
    slug: string;
    products_count: number;
}

interface PaginatedData {
    data: Product[];
    links: Array<{
        url?: string;
        label: string;
        active: boolean;
    }>;
    meta: {
        current_page: number;
        last_page: number;
        total: number;
        per_page: number;
    };
}

interface Filters {
    search?: string;
    category?: string;
    min_price?: string;
    max_price?: string;
    type?: string;
    sort?: string;
    order?: string;
}

interface Props {
    products: PaginatedData;
    categories: Category[];
    filters: Filters;
    [key: string]: unknown;
}

export default function ShopIndex({ products, categories, filters }: Props) {
    const [searchTerm, setSearchTerm] = useState(filters.search || '');
    const [selectedCategory, setSelectedCategory] = useState(filters.category || '');
    // Future implementation for price range filters

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(window.location.search);
        
        if (searchTerm) {
            params.set('search', searchTerm);
        } else {
            params.delete('search');
        }
        
        params.delete('page'); // Reset to first page
        router.get(`/shop?${params.toString()}`);
    };

    const handleCategoryFilter = (categorySlug: string) => {
        const params = new URLSearchParams(window.location.search);
        
        if (categorySlug) {
            params.set('category', categorySlug);
        } else {
            params.delete('category');
        }
        
        params.delete('page');
        router.get(`/shop?${params.toString()}`);
    };

    const handleSortChange = (sortValue: string) => {
        const params = new URLSearchParams(window.location.search);
        params.set('sort', sortValue);
        params.delete('page');
        router.get(`/shop?${params.toString()}`);
    };

    return (
        <>
            <Head title="Shop - Digital Products & Services" />
            
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                {/* Header */}
                <div className="bg-white dark:bg-gray-800 shadow-sm">
                    <div className="container mx-auto px-6 py-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">🛍️ Digital Shop</h1>
                                <p className="text-gray-600 dark:text-gray-300 mt-2">
                                    Discover premium digital products and professional services
                                </p>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                                {products.meta.total} products found
                            </div>
                        </div>

                        {/* Search & Filters */}
                        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
                            {/* Search */}
                            <form onSubmit={handleSearch} className="lg:col-span-2">
                                <div className="flex">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="🔍 Search products..."
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                    <Button type="submit" className="rounded-l-none">
                                        Search
                                    </Button>
                                </div>
                            </form>

                            {/* Category Filter */}
                            <div>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => {
                                        setSelectedCategory(e.target.value);
                                        handleCategoryFilter(e.target.value);
                                    }}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    <option value="">All Categories</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.slug}>
                                            {category.name} ({category.products_count})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort */}
                            <div>
                                <select
                                    value={filters.sort || 'created_at'}
                                    onChange={(e) => handleSortChange(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    <option value="created_at">Newest First</option>
                                    <option value="price_low">Price: Low to High</option>
                                    <option value="price_high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                    <option value="popular">Most Popular</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="container mx-auto px-6 py-8">
                    {products.data.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {products.data.map((product) => (
                                    <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
                                        {/* Product Image */}
                                        <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center relative">
                                            {product.sale_price && (
                                                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                    SALE
                                                </div>
                                            )}
                                            <span className="text-4xl">
                                                {product.category.name.includes('App') ? '📱' : 
                                                 product.category.name.includes('Web') ? '🌐' : 
                                                 product.category.name.includes('Design') ? '🎨' : '💎'}
                                            </span>
                                        </div>

                                        {/* Product Details */}
                                        <div className="p-4">
                                            <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">
                                                {product.category.name}
                                            </div>
                                            <h3 className="font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {product.name}
                                            </h3>
                                            {product.short_description && (
                                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                                                    {product.short_description}
                                                </p>
                                            )}

                                            {/* Rating & Downloads */}
                                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                                                <div className="flex items-center">
                                                    ⭐ {product.rating.toFixed(1)}
                                                </div>
                                                <div>
                                                    📥 {product.downloads.toLocaleString()}
                                                </div>
                                            </div>

                                            {/* Price */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-lg font-bold text-gray-800 dark:text-white">
                                                        ${product.sale_price || product.price}
                                                    </span>
                                                    {product.sale_price && (
                                                        <span className="text-sm text-gray-500 line-through">
                                                            ${product.price}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="space-y-2">
                                                <Link href={`/shop/products/${product.slug}`} className="block">
                                                    <Button className="w-full" variant="outline">
                                                        View Details
                                                    </Button>
                                                </Link>
                                                <Button className="w-full">
                                                    🛒 Add to Cart
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            {products.meta.last_page > 1 && (
                                <div className="flex justify-center mt-12">
                                    <nav className="flex space-x-2">
                                        {products.links.map((link, index) => (
                                            <Link
                                                key={index}
                                                href={link.url || '#'}
                                                className={`px-3 py-2 text-sm rounded-lg ${
                                                    link.active
                                                        ? 'bg-blue-600 text-white'
                                                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                                } ${!link.url ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                dangerouslySetInnerHTML={{ __html: link.label }}
                                            />
                                        ))}
                                    </nav>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">😔</div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                No products found
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Try adjusting your search or filters to find what you're looking for.
                            </p>
                            <Button onClick={() => router.get('/shop')}>
                                🔄 Reset Filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}