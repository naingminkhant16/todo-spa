<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PasswordController;
use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

//Pages Controller
Route::middleware('auth')->group(function () {
    Route::get('/', [PageController::class, 'home'])->name('page.home');
    Route::get('/done-tasks', [PageController::class, 'doneTasks'])->name('page.done-tasks');
});

//Auth Routes
Route::middleware('guest')->group(function () {
    Route::get('/register', [AuthController::class, 'registerForm'])->name('auth.register-form');
    Route::post('/register', [AuthController::class, 'register'])->name("auth.register");
    Route::get('/login', [AuthController::class, 'loginForm'])->name('login');
    Route::post('/login', [AuthController::class, 'login'])->name('auth.login');
});

Route::post('/logout', [AuthController::class, 'logout'])
    ->middleware('auth')
    ->name('auth.logout');

//Todos
Route::middleware('auth')->prefix('/todo')->group(function () {
    Route::post('', [TodoController::class, 'store'])->name('todo.store');
    Route::delete('/{todo}', [TodoController::class, 'destroy'])->name('todo.destroy');
    Route::patch('/make-completed/{todo}', [TodoController::class, 'makeCompleted'])
        ->name('todo.make-completed');
    Route::patch('/make-uncomplete/{todo}', [TodoController::class, 'makeUncomplete'])->name('todo.make-uncomplete');
});

//Password
Route::middleware('auth')->group(function () {
    Route::get('/change-password', [PageController::class, 'changePassword'])->name('page.password.change');
    Route::post('/change-password', [PasswordController::class, 'changePassword'])->name('password.change');
});
