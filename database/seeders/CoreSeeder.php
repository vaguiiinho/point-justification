<?php

namespace Database\Seeders;

use App\Models\Core;
use Illuminate\Database\Seeder;

class CoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Core::factory(10)->create();
    }
}
