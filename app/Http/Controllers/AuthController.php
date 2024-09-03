<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;
use App\Interfaces\Service\User\UserServiceInterface;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function __construct(private UserServiceInterface $userServiceInterface) {}

    public function registerForm()
    {
        return Inertia::render('Auth/Register');
    }

    public function register(UserRegisterRequest $request)
    {
        $user =   $this->userServiceInterface->register($request->name, $request->email, $request->password);
        if ($user) {
            return redirect()->route('login');
        }
    }

    public function loginForm()
    {
        return Inertia::render('Auth/Login');
    }

    public function login(UserLoginRequest $request)
    {
        $result =  $this->userServiceInterface->login($request->email, $request->password);
        if ($result) {
            return redirect()->route('page.home');
        } else {
            return back()->withErrors(['email' => 'Incorrect email or password!'])->withInput();
        }
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('login');
    }
}
