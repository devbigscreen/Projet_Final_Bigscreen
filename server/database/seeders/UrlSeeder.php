<?php

namespace Database\Seeders;

use App\Models\UserUrl;
use Illuminate\Database\Seeder;

class UrlSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'user_id' => 'test1',
                'url' => 'http://localhost:5173/user/answers/test1'
            ],
            [
                'user_id' => 'test2',
                'url' => 'http://localhost:5173/user/answers/test2'
            ],
            [
                'user_id' => 'test3',
                'url' => 'http://localhost:5173/user/answers/test3'
            ],
            [
                'user_id' => 'test4',
                'url' => 'http://localhost:5173/user/answers/test4'
            ],
            [
                'user_id' => 'test5',
                'url' => 'http://localhost:5173/user/answers/test5'
            ],

        ];
        foreach ($data as $urlData) {
            UserUrl::create([
                'user_id' => $urlData['user_id'],
                'url' => $urlData['url'],

            ]);
        }
    }
}
