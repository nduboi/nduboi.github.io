let citation = ['Avancer est le meilleur moyen de passer un evenement', ' Il faut vivre avec les gens pour apprendre à les connaître', 'Qui baisse les yeux a honte', ' Tel que le ver luisant, plus un homme reste dans l\'obscurité, plus son esprit brille', 'Soyez grands par les faits, et simples en paroles', 'Il n\'y a de grand que ce qui est durable, de durable que ce qui est juste.', 'Les faux amis sont des oiseaux de passage qui viennent à la belle saison, et s\'en vont à la mauvaise', 'Un bon cœur ne peut se résigner aux maux qu\'il cause', 'Celui qui se plaît, plaît rarement aux autres', 'N\'attendez aucune pitié de celui qui ne s\'apitoie pas sur lui-même', 'Bien mal acquis s\'en va de même', 'L\'amitié ne peut subsister sans l\'estime', 'Ceux qui paraissent heureux, n\'ont que le paraître', 'Un sot a toujours assez d\'esprit pour nuire','Le bonheur a besoin d\'être interrompu pour être senti'];
var number = 0;
var citafinal = '' ;

function start(){
    number = Math.floor(Math.random() * 15 +1 );
    number = parseInt(number);
    console.log('number', number);
    citafinal = citation[citation.length - number];
    document.getElementById('screen').innerHTML = citafinal; 
}
