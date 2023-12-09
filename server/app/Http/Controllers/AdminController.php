<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
                'message' => 'Authentication failed',
            ], 401);
        }

        $admin = User::where('email', $request->email)->first();
        $token = $admin->createToken("token")->plainTextToken;
        return response()->json([
            'message' => 'Successfully Authentication',
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
        $admin = new User();
        $admin->email= $request->input('email');
        $admin->password = $request->input('password');

        $admin->password = Hash::make($request->input('password'));
        $admin->save();
        return response()->json([
            'message' => 'Administrator successfully added'
        ]);
    }

}
