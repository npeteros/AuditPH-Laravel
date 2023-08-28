<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Budget extends Model
{
    use HasFactory;

    protected $fillable = [
        'budget_type_id',
        'budget_total',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
