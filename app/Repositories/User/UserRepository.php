<?php

namespace App\Repositories\User;

use App\Interfaces\Repository\User\UserRepositoryInterface;
use App\Models\User;
use Carbon\Carbon;

class UserRepository implements UserRepositoryInterface
{
    public function __construct(private User $user) {}

    function register(string $name, string $email, string $password): User
    {
        return $this->user->create([
            "name" => $name,
            "email" => $email,
            "email_verified_at" => Carbon::now(),
            "password" => $password,
        ]);
    }
}
