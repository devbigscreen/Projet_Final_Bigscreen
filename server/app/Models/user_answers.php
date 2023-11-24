<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_answers extends Model
{
    use HasFactory;

    protected $fillable = [
        'answer_id',
        'question_id',
        'user_id',
        'answers',
    ];

}
