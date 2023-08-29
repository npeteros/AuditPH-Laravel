<?php

namespace App\Http\Controllers;

use App\Models\Goal;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;

class GoalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $user = auth()->user();

        $goals = DB::table('goals')
            ->select('goals.id', 'goal', 'current', 'target')
            ->where('goals.user_id', $user->id)
            ->get();

        return Inertia::render('Goal/Index', [
            'goals' => $goals
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Goal/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'goal' => 'required|string|max:60',
            'target' => 'required|numeric|min:0.01',
        ]);

        $request->user()->goal()->create($validated);

        return redirect(route('goals.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Goal $goal): Response
    {
        $this->authorize('view', $goal);

        return Inertia::render('Goal/Show', [
            'goal' => $goal,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Goal $goal): Response
    {
        $this->authorize('view', $goal);
        
        return Inertia::render('Goal/Edit', [
            'goal' => $goal
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Goal $goal): RedirectResponse
    {
        $this->authorize('update', $goal);
        
        $validated = $request->validate([
            'goal' => 'required|string|max:60',
            'current' => 'required|numeric|min:0.01|lte:target',
            'target' => 'required|numeric|min:0.01',
        ]);

        $goal->update($validated);

        return redirect(route('goals.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Goal $goal)
    {
        $this->authorize('delete', $goal);

        $goal->delete();
        
        return redirect(route('goals.index'));
    }
}
