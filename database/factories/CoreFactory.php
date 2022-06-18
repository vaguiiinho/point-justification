<?php

namespace Database\Factories;

use App\Models\Employee;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class CoreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'employee_id' => Employee::factory(),
            'start_date' =>$this->faker->dateTimeThisMonth(),
            'end_date' => $this->faker->dateTimeThisMonth(),
            'justification' => Str::random(50)  . ' difsifjd ' .  Str::random(50),
        ];
    }
}
