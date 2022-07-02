<?php

use App\Http\Controllers\CoreController;
use App\Http\Controllers\EmployeeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Auth::routes();

Route::resources([
    'employee' => EmployeeController::class,
]);

Route::resources([
    'justification' => CoreController::class,
]);
