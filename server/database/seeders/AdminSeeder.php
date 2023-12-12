<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

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
            User::create([
                'email' => $adminData['email'],
                'password' => $adminData['password'],
            ]);
        }
    }
}
