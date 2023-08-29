<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

use App\Models\Budget;
use App\Models\User;
use App\Models\Goal;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $user = auth()->user();

        $transactions = DB::table('transactions')
            ->select('transactions.id', 'transactions.name', 'amount', 'created_at', 'budget_types.name as budget_type_name', 'budget_types.color as budget_type_color')
            ->join('budget_types', 'transactions.budget_type_id', '=', 'budget_types.id')
            ->where('transactions.user_id', $user->id)
            ->get();

        return Inertia::render('Transaction/Index', [
            'transactions' => $transactions,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $user = auth()->user();
        $goals = DB::table('goals')
            ->select('id', 'goal')
            ->where('goals.user_id', $user->id)
            ->get();
        
        $budgets = DB::table('budget_types')
            ->select('id', 'name')
            ->get();

        return Inertia::render('Transaction/Create', [
            'goals' => $goals,
            'budgets' => $budgets,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:60',
            'budget_type_id' => 'required|not_in:0',
            'goal_id' => 'required',
            'amount' => 'required|numeric|min:0.01',
        ]);

        // Increase goal's progress
        if($validated['goal_id'] > 0) {
            $goal = Goal::find($validated['goal_id']);
            if(($goal->current + $validated['amount']) >= $goal->target) $goal->current = $goal->target;
            else $goal->current += $validated['amount'];
            $goal->save();
        } else $validated['goal_id'] = null;

        // Create transaction
        $request->user()->transaction()->create($validated);
        
        // Increase budget's progress
        $budget = Budget::whereIn('user_id', function($query) {
            $query->select('user_id')
                ->from('transactions')
                ->whereColumn('budgets.user_id', 'transactions.user_id')
                ->whereColumn('budgets.budget_type_id', 'transactions.budget_type_id');
        })
        ->whereIn('budget_type_id', function($query) {
            $query->select('budget_type_id')
                ->from('transactions')
                ->whereColumn('budgets.user_id', 'transactions.user_id')
                ->whereColumn('budgets.budget_type_id', 'transactions.budget_type_id');
        })->first();
        if($budget) {
            if(($budget->budget_current + $validated['amount']) >= $budget->budget_total) $budget->budget_current = $budget->budget_total;
            else $budget->budget_current += $validated['amount'];
            $budget->save();
        }

        // Increase user's expenses
        $user = auth()->user();
        $user = User::find($user->id);
        $user->expenses += $validated['amount'];
        $user->save();

        return redirect(route('transactions.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}
