<?php

namespace Database\Seeders;
Use Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(ProductSeeder::class);
        \App\Models\Product::factory(10)->create();

        // \App\Models\Product::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        //     "password"=>("123456"),        ]);
    }
}
