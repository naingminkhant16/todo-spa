<?php

namespace App\Http\Controllers;

use App\Interfaces\Service\Todo\TodoServiceInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function __construct(private TodoServiceInterface $todoServiceInterface) {}

    public function home()
    {
        $todos = $this->todoServiceInterface->getAuthTodos();

        return Inertia::render("Home/Home", ['todos' => $todos]);
    }

    public function doneTasks()
    {
        $todos = $this->todoServiceInterface->getAuthDoneTasks();

        return Inertia::render('Home/DoneTasks', ['todos' => $todos]);
    }

    public function changePasswordFrom()
    {
        return Inertia::render('Password/ChangePassword');
    }
}
