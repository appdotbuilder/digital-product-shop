<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        $featuredProducts = Product::with('category')
            ->active()
            ->featured()
            ->limit(6)
            ->get();

        $categories = Category::active()
            ->withCount('products')
            ->limit(8)
            ->get();

        $stats = [
            'total_products' => Product::active()->count(),
            'total_categories' => Category::active()->count(),
            'total_downloads' => Product::sum('downloads'),
            'customer_rating' => 4.8, // This could be calculated from reviews
        ];

        return Inertia::render('welcome', [
            'featuredProducts' => $featuredProducts,
            'categories' => $categories,
            'stats' => $stats,
        ]);
    }
}