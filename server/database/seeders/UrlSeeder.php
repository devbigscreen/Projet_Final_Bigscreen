<?php

namespace Database\Seeders;

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
          'user_url' => 'https://www.bigscreen.com/1'
      ],
        [
          'user_id' => 'test2',
          'user_url' => 'https://www.bigscreen.com/2'
      ],
      [
        'user_id' => 'test3',
        'user_url' => 'https://www.bigscreen.com/3'
    ],

      ];
      foreach ($data as $urlData) {
        Url::create([
            'user_id' => $urlData['user_id'],
            'user_url' => $urlData['user_url'],
          
        ]);
    }
    }
}
