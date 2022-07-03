<?php

use App\Http\Controllers\CoreController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index']);

Auth::routes();

Route::resources([
    'employee' => EmployeeController::class,
]);

Route::resources([
    'justification' => CoreController::class,
]);
