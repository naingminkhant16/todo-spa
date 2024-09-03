<?php

namespace App\Interfaces\Service\User;

use App\Models\User;

interface UserServiceInterface
{
    public function register(string $name, string $email, string $password): User;

    public function login(string $email, string $password);
}
