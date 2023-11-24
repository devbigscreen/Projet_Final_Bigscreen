<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class QuestionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'id' => '1',
                'body' => 'Votre adresse mail',
                'type' => 'B',
            ],
            [
                'id' => '2',
                'body' => 'Votre âge',
                'type' => 'B',
            ],
            [
                'id' => '3',
                'body' => 'Votre sexe',
                'type' => 'A',
                'choices' => [
                    'a' => 'Homme',
                    'b' => 'Femme',
                    'c' => 'Préfère ne pas répondre',
                ],
            ],
            [
                'id' => '4',
                'body' => 'Nombre de personne dans votre foyer (adulte & enfants)',
                'type' => 'C',
            ],
            [
                'id' => '5',
                'body' => 'Votre profession',
                'type' => 'B',
            ],
            [
                'id' => '6',
                'body' => 'Quel marque de casque VR utilisez-vous ?',
                'type' => 'A',
                'choices' => [
                    'a' => 'Occulus Quest',
                    'b' => 'Occulus Rift/s',
                    'c' => 'HTC Vive',
                    'd' => 'Windows Mixed Reality',
                    'e' => 'Valve index',
                ],
            ],
            [
                'id' => '7',
                'body' => "Sur quel magasin d'application achetez vous des contenus VR ?",
                'type' => 'A',
                'choices' => [
                    'a' => 'SteamVR',
                    'b' => 'Occulus store',
                    'c' => 'Viveport',
                    'd' => 'Windows store',
                ],
            ],
            [
                'id' => '8',
                'body' => "Quel casque envisagez-vous d'acheter dans un futur proche ?",
                'type' => 'A',
                'choices' => [
                    'a' => 'Occulus Quest',
                    'b' => 'Occulus Go',
                    'c' => 'HTC Vive Pro',
                    'd' => 'PSVR',
                    'e' => 'Autre',
                    'f' => 'Aucun',
                ],
            ],
            [
                'id' => '9',
                'body' => "Au sein de votre foyer, combien de personnes utilisent votre casque VR pour regarder Bigscreen ?",
                'type' => 'C',
            ],
            [
                'id' => '10',
                'body' => "Vous utilisez principalement Bigscreen pour :",
                'type' => 'A',
                'choices' => [
                    'a' => 'regarder la TV en direct',
                    'b' => 'regarder des films',
                    'c' => 'travailler',
                    'd' => 'jouer en solo',
                    'e' => 'jouer en équipe',
                ],
            ],
            [
                'id' => '11',
                'body' => "Combien donnez-vous de point pour la qualité de l'image sur Bigscreen ?",
                'type' => 'C',
            ],
            [
                'id' => '12',
                'body' => "Combien donnez-vous de point pour le confort d'utilisation de l'interface Bigscreen ?",
                'type' => 'C',
            ],
            [
                'id' => '13',
                'body' => "Combien donnez-vous de point pour la connexion réseau de Bigscreen ?",
                'type' => 'C',
            ],
            [
                'id' => '14',
                'body' => "Combien donnez-vous de point pour la qualité des graphismes 3D dans Bigscreen ?",
                'type' => 'C',
            ],
            [
                'id' => '15',
                'body' => "Combien donnez-vous de point pour la qualité audio dans Bigscreen ?",
                'type' => 'C',
            ],
            [
                'id' => '16',
                'body' => "Aimeriez-vous avoir des notifications plus précises au cours de vos sessions Bigscreen ?",
                'type' => 'A',
                'choices' => [
                    'a' => 'Oui',
                    'b' => 'non',
                ],
            ],
            [
                'id' => '17',
                'body' => "Aimeriez-vous pouvoir inviter un ami à rejoindre votre session via son smartphone ?",
                'type' => 'A',
                'choices' => [
                    'a' => 'Oui',
                    'b' => 'non',
                ],
            ],
            [
                'id' => '18',
                'body' => "Aimeriez-vous pouvoir enregistrer des émissions TV pour pouvoir les regarder ultérieurement ?",
                'type' => 'C',
            ],
            [
                'id' => '19',
                'body' => "Aimeriez-vous jouer à des jeux exclusifs sur votre Bigscreen ?",
                'type' => 'C',
            ],
            [
                'id' => '20',
                'body' => "Quelle nouvelle fonctionnalité devrait exister sur Bigscreen ?",
                'type' => 'B',
            ],
        ];

        foreach ($data as $questionData) {
            Question::create([
                'question_id' => $questionData['id'],
                'body' => $questionData['body'],
                'type' => $questionData['type'],
                'choices' => $questionData['choices'] ?? null,
            ]);
        }
    }
}
