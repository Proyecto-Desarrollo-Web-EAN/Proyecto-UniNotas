<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DocumentoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $request->validate([
        'titulo' => 'required|string|max:150',
        'carrera' => 'required|string|max:100',
        'asignatura' => 'required|string|max:100',
        'archivo' => 'required|file|max:2048'
    ]);

    $user = auth()->user();

    $path = $request->file('archivo')->store('documentos', 'public');

    Documento::create([
        'usuario_id' => $user->id,
        'titulo' => $request->titulo,
        'carrera' => $request->carrera,
        'asignatura' => $request->asignatura,
        'archivo' => $path,
    ]);

    return response()->json(['success' => true]);
}


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
