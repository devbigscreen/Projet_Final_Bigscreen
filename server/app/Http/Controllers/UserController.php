<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\UserAnswers;
use App\Models\UserUrl;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Str;


class UserController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addUser(Request $request)
    {
        $userId = Str::random(50);

        $request->validate([
            'answers' => 'required|array',
            'answers.*.answer_id' => 'required',
            'answers.*.question_id' => 'required',
            'answers.*.answers' => 'required|string|max:225',
            'url' => 'required',
        ]);

        $requestUrl = $request->input('url');
        $answersUrl = $requestUrl . $userId;

        $userUrl = new UserUrl();
        $userUrl->user_id = $userId;
        $userUrl->url = $answersUrl;
        $userUrl->save();

        $userAnswers = [];
        foreach ($request->input('answers') as $answer) {
            $userAnswer = new UserAnswers();
            $userAnswer->answer_id = $answer['answer_id'];
            $userAnswer->question_id = $answer['question_id'];
            $userAnswer->user_id = $userId;
            $userAnswer->answers = $answer['answers'];

            if ($userAnswer->save()) {
                $userAnswers[] = $userAnswer;
            } else {
                dd($userAnswer->getErrors()->toArray());
            }
        }

        if (count($userAnswers) > 0) {
            return response()->json([
                'message' => 'New user added successfully!',
                'answersDatas' => $userAnswers,
                'urlDatas' => $userUrl
            ]);
        } else {
            return response()->json([
                'message' => 'Error saving user answers.',
            ], 500);
        }
    }



    /**
     * Get all Answers from database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getAllUsersAnswers()
    {
        $usersAnswers = UserAnswers::all();
        return response()->json([
            'message' => 'User to recover!',
            'data' => $usersAnswers
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
        $userAnswers = UserAnswers::where('user_id', $id)->get();

        if ($userAnswers->isEmpty()) {
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
        $userUrl = UserUrl::where('user_id', $id)->get();

        if (!$userUrl) {
            return response()->json([
                'message' => 'UserUrl not found!',
            ], 404);
        }

        return response()->json([
            'message' => 'UserUrl recovered!',
            'data' => $userUrl,
        ]);
    }




    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $userUrl = UserUrl::where('user_id', $id)->first();

        if (!$userUrl) {
            return response()->json([
                'message' => 'UserUrl not found!',
            ], 404);
        }

        $userUrl->delete();

        UserAnswers::where('user_id', $id)->delete();

        return response()->json([
            'message' => 'UserUrl and associated UserAnswers deleted successfully!',
        ]);
    }

    /**
     * Check if the email entered by the user exists in the database.
     *
     * @return \Illuminate\Http\Response
     */
    public function checkIfEmailExist(Request $request)
    {
        $email = trim($request->input('email'));
        $userEmail = UserAnswers::where('question_id', 1)
            ->where('answers', $email)
            ->first();
            if ($userEmail) {
                return response()->json([
                    'message' => 'Email already exists!',
                    'result' => $userEmail
                ]);
            } else {
                return response()->json([
                    'message' => 'Email does not exist.',
                    'result' => null
                ]);
            }
    }
}
