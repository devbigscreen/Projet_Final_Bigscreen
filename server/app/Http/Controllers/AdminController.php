<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    /**
     * Login admin
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required'],
            'password' => ['required'],
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Authentification failed'
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
     * Store a newly created admin in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $admin = new User();
        $admin->email = $request->input('email');
        $admin->password = $request->input('password');

        $admin->password = Hash::make($request->input('password'));
        $admin->save();
        return response()->json([
            'message' => 'Administrator successfully added'
        ]);
    }

    /**
     * Remove the specified admin from the database.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $admin = User::where('id', $id)->first();

        if (!$admin) {
            return response()->json([
                'message' => 'Admin not found!',
            ], 404);
        }

        $admin->delete();

        return response()->json([
            'message' => 'Admin deleted successfully!',
        ]);
    }
}
