import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    service_type: string;
    [key: string]: string;
}

export default function Contact() {
    const { data, setData, post, processing, errors } = useForm<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
        service_type: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => {
                // Handle success - could show a success message
                setData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    service_type: '',
                });
            },
        });
    };

    return (
        <>
            <Head title="Contact Us - DigitalHub" />
            
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
                                <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                                <Link href="/contact" className="text-blue-600 font-semibold">Contact</Link>
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

                {/* Contact Content */}
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                                📞 Get In Touch
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Have a project in mind? Need support with a product? We'd love to hear from you!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Contact Info */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
                                        💬 Let's Talk
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                                                <span className="text-xl">📧</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                                                <p className="text-gray-600 dark:text-gray-300">contact@digitalhub.com</p>
                                                <p className="text-gray-600 dark:text-gray-300">support@digitalhub.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                                                <span className="text-xl">📱</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 dark:text-white">Phone</h4>
                                                <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri 9AM-6PM EST</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                                                <span className="text-xl">💬</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 dark:text-white">Live Chat</h4>
                                                <p className="text-gray-600 dark:text-gray-300">Available 24/7</p>
                                                <Button variant="outline" size="sm" className="mt-2">
                                                    Start Chat
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Services */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                                        🛠️ Our Services
                                    </h4>
                                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                        <li className="flex items-center">
                                            <span className="mr-2">📱</span>
                                            Mobile App Development
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">🌐</span>
                                            Web Development
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">🎨</span>
                                            UI/UX Design
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">💻</span>
                                            Custom Solutions
                                        </li>
                                        <li className="flex items-center">
                                            <span className="mr-2">🔧</span>
                                            Technical Support
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="lg:col-span-2">
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm">
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                                        📝 Send us a Message
                                    </h3>
                                    
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Your Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={data.name}
                                                    onChange={(e) => setData('name', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                                    placeholder="John Doe"
                                                    required
                                                />
                                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={data.email}
                                                    onChange={(e) => setData('email', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                                    placeholder="john@example.com"
                                                    required
                                                />
                                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="service_type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Service Type
                                            </label>
                                            <select
                                                id="service_type"
                                                value={data.service_type}
                                                onChange={(e) => setData('service_type', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                            >
                                                <option value="">Select a service...</option>
                                                <option value="mobile-app">Mobile App Development</option>
                                                <option value="web-development">Web Development</option>
                                                <option value="ui-ux">UI/UX Design</option>
                                                <option value="custom">Custom Development</option>
                                                <option value="support">Technical Support</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                value={data.subject}
                                                onChange={(e) => setData('subject', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                                placeholder="Project inquiry..."
                                                required
                                            />
                                            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                id="message"
                                                rows={6}
                                                value={data.message}
                                                onChange={(e) => setData('message', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                                                placeholder="Tell us about your project or inquiry..."
                                                required
                                            />
                                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                We'll get back to you within 24 hours! ⚡
                                            </p>
                                            <Button type="submit" disabled={processing} size="lg">
                                                {processing ? '🔄 Sending...' : '🚀 Send Message'}
                                            </Button>
                                        </div>
                                    </form>
                                </div>

                                {/* FAQ */}
                                <div className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white">
                                    <h4 className="text-lg font-semibold mb-4">❓ Frequently Asked Questions</h4>
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <p className="font-medium">How long does custom development take?</p>
                                            <p className="text-blue-100">Typically 2-8 weeks depending on complexity</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">Do you provide ongoing support?</p>
                                            <p className="text-blue-100">Yes! We offer 6 months free support with all projects</p>
                                        </div>
                                        <div>
                                            <p className="font-medium">Can I see examples of your work?</p>
                                            <p className="text-blue-100">Check out our portfolio in the shop section!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}