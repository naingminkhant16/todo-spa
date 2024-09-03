<?php

namespace App\Services\Todo;

use App\Interfaces\Repository\Todo\TodoRepositoryInterface;
use App\Interfaces\Service\Todo\TodoServiceInterface;
use App\Models\Todo;
use Illuminate\Support\Facades\Auth;

class TodoService implements TodoServiceInterface
{
    public function __construct(private TodoRepositoryInterface $todoRepositoryInterface) {}

    function getAll()
    {
        return $this->todoRepositoryInterface->getAll();
    }

    function getAuthTodos()
    {
        return $this->todoRepositoryInterface->getAuthTodos();
    }

    function store(string $title, ?string $description)
    {
        return $this->todoRepositoryInterface->store($title, $description, Auth::id());
    }

    function delete(Todo $todo)
    {
        $this->todoRepositoryInterface->delete($todo);
    }

    function getAuthDoneTasks()
    {
        return $this->todoRepositoryInterface->getAuthDoneTasks();
    }

    function makeCompleted(Todo $todo)
    {
        return $this->todoRepositoryInterface->makeCompleted($todo);
    }

    function makeUncomplete(Todo $todo)
    {
        return $this->todoRepositoryInterface->makeUncomplete($todo);
    }
}
