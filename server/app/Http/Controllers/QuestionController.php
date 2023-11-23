<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Question;

class QuestionController extends Controller
{

    /**
     * Store new question in database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addQuestion(Request $request)
    {
        $question = new Question;
        $question->type = strtoupper($request->input('type'));
        $question->body = $request->input('body');
        $question->choices = $request->input('choices');

        $request->validate([
            'type' => 'required|string|max:1',
            'body' => 'required|string|max:255',
        ]);

        $question->save();

        return response()->json([
            'message' => 'Nouvelle devise ajoutée !',
            'data' => $question,
        ]);
    }

     /**
     * get all questions from database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getAllQuestions()
    {
        $questions = Question::all();
        return response()->json([
            'message' => 'Questions récupérées !',
            'data' => $questions
        ]);
    }


    /**
     * Get one question from database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getOneQuestion($id)
    {
        $question = Question::where('question_id', $id)->get();

        if (!$question) {
            return response()->json([
                'message' => 'Question non trouvée',
            ], 404);
        }

        return response()->json([
            'message' => 'Question récupérée !',
            'data' => $question,
        ]);
    }

    /**
     * Update the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function updateQuestion(Request $request, $id): JsonResponse
    {
        $question = Question::where('question_id', $id);
        //Debugbar::addMess

        $request->validate([
            'body' => 'required|string|max:255',
            'type' => 'required|string|max:1'
        ]);

        $question->update([
            'body' => $request->input('body'),
            'type' => $request->input('type'),
        ]);

        return response()->json([
            'message' => 'Question mise à jour avec succès!',
            'data' => $question->get(),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $question = Question::where('question_id', $id);
        $question->delete();

        return response()->json([
            'message' => 'Question correctement supprimée !',
        ]);
    }
}
