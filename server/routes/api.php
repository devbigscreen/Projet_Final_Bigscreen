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
Route::post('/admin/login', [AdminController::class, 'login']);
Route::post('/admin/register', [AdminController::class, 'store']);
Route::delete('/admin/delete/{id}', [AdminController::class, 'destroy']);


// Questions routes
Route::post('/questions/add', [QuestionController::class, 'addQuestion']);
Route::get('/questions/get', [QuestionController::class, 'getAllQuestions']);
Route::get('/question/get/{question}', [QuestionController::class, 'getOneQuestion']);
Route::put('/question/update/{question}', [QuestionController::class, 'updateQuestion']);
Route::delete('/question/delete/{question}', [QuestionController::class, 'destroy']);


// User routes
Route::post('/user/add', [UserController::class, 'addUser']);
Route::get('/users/answers', [UserController::class, 'getAllUsersAnswers']);
Route::get('/user/answers/{id}', [UserController::class, 'getOneUserAnswers']);
Route::get('/user/url/{id}', [UserController::class, 'getUserUrl']);
Route::delete('/user/delete/{id}', [UserController::class, 'destroy']);

