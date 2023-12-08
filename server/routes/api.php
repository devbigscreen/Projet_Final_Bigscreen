<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Admin routes
Route::post('/login', [AdminController::class, 'login']);
Route::post('/register', [AdminController::class, 'store']);


// Questions routes
Route::post('/questions/add', [QuestionController::class, 'addQuestion']);
Route::get('/questions/get', [QuestionController::class, 'getAllQuestions']);
Route::get('/question/get/{question}', [QuestionController::class, 'getOneQuestion']);
Route::put('/question/update/{question}', [QuestionController::class, 'updateQuestion']);
Route::delete('/question/delete/{question}', [QuestionController::class, 'destroy']);


// User routes
Route::post('/user/add', [UserController::class, 'addUser']);
Route::get('user/userAnswers', [UserController::class, 'getAllUserAnswers']);
Route::get('user/userAnswers/{id}', [UserController::class, 'getOneUserAnswers']);

