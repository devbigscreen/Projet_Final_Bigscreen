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
                'url' => 'https://www.bigscreen.com/1'
            ],
            [
                'user_id' => 'test2',
                'url' => 'https://www.bigscreen.com/2'
            ],
            [
                'user_id' => 'test3',
                'url' => 'https://www.bigscreen.com/3'
            ],
            [
                'user_id' => 'test4',
                'url' => 'https://www.bigscreen.com/4'
            ],
            [
                'user_id' => 'test5',
                'url' => 'https://www.bigscreen.com/5'
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
