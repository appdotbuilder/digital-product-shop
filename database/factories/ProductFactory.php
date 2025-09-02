<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $products = [
            'React Dashboard Template',
            'Laravel CRM System',
            'Mobile App UI Kit',
            'E-commerce Template',
            'Landing Page Builder',
            'Admin Panel Template',
            'Social Media App',
            'Booking System',
            'Chat Application',
            'Portfolio Website',
        ];

        $name = fake()->randomElement($products);
        $price = fake()->randomFloat(2, 19, 299);
        $isOnSale = fake()->boolean(30);
        
        return [
            'name' => $name,
            'slug' => Str::slug($name) . '-' . fake()->randomNumber(3),
            'description' => fake()->paragraphs(3, true),
            'short_description' => fake()->sentence(),
            'price' => $price,
            'sale_price' => $isOnSale ? fake()->randomFloat(2, 9, $price - 5) : null,
            'type' => fake()->randomElement(['digital', 'service']),
            'images' => [
                'https://via.placeholder.com/600x400?text=' . urlencode($name),
            ],
            'download_files' => [
                'main.zip',
                'documentation.pdf',
                'license.txt',
            ],
            'features' => [
                'Responsive Design',
                'Modern UI/UX',
                'Clean Code',
                'Documentation Included',
                'Browser Compatible',
            ],
            'category_id' => Category::factory(),
            'is_active' => fake()->boolean(95),
            'is_featured' => fake()->boolean(20),
            'downloads' => fake()->numberBetween(0, 5000),
            'rating' => fake()->randomFloat(1, 3.0, 5.0),
            'review_count' => fake()->numberBetween(0, 100),
        ];
    }

    /**
     * Indicate that the product is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }

    /**
     * Indicate that the product is on sale.
     */
    public function onSale(): static
    {
        return $this->state(function (array $attributes) {
            $price = $attributes['price'] ?? 99;
            return [
                'sale_price' => fake()->randomFloat(2, $price * 0.5, $price * 0.8),
            ];
        });
    }

    /**
     * Indicate that the product is a digital product.
     */
    public function digital(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'digital',
        ]);
    }

    /**
     * Indicate that the product is a service.
     */
    public function service(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'service',
            'download_files' => null,
        ]);
    }
}