import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { AdminLayout } from '@/components/admin-layout';
import { Button } from '@/components/ui/button';

interface Stats {
    total_products: number;
    active_products: number;
    total_categories: number;
    active_categories: number;
    total_customers: number;
    total_orders: number;
    pending_orders: number;
    completed_orders: number;
    total_revenue: number;
    pending_reviews: number;
    total_downloads: number;
    avg_rating: number;
}

interface Order {
    id: number;
    order_number: string;
    total: number;
    status: string;
    payment_status: string;
    created_at: string;
    user: {
        name: string;
        email: string;
    };
    items: Array<{
        product_name: string;
        quantity: number;
        total: number;
    }>;
}

interface Product {
    id: number;
    name: string;
    price: number;
    order_items_count: number;
}

interface SalesData {
    date: string;
    total: number;
}

interface Props {
    stats: Stats;
    recentOrders: Order[];
    topProducts: Product[];
    salesData: SalesData[];
    [key: string]: unknown;
}

export default function AdminDashboard({ stats, recentOrders, topProducts }: Props) {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />
            
            <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                            📊 Admin Dashboard
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                            Manage your digital products and track business performance
                        </p>
                    </div>
                    <div className="flex space-x-3">
                        <Link href="/admin/products/create">
                            <Button>➕ Add Product</Button>
                        </Link>
                        <Link href="/admin/categories">
                            <Button variant="outline">🏷️ Categories</Button>
                        </Link>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Total Products</p>
                                <p className="text-2xl font-bold text-gray-800 dark:text-white">{stats.total_products}</p>
                                <p className="text-xs text-green-600 dark:text-green-400">
                                    {stats.active_products} active
                                </p>
                            </div>
                            <div className="text-3xl">📦</div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</p>
                                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                                    {formatCurrency(stats.total_revenue)}
                                </p>
                                <p className="text-xs text-blue-600 dark:text-blue-400">
                                    {stats.completed_orders} orders
                                </p>
                            </div>
                            <div className="text-3xl">💰</div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Total Customers</p>
                                <p className="text-2xl font-bold text-gray-800 dark:text-white">{stats.total_customers}</p>
                                <p className="text-xs text-purple-600 dark:text-purple-400">
                                    {stats.pending_orders} pending orders
                                </p>
                            </div>
                            <div className="text-3xl">👥</div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Total Downloads</p>
                                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                                    {stats.total_downloads.toLocaleString()}
                                </p>
                                <p className="text-xs text-yellow-600 dark:text-yellow-400">
                                    ⭐ {stats.avg_rating.toFixed(1)} avg rating
                                </p>
                            </div>
                            <div className="text-3xl">📥</div>
                        </div>
                    </div>
                </div>

                {/* Secondary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">📋 Order Status</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Pending</span>
                                <span className="font-semibold text-orange-600">{stats.pending_orders}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Completed</span>
                                <span className="font-semibold text-green-600">{stats.completed_orders}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Total</span>
                                <span className="font-semibold text-gray-800 dark:text-white">{stats.total_orders}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">🏷️ Categories</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Active</span>
                                <span className="font-semibold text-green-600">{stats.active_categories}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Total</span>
                                <span className="font-semibold text-gray-800 dark:text-white">{stats.total_categories}</span>
                            </div>
                            <Link href="/admin/categories" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                                Manage Categories →
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">⭐ Reviews</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Pending</span>
                                <span className="font-semibold text-orange-600">{stats.pending_reviews}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">Avg Rating</span>
                                <span className="font-semibold text-gray-800 dark:text-white">{stats.avg_rating.toFixed(1)}/5</span>
                            </div>
                            <Link href="/admin/reviews" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                                Moderate Reviews →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Recent Orders & Top Products */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Recent Orders */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">🛒 Recent Orders</h3>
                                <Link href="/admin/orders" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                                    View All →
                                </Link>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            {recentOrders.length > 0 ? (
                                recentOrders.map((order) => (
                                    <div key={order.id} className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <div>
                                                <p className="font-semibold text-gray-800 dark:text-white">
                                                    #{order.order_number}
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {order.user.name}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-semibold text-gray-800 dark:text-white">
                                                    {formatCurrency(order.total)}
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {formatDate(order.created_at)}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                order.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                                                order.status === 'pending' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300' :
                                                'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                            }`}>
                                                {order.status}
                                            </span>
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                order.payment_status === 'paid' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                                                'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                                            }`}>
                                                {order.payment_status}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                                    No recent orders
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Top Products */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">🏆 Top Products</h3>
                                <Link href="/admin/products" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                                    Manage Products →
                                </Link>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            {topProducts.length > 0 ? (
                                topProducts.map((product, index) => (
                                    <div key={product.id} className="p-6 flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                                                <span className="text-lg">#{index + 1}</span>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800 dark:text-white">
                                                    {product.name}
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {formatCurrency(product.price)}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-gray-800 dark:text-white">
                                                {product.order_items_count}
                                            </p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">sales</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                                    No sales data available
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6">🚀 Quick Actions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Link href="/admin/products/create">
                            <Button variant="outline" className="w-full h-20 flex flex-col space-y-2">
                                <span className="text-2xl">➕</span>
                                <span className="text-sm">Add Product</span>
                            </Button>
                        </Link>
                        <Link href="/admin/categories">
                            <Button variant="outline" className="w-full h-20 flex flex-col space-y-2">
                                <span className="text-2xl">🏷️</span>
                                <span className="text-sm">Categories</span>
                            </Button>
                        </Link>
                        <Link href="/admin/orders">
                            <Button variant="outline" className="w-full h-20 flex flex-col space-y-2">
                                <span className="text-2xl">📦</span>
                                <span className="text-sm">Orders</span>
                            </Button>
                        </Link>
                        <Link href="/admin/customers">
                            <Button variant="outline" className="w-full h-20 flex flex-col space-y-2">
                                <span className="text-2xl">👥</span>
                                <span className="text-sm">Customers</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}