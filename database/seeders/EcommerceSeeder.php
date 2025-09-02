<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class EcommerceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create specific categories
        $categories = [
            [
                'name' => 'Mobile App Templates',
                'slug' => 'mobile-app-templates',
                'description' => 'Ready-to-use mobile app templates for iOS and Android',
                'is_active' => true,
            ],
            [
                'name' => 'Web Development',
                'slug' => 'web-development',
                'description' => 'Complete web applications and development services',
                'is_active' => true,
            ],
            [
                'name' => 'UI/UX Design',
                'slug' => 'ui-ux-design',
                'description' => 'Professional UI/UX design resources and templates',
                'is_active' => true,
            ],
            [
                'name' => 'WordPress Themes',
                'slug' => 'wordpress-themes',
                'description' => 'Premium WordPress themes for all types of websites',
                'is_active' => true,
            ],
            [
                'name' => 'React Components',
                'slug' => 'react-components',
                'description' => 'Reusable React components and libraries',
                'is_active' => true,
            ],
            [
                'name' => 'Laravel Packages',
                'slug' => 'laravel-packages',
                'description' => 'Laravel packages and complete applications',
                'is_active' => true,
            ],
        ];

        foreach ($categories as $categoryData) {
            $category = Category::create($categoryData);
            
            // Create 8-12 products for each category
            $productCount = random_int(8, 12);
            
            for ($i = 0; $i < $productCount; $i++) {
                Product::factory()
                    ->for($category)
                    ->create([
                        'is_featured' => $i < 2, // First 2 products are featured
                        'is_active' => true,
                    ]);
            }
        }

        // Create some additional featured products
        Product::factory()
            ->count(6)
            ->featured()
            ->create();
    }
}