<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Core extends Model
{
    use HasFactory;

    protected $fillable = [
        'start_date',
        'end_date',
        'justification'
    ];

    public function empolyee()
    {
        return $this->belongsTo(Employee::class);
    }
}
