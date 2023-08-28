<?php

use App\Http\Controllers\BudgetController;
use App\Http\Controllers\GoalController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Models\Budget;
use App\Models\Goal;
use App\Models\User;
use App\Models\Transaction;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('home');

Route::get('/dashboard', function () {
    $user = auth()->user();
    return Inertia::render('Dashboard', [
        'budgetCount' => Budget::where('user_id', $user->id)->count(),
        'goalCount' => Goal::where('user_id', $user->id)->count(),
        'transactionCount' => Transaction::where('user_id', $user->id)->count(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('budgets', BudgetController::class) 
    ->middleware(['auth', 'verified']);

Route::resource('goals', GoalController::class)
    ->middleware(['auth', 'verified']);

Route::resource('transactions', TransactionController::class)
    ->middleware(['auth', 'verified']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
