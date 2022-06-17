<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCoreRequest;
use App\Http\Requests\UpdateCoreRequest;
use App\Models\Core;
use Illuminate\Http\Request;

class CoreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $justifications = Core::all();
        if (!$request->ajax()) {
            return view('justification.index', compact($justifications));
        } else {
            return $justifications->toJson();
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCoreRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCoreRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Core  $core
     * @return \Illuminate\Http\Response
     */
    public function show(Core $core)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Core  $core
     * @return \Illuminate\Http\Response
     */
    public function edit(Core $core)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCoreRequest  $request
     * @param  \App\Models\Core  $core
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCoreRequest $request, Core $core)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Core  $core
     * @return \Illuminate\Http\Response
     */
    public function destroy(Core $core)
    {
        //
    }
}
