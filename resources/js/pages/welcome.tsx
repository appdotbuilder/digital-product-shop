import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Product {
    id: number;
    name: string;
    slug: string;
    price: number;
    sale_price?: number;
    images?: string[];
    category: {
        name: string;
        slug: string;
    };
    rating: number;
    downloads: number;
}

interface Category {
    id: number;
    name: string;
    slug: string;
    products_count: number;
}

interface Stats {
    total_products: number;
    total_categories: number;
    total_downloads: number;
    customer_rating: number;
}

interface Props {
    featuredProducts: Product[];
    categories: Category[];
    stats: Stats;
    [key: string]: unknown;
}

export default function Welcome({ featuredProducts, categories, stats }: Props) {
    return (
        <>
            <Head title="Digital Products & App Development Services">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 dark:bg-gray-900/80">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">💎</span>
                                </div>
                                <h1 className="text-xl font-bold text-gray-800 dark:text-white">DigitalHub</h1>
                            </div>
                            
                            <nav className="hidden md:flex items-center space-x-8">
                                <Link href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Home</Link>
                                <Link href="/shop" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Shop</Link>
                                <Link href="/about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About</Link>
                                <Link href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Contact</Link>
                            </nav>

                            <div className="flex items-center space-x-4">
                                <Link href="/cart" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                    🛒
                                </Link>
                                <Link href="/login">
                                    <Button variant="outline" size="sm">Login</Button>
                                </Link>
                                <Link href="/register">
                                    <Button size="sm">Get Started</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
                                🚀 Premium Digital Products & 
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> App Development</span>
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                                Discover high-quality digital products and professional app development services. 
                                From templates to custom solutions - we've got you covered! ✨
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                                <Link href="/shop">
                                    <Button size="lg" className="w-full sm:w-auto">
                                        🛍️ Browse Products
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                        📞 Custom Development
                                    </Button>
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6">
                                    <div className="text-2xl font-bold text-blue-600">{stats.total_products}+</div>
                                    <div className="text-gray-600 dark:text-gray-300">Digital Products</div>
                                </div>
                                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6">
                                    <div className="text-2xl font-bold text-indigo-600">{stats.total_downloads.toLocaleString()}+</div>
                                    <div className="text-gray-600 dark:text-gray-300">Downloads</div>
                                </div>
                                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6">
                                    <div className="text-2xl font-bold text-purple-600">{stats.customer_rating}⭐</div>
                                    <div className="text-gray-600 dark:text-gray-300">Customer Rating</div>
                                </div>
                                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6">
                                    <div className="text-2xl font-bold text-green-600">{stats.total_categories}</div>
                                    <div className="text-gray-600 dark:text-gray-300">Categories</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="py-16 bg-white/50 dark:bg-gray-800/50">
                    <div className="container mx-auto px-6">
                        <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
                            🏪 Product Categories
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {categories.map((category) => (
                                <Link
                                    key={category.id}
                                    href={`/shop?category=${category.slug}`}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 text-center group"
                                >
                                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                                        {category.name.includes('App') ? '📱' : 
                                         category.name.includes('Web') ? '🌐' : 
                                         category.name.includes('Design') ? '🎨' : '💎'}
                                    </div>
                                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">{category.name}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{category.products_count} products</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                                ⭐ Featured Products
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Our most popular digital products and services
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredProducts.map((product) => (
                                <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden group">
                                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                                        <span className="text-4xl">
                                            {product.category.name.includes('App') ? '📱' : 
                                             product.category.name.includes('Web') ? '🌐' : 
                                             product.category.name.includes('Design') ? '🎨' : '💎'}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                                            {product.category.name}
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {product.name}
                                        </h4>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-xl font-bold text-gray-800 dark:text-white">
                                                    ${product.sale_price || product.price}
                                                </span>
                                                {product.sale_price && (
                                                    <span className="text-sm text-gray-500 line-through">
                                                        ${product.price}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                                ⭐ {product.rating} ({product.downloads})
                                            </div>
                                        </div>
                                        <Link href={`/shop/products/${product.slug}`} className="mt-4 block">
                                            <Button className="w-full" variant="outline">
                                                View Details
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link href="/shop">
                                <Button size="lg">
                                    🔍 View All Products
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
                    <div className="container mx-auto px-6 text-center">
                        <h3 className="text-3xl font-bold text-white mb-6">
                            🎯 Ready to Start Your Next Project?
                        </h3>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Whether you need digital products or custom app development, we're here to help bring your ideas to life!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/shop">
                                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                                    🛒 Shop Now
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
                                    💬 Get Custom Quote
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">💎</span>
                                    </div>
                                    <h4 className="text-xl font-bold">DigitalHub</h4>
                                </div>
                                <p className="text-gray-400">
                                    Your trusted partner for digital products and app development services.
                                </p>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-4">Products</h5>
                                <ul className="space-y-2 text-gray-400">
                                    <li><Link href="/shop?type=digital" className="hover:text-white">Digital Products</Link></li>
                                    <li><Link href="/shop?type=service" className="hover:text-white">Development Services</Link></li>
                                    <li><Link href="/shop" className="hover:text-white">All Categories</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-4">Company</h5>
                                <ul className="space-y-2 text-gray-400">
                                    <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                                    <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                                    <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-4">Support</h5>
                                <ul className="space-y-2 text-gray-400">
                                    <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                                    <li><Link href="/downloads" className="hover:text-white">My Downloads</Link></li>
                                    <li><Link href="/account" className="hover:text-white">My Account</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                            <p className="text-gray-400">
                                © 2024 DigitalHub. All rights reserved. Built with ❤️ for digital creators.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}