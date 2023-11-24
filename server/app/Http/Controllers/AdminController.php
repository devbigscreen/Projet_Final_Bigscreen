<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    /**
     * Login user
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function Login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Échec de l\'authentification',
            ], 401);
        }

        $admin = User::where('email', $request->email)->first();
        $token = $admin->createToken("token")->plainTextToken;
        return response()->json([
            'message' => 'Authentification réussie',
            'token' => $token
        ]);
    }



    /**
     * Store a newly created user in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $admin = new user;
        $admin->email= $request->input('email');
        $admin->password = $request->input('password');

        $admin->password = Hash::make($request->input('password'));
        $admin->save();
        return response()->json([
            'message' => 'Administrateur correctement ajouté'
        ]);
    }
}