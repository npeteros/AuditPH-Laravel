<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('budget_types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('color', 10);
        });

        DB::table('budget_types')->insert([
            ['name' => 'Bills', 'color' => '#0052CC'],
            ['name' => 'Clothing', 'color' => '#002855'],
            ['name' => 'Education', 'color' => '#00AADD'],
            ['name' => 'Entertainment', 'color' => '#91C9F6'],
            ['name' => 'Food/Drinks', 'color' => '#006B37'],
            ['name' => 'Groceries', 'color' => '#00974C'],
            ['name' => 'Housing', 'color' => '#FF5733'],
            ['name' => 'Pets', 'color' => '#333333'],
            ['name' => 'Transportation', 'color' => '#666666'],
            ['name' => 'Travel', 'color' => '#CCCCCC'],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('budget_types');
    }
};
