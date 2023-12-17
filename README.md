# Projet_Final_Bigscreen

Installation et lancement du projet :

    1) Ouvrir un terminal dans le dossier server et entrer les commandes suivantes dans l'ordre :
        - npm install
        - php artisan migrate
        - php artisan db:seed --class=AdminSeeder    
        - php artisan db:seed --class=QuestionsSeeder 
        - php artisan db:seed --class=UrlSeeder  
        - php artisan db:seed --class=UserAnswersSeeder
        - php artisan serve

    2) Ouvrir un autre terminal dans le dossier admin et entrer la commande :
        - npm install
        - npm run dev

    3) Liens de l'interface : 
        - interface admin (page login) : http://localhost:5173/
            * email : admin@bigscreen.com
            * mot de passe : password
        - interface utilisateur (page sondage) : http://localhost:5173/survey
        - page réponses de l'utilisateur : http://localhost:5173/user/answers/test1
          Il s'agit des réponses de l'utilisateur "test1", les seeders ont alimentés la base de données avec les réponses de 5 utilisateurs "test1", "test2", "test3", "test4" et "test5". Si vous voulez consulter les réponses des autres utilisateurs tests, modifiez le "test1" de l'url par celui que vous voulez parmis les 5.

    Si vous déployez le front sur un autre port que 5173, changez ce port avec le votre dans les urls.