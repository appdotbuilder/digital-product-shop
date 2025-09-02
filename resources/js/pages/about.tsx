import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function About() {
    return (
        <>
            <Head title="About Us - DigitalHub" />
            
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-sm shadow-sm">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">💎</span>
                                </div>
                                <h1 className="text-xl font-bold text-gray-800 dark:text-white">DigitalHub</h1>
                            </Link>
                            
                            <nav className="hidden md:flex items-center space-x-8">
                                <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                                <Link href="/shop" className="text-gray-700 hover:text-blue-600">Shop</Link>
                                <Link href="/about" className="text-blue-600 font-semibold">About</Link>
                                <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
                            </nav>

                            <div className="flex items-center space-x-4">
                                <Link href="/login">
                                    <Button variant="outline" size="sm">Login</Button>
                                </Link>
                                <Link href="/register">
                                    <Button size="sm">Register</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>

                {/* About Content */}
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                                🏢 About DigitalHub
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                We're a team of passionate developers and designers creating premium digital products 
                                and delivering exceptional app development services.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">🎯 Our Mission</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    To empower businesses and individuals with high-quality digital solutions that drive growth, 
                                    enhance user experience, and deliver measurable results.
                                </p>
                                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-center">
                                        <span className="mr-3">✅</span>
                                        Premium digital products and templates
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-3">✅</span>
                                        Custom app development services
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-3">✅</span>
                                        Expert technical support
                                    </li>
                                    <li className="flex items-center">
                                        <span className="mr-3">✅</span>
                                        Competitive pricing and value
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">📊 Why Choose Us?</h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-700 dark:text-gray-300">Quality</span>
                                            <span className="font-semibold">98%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-700 dark:text-gray-300">Customer Satisfaction</span>
                                            <span className="font-semibold">96%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '96%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-gray-700 dark:text-gray-300">On-Time Delivery</span>
                                            <span className="font-semibold">94%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">🛠️ Our Services</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">📱</div>
                                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Mobile Apps</h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Native and cross-platform mobile app development for iOS and Android
                                </p>
                                <Button variant="outline" size="sm">Learn More</Button>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🌐</div>
                                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Web Development</h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Modern web applications using the latest technologies and frameworks
                                </p>
                                <Button variant="outline" size="sm">Learn More</Button>
                            </div>
                            
                            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">🎨</div>
                                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">UI/UX Design</h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Beautiful, user-friendly designs that convert visitors into customers
                                </p>
                                <Button variant="outline" size="sm">Learn More</Button>
                            </div>
                        </div>

                        {/* Team Stats */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
                            <h3 className="text-2xl font-bold mb-8">🚀 Our Impact</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div>
                                    <div className="text-3xl font-bold mb-2">500+</div>
                                    <div className="text-blue-200">Projects Delivered</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">50+</div>
                                    <div className="text-blue-200">Happy Clients</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">5+</div>
                                    <div className="text-blue-200">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">24/7</div>
                                    <div className="text-blue-200">Support</div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center mt-16">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                Ready to Start Your Project?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                                Whether you need digital products or custom development, we're here to help bring your ideas to life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button size="lg">💬 Get In Touch</Button>
                                </Link>
                                <Link href="/shop">
                                    <Button variant="outline" size="lg">🛍️ Browse Products</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}