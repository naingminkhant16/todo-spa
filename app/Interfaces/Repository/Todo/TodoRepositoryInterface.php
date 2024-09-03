<?php

namespace App\Interfaces\Repository\Todo;

use App\Models\Todo;

interface TodoRepositoryInterface
{
    function getAll();

    function getAuthTodos();

    function getAuthDoneTasks();

    function store(string $title, ?string $description, int $owner_id);

    function delete(Todo $todo);

    function makeCompleted(Todo $todo);

    function makeUncomplete(Todo $todo);
}
