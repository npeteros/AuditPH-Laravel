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
        Schema::table('users', function (Blueprint $table) {
            $table->float('income')->default(0)->after('password');
            $table->float('expenses')->default(0)->after('income');;
            $table->integer('goals')->default(0)->after('expenses');
            $table->integer('budgets')->default(0)->after('goals');
            $table->integer('money_saved')->default(0)->after('budgets');
            $table->integer('transactions')->default(0)->after('money_saved');
            $table->float('total_balance')->default(0)->after('transactions');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(
                [
                    'income', 
                    'expenses', 
                    'goals', 
                    'budgets', 
                    'money_saved', 
                    'transactions', 
                    'total_balance'
                ]
            );
            
        });
    }
};
