<?php

namespace App\Http\Controllers;

use App\Models\Budget;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BudgetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $user = auth()->user();

        $budgets = DB::table('budgets')
            ->select('budgets.id', 'budget_total', 'budget_current', 'budget_types.name as budget_type_name', 'budget_types.color as budget_type_color')
            ->join('budget_types', 'budgets.budget_type_id', '=', 'budget_types.id')
            ->where('budgets.user_id', $user->id)
            ->get();

        return Inertia::render('Budget/Index', [
            'budgets' => $budgets,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Budget/Create', [
            //
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $user = auth()->user();
        
        $validated = $request->validate([
            'budget_type_id' => 'required|unique:budgets,budget_type_id,NULL,id,user_id,' . $user->id,
            'budget_total' => 'required|numeric|min:0.01',
        ]);

        $request->user()->budget()->create($validated);

        return redirect(route('budgets.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Budget $budget)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Budget $budget)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Budget $budget)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Budget $budget)
    {
        //
    }
}