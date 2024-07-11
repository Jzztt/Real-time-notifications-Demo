<?php

namespace Database\Seeders;

use App\Models\Ticket;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Ticket::create(['title' => 'Analysis', 'lane_id' => 1]);
        Ticket::create(['title' => 'Coding', 'lane_id' => 1]);
        Ticket::create(['title' => 'User Testing', 'lane_id' => 2]);
        Ticket::create(['title' => 'Research', 'lane_id' => 3]);
    }
}
