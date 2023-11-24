<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data =
            [
                [
                    'email' => 'admin@bigscreen.com',
                    'password' => bcrypt('password'),
                ]
            ];

        foreach ($data as $adminData) {
            Admin::create([
                'email' => $adminData['email'],
                'password' => $adminData['password'],
            ]);
        }
    }
}
