<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Goal extends Model
{
    use HasFactory;

    protected $fillable = [
        'goal',
        'current',
        'target'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
