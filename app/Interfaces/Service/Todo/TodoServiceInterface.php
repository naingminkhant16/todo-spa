<?php

namespace App\Interfaces\Service\Todo;

use App\Models\Todo;

interface TodoServiceInterface
{
    function getAll();

    function getAuthTodos();

    function getAuthDoneTasks();

    function store(string $title, ?string $description);

    function delete(Todo $todo);

    function makeCompleted(Todo $todo);

    function makeUncomplete(Todo $todo);
}
