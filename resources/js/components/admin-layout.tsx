import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface AdminLayoutProps {
    children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            
            {/* Admin Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/admin/dashboard" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">💎</span>
                            </div>
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">DigitalHub Admin</h1>
                        </Link>
                        
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link href="/admin/dashboard" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                Dashboard
                            </Link>
                            <Link href="/admin/products" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                Products
                            </Link>
                            <Link href="/admin/orders" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                Orders
                            </Link>
                            <Link href="/admin/customers" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                Customers
                            </Link>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <Link href="/" target="_blank">
                                <Button variant="outline" size="sm">View Site</Button>
                            </Link>
                            <Link href="/dashboard">
                                <Button variant="outline" size="sm">User Dashboard</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-8">
                {children}
            </main>
        </div>
    );
}