<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UserAnswersSeeder extends Seeder
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
                'Response' => 'charlotte@gmail.com'
            ],
            [
                'id' => '1',
                'body' => 'Votre adresse mail',
                'type' => 'B',
                'Response' => 'adrien@gmail.com'
            ],
            [
                'id' => '1',
                'body' => 'Votre adresse mail',
                'type' => 'B',
                'Response' => 'manon@gmail.com'
            ],
            [
                'id' => '2',
                'body' => 'Votre âge',
                'type' => 'B',
                'Response' => '26 ans'
            ],
            [
                'id' => '2',
                'body' => 'Votre âge',
                'type' => 'B',
                'Response' => '24 ans'
            ],
            [
                'id' => '2',
                'body' => 'Votre âge',
                'type' => 'B',
                'Response' => '22 ans'
            ],
            [
                'id' => '3',
                'body' => 'Votre sexe',
                'type' => 'A',
                'Response' => 'Femme'
            ],
            [
                'id' => '3',
                'body' => 'Votre sexe',
                'type' => 'A',
                'Response' => 'Homme'
            ],
            [
                'id' => '3',
                'body' => 'Votre sexe',
                'type' => 'A',
                'Response' => 'réfère ne pas répondre'
            ],
            [
                'id' => '4',
                'body' => 'Nombre de personne dans votre foyer (adulte & enfants)',
                'type' => 'C',
                'Response' => '3'
            ],
            [
                'id' => '4',
                'body' => 'Nombre de personne dans votre foyer (adulte & enfants)',
                'type' => 'C',
                'Response' => '1'
            ],
            [
                'id' => '4',
                'body' => 'Nombre de personne dans votre foyer (adulte & enfants)',
                'type' => 'C',
                'Response' => '5'
            ],
            [
                'id' => '5',
                'body' => 'Votre profession',
                'type' => 'B',
                'Response' => 'Comptable'
            ],
            [
                'id' => '5',
                'body' => 'Votre profession',
                'type' => 'B',
                'Response' => 'graphiste'
            ],
            [
                'id' => '5',
                'body' => 'Votre profession',
                'type' => 'B',
                'Response' => 'chef de projet'
            ],
            [
                'id' => '6',
                'body' => 'Quel marque de casque VR utilisez-vous ?',
                'type' => 'A',
                'Response' => 'HTC Vive'
            ],
            [
                'id' => '6',
                'body' => 'Quel marque de casque VR utilisez-vous ?',
                'type' => 'A',
                'Response' => 'Valve index'
            ], [
                'id' => '6',
                'body' => 'Quel marque de casque VR utilisez-vous ?',
                'type' => 'A',
                'Response' => 'Windows Mixed Reality'
            ],
            [
                'id' => '7',
                'body' => "Sur quel magasin d'application achetez vous des contenus VR ?",
                'type' => 'A',
                'Response' => 'Windows store'
            ],
            [
                'id' => '7',
                'body' => "Sur quel magasin d'application achetez vous des contenus VR ?",
                'type' => 'A',
                'Response' => 'Occulus store'
            ],
            [
                'id' => '7',
                'body' => "Sur quel magasin d'application achetez vous des contenus VR ?",
                'type' => 'A',
                'Response' => 'Viveport'
            ],
            [
                'id' => '8',
                'body' => "Quel casque envisagez-vous d'acheter dans un futur proche ?",
                'type' => 'A',
                'Response' => 'PSVR'
            ],
            [
                'id' => '8',
                'body' => "Quel casque envisagez-vous d'acheter dans un futur proche ?",
                'type' => 'A',
                'Response' => 'Occulus Go'
            ],
            [
                'id' => '8',
                'body' => "Quel casque envisagez-vous d'acheter dans un futur proche ?",
                'type' => 'A',
                'Response' => 'Occulus Quest'
            ],
            [
                'id' => '9',
                'body' => "Au sein de votre foyer, combien de personnes utilisent votre casque VR pour regarder Bigscreen ?",
                'type' => 'C',
                'Response' => '2'
            ],
            [
                'id' => '9',
                'body' => "Au sein de votre foyer, combien de personnes utilisent votre casque VR pour regarder Bigscreen ?",
                'type' => 'C',
                'Response' => '1'
            ],
            [
                'id' => '9',
                'body' => "Au sein de votre foyer, combien de personnes utilisent votre casque VR pour regarder Bigscreen ?",
                'type' => 'C',
                'Response' => '4'
            ],
            [
                'id' => '10',
                'body' => "Vous utilisez principalement Bigscreen pour :",
                'type' => 'A',
                'Response' => 'regarder des films'
            ],
            [
                'id' => '10',
                'body' => "Vous utilisez principalement Bigscreen pour :",
                'type' => 'A',
                'Response' => 'jouer en solo'
            ],
            [
                'id' => '10',
                'body' => "Vous utilisez principalement Bigscreen pour :",
                'type' => 'A',
                'Response' => 'jouer en équipe'
            ],
            [
                'id' => '11',
                'body' => "Combien donnez-vous de point pour la qualité de l'image sur Bigscreen ?",
                'type' => 'C',
                'Response' => '5'
            ],
            [
                'id' => '11',
                'body' => "Combien donnez-vous de point pour la qualité de l'image sur Bigscreen ?",
                'type' => 'C',
                'Response' => '1'
            ],
            [
                'id' => '11',
                'body' => "Combien donnez-vous de point pour la qualité de l'image sur Bigscreen ?",
                'type' => 'C',
                'Response' => '2'
            ],
            [
                'id' => '12',
                'body' => "Combien donnez-vous de point pour le confort d'utilisation de l'interface Bigscreen ?",
                'type' => 'C',
                'Response' => '5'
            ],
            [
                'id' => '12',
                'body' => "Combien donnez-vous de point pour le confort d'utilisation de l'interface Bigscreen ?",
                'type' => 'C',
                'Response' => '4'
            ],
            [
                'id' => '12',
                'body' => "Combien donnez-vous de point pour le confort d'utilisation de l'interface Bigscreen ?",
                'type' => 'C',
                'Response' => '2'
            ],
            [
                'id' => '13',
                'body' => "Combien donnez-vous de point pour la connexion réseau de Bigscreen ?",
                'type' => 'C',
                'Response' => '2'
            ],
            [
                'id' => '13',
                'body' => "Combien donnez-vous de point pour la connexion réseau de Bigscreen ?",
                'type' => 'C',
                'Response' => '4'
            ],
            [
                'id' => '13',
                'body' => "Combien donnez-vous de point pour la connexion réseau de Bigscreen ?",
                'type' => 'C',
                'Response' => '5'
            ],
            [
                'id' => '14',
                'body' => "Combien donnez-vous de point pour la qualité des graphismes 3D dans Bigscreen ?",
                'type' => 'C',
                'Response' => '3'
            ],
            [
                'id' => '14',
                'body' => "Combien donnez-vous de point pour la qualité des graphismes 3D dans Bigscreen ?",
                'type' => 'C',
                'Response' => '2'
            ],
            [
                'id' => '14',
                'body' => "Combien donnez-vous de point pour la qualité des graphismes 3D dans Bigscreen ?",
                'type' => 'C',
                'Response' => '1'
            ],
            [
                'id' => '15',
                'body' => "Combien donnez-vous de point pour la qualité audio dans Bigscreen ?",
                'type' => 'C',
                'Response' => '4'
            ],
            [
                'id' => '15',
                'body' => "Combien donnez-vous de point pour la qualité audio dans Bigscreen ?",
                'type' => 'C',
                'Response' => '3'
            ],
            [
                'id' => '15',
                'body' => "Combien donnez-vous de point pour la qualité audio dans Bigscreen ?",
                'type' => 'C',
                'Response' => '2'
            ],
            [
                'id' => '16',
                'body' => "Aimeriez-vous avoir des notifications plus précises au cours de vos sessions Bigscreen ?",
                'type' => 'A',
                'Response' => 'non'
            ],
            [
                'id' => '16',
                'body' => "Aimeriez-vous avoir des notifications plus précises au cours de vos sessions Bigscreen ?",
                'type' => 'A',
                'Response' => 'oui'
            ],
            [
                'id' => '17',
                'body' => "Aimeriez-vous pouvoir inviter un ami à rejoindre votre session via son smartphone ?",
                'type' => 'A',
                'Response' => 'oui'
            ],
            [
                'id' => '17',
                'body' => "Aimeriez-vous pouvoir inviter un ami à rejoindre votre session via son smartphone ?",
                'type' => 'A',
                'Response' => 'non'
            ],
            [
                'id' => '18',
                'body' => "Aimeriez-vous pouvoir enregistrer des émissions TV pour pouvoir les regarder ultérieurement ?",
                'type' => 'C',
                'Response' => '5'
            ],
            [
                'id' => '18',
                'body' => "Aimeriez-vous pouvoir enregistrer des émissions TV pour pouvoir les regarder ultérieurement ?",
                'type' => 'C',
                'Response' => '1'
            ],
            [
                'id' => '18',
                'body' => "Aimeriez-vous pouvoir enregistrer des émissions TV pour pouvoir les regarder ultérieurement ?",
                'type' => 'C',
                'Response' => '3'
            ],
            [
                'id' => '19',
                'body' => "Aimeriez-vous jouer à des jeux exclusifs sur votre Bigscreen ?",
                'type' => 'C',
                'Response' => '4'
            ],
            [
                'id' => '19',
                'body' => "Aimeriez-vous jouer à des jeux exclusifs sur votre Bigscreen ?",
                'type' => 'C',
                'Response' => '2'
            ],
            [
                'id' => '19',
                'body' => "Aimeriez-vous jouer à des jeux exclusifs sur votre Bigscreen ?",
                'type' => 'C',
                'Response' => '5'
            ],
            [
                'id' => '20',
                'body' => "Quelle nouvelle fonctionnalité devrait exister sur Bigscreen ?",
                'type' => 'B',
                'Response' => 'Un casque VR compatible a Bigscreen'
            ],
            [
                'id' => '20',
                'body' => "Quelle nouvelle fonctionnalité devrait exister sur Bigscreen ?",
                'type' => 'B',
                'Response' => 'un vaste choix de salle de cinéma virtuelles'
            ],
    
        ];

        foreach ($data as $userAnswersData) {
           Answer::create([
                'answer_id' => $userAnswersData['id'],
                'body' => $userAnswersData['body'],
                'type' => $userAnswersData['type'],
                'Response' => $userAnswersData['response'] ?? null,
            ]);
        }
    }
}
