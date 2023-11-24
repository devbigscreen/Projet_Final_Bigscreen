<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\user_answers;
use Illuminate\Http\JsonResponse;


class UserController extends Controller
{
   /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addUser(Request $request)
    
        {

            $addUser = new addUser;
            $addUser->answer_id = $request->input('answer_id');
            $addUser->question_id = $request->input('question_id');
            $addUser->user_id = $request->input('user_id');
            $addUser->answers = $request->input('answers');
    
            $request->validate([
                'answer_id' => 'required',
                'question_id' => 'required',
                'user_id' => 'required',
                'answers' => 'required'
            ]);
    
            $addUser->save();
    
            return response()->json([
                'message' => 'New user add succesfully !',
                'data' => $addUser,
            ]);
            
        }
    


    /**
     * Get all Answers from database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getAllUserAnswers()
    {
        $userAnswers = userAnswers::all();
        return response()->json([
            'message' => 'User to recover!',
            'data' => $userAnswers
        ]);

    }



    /**
     * Get one UserAnswers rom database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getOneUserAnswers($id)
    {

        $userAnswers = userAnswers::find($id);

        if (!$userAnswers) {
            return response()->json([
                'message' => 'UserAnswers not found!',
            ], 404);
        }

        return response()->json([
            'message' => 'UserAnswers recovered!',
            'data' => $userAnswers,
        ]);

    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getUserUrl($id)
    {
        //
    }




    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
