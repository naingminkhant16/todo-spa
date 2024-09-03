<?php

namespace App\Services\User;

use App\Interfaces\Repository\User\UserRepositoryInterface;
use App\Interfaces\Service\User\UserServiceInterface;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserService implements UserServiceInterface
{
    public function __construct(private UserRepositoryInterface $userRepositoryInterface) {}

    function register(string $name, string $email, string $password): User
    {
        return $this->userRepositoryInterface->register(
            $name,
            $email,
            Hash::make($password)
        );
    }

    function login(string $email, string $password)
    {
        return Auth::attempt(['email' => $email, 'password' => $password]);
    }
}
