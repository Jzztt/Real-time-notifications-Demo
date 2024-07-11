<?php

namespace Database\Seeders;

use App\Models\Lane;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LaneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Lane::create([
            'name' => 'To Do',
        ]);

        Lane::create([
            'name' => 'In Progress',
        ]);

        Lane::create([
            'name' => 'Done',
        ]);
    }
}
