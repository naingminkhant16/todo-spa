<?php

namespace App\Interfaces\Repository\User;

use App\Models\User;

interface UserRepositoryInterface
{
    function register(String $name, String $email, String $password): User;
}
