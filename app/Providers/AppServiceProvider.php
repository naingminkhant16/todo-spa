<?php

namespace App\Providers;

use App\Interfaces\Repository\Todo\TodoRepositoryInterface;
use App\Interfaces\Repository\User\UserRepositoryInterface;
use App\Interfaces\Service\Todo\TodoServiceInterface;
use App\Interfaces\Service\User\UserServiceInterface;
use App\Repositories\Todo\TodoRepository;
use App\Repositories\User\UserRepository;
use App\Services\Todo\TodoService;
use App\Services\User\UserService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //repositories
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(TodoRepositoryInterface::class, TodoRepository::class);

        //services
        $this->app->bind(UserServiceInterface::class, UserService::class);
        $this->app->bind(TodoServiceInterface::class, TodoService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // 
    }
}
