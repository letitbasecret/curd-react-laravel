<?php

namespace Database\Seeders;
use Illuminate\support\facades\DB;
use Illuminate\support\facades\Hash;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
// use App\Models\Product;

use illuminate\support\str;
class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('products')->insert([
            'name'=>str::random(10),
            "description"=>"mdk fnsoif sifh sohfifhhfo hh iugf iuadha",
            "price"=>"10000",
            "file"=>"public/store/image/jsiuhd.jsx"],


        );
    }
}
