<?php

namespace App\Repositories\Todo;

use App\Interfaces\Repository\Todo\TodoRepositoryInterface;
use App\Models\Todo;
use Illuminate\Support\Facades\Auth;

class TodoRepository implements TodoRepositoryInterface
{
    public function __construct(private Todo $todo) {}

    function getAll()
    {
        return $this->todo->all();
    }

    function getAuthTodos()
    {
        return $this->todo->where('user_id', Auth::id())
            ->where('completed', 0)
            ->orderBy('created_at', 'desc')
            ->get();
    }

    function getAuthDoneTasks()
    {
        return $this->todo->where('user_id', Auth::id())
            ->where('completed', 1)
            ->orderBy('created_at', 'desc')
            ->get();
    }

    function store(string $title, ?string $description, int $owner_id)
    {
        return $this->todo->create([
            'title' => $title,
            'description' => $description,
            'user_id' => $owner_id
        ]);
    }

    function delete(Todo $todo)
    {
        $todo->delete();
    }

    function makeCompleted(Todo $todo)
    {
        $todo->completed = 1;
        return $todo->save();
    }

    function makeUncomplete(Todo $todo)
    {
        $todo->completed = 0;
        return $todo->save();
    }
}
