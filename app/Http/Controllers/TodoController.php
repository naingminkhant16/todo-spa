<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTodoRequest;
use App\Interfaces\Service\Todo\TodoServiceInterface;
use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function __construct(private TodoServiceInterface $todoServiceInterface) {}

    public function store(StoreTodoRequest $request)
    {
        $todo = $this->todoServiceInterface->store($request->title, $request->description);
        if ($todo) {
            return back();
        } else {
            return back()->withErrors(['message' => 'Failed to create!']);
        }
    }

    public function destroy(Todo $todo)
    {
        $this->todoServiceInterface->delete($todo);
        return back();
    }

    public function makeCompleted(Todo $todo)
    {
        $result =  $this->todoServiceInterface->makeCompleted($todo);
        if ($result) {
            return back();
        } else {
            return back()->withErrors(['message' => 'Failed to make complete!']);
        }
    }

    function makeUncomplete(Todo $todo)
    {
        $result = $this->todoServiceInterface->makeUncomplete($todo);
        if ($result) {
            return back();
        } else {
            return back()->withErrors(['message' => 'Failed to make uncomplete!']);
        }
    }
}
