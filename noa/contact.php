<?php
if (isset($_POST['mailform'])) {
	if (!empty($_POST['entreprise']) AND !empty($_POST['mail']) AND !empty($_POST['message']) AND !empty($_POST['objet'])) {

	$header="MIME-Version: 1.0\r\n";
	$header.='From:"Noa ROUSSIERE"<no-reply@nduboi.github.io>'."\n";
	$header.='Content-Type:text/html; charset="uft-8"'."\n";
	$header.='Content-Transfer-Encoding: 8bit';

	$message='
		<html>
			<body>
				<br />
				<u>Objet du message :</u>'.$_POST['objet'].'<br/>
				<u>Nom de l\'entreprise :</u>'.$_POST['entreprise'].'<br />
				<u>Mail de l\'entreprise :</u>'.$_POST['mail'].'<br />
				<br />
				'.nl2br($_POST['message']).'
				<br />
			</body>
		</html>
		';
		mail("noa.roussiere@icloud.com", "Message du Site ", $message, $header);

	$header="MIME-Version: 1.0\r\n";
	$header.='From:"Noa ROUSSIERE"<no-reply@nduboi.github.io>'."\n";
	$header.='Content-Type:text/html; charset="uft-8"'."\n";
	$header.='Content-Transfer-Encoding: 8bit';

	$message='
		<html>
			<body>
				<br />
				<h1>Ceci est une réponse automatique</h1> <br/>
				<u>Message bien envoyer </u> <br/><br/>
				<u>Cordialement NOA </u> 

			</body>
		</html>
		';
		mail($_POST['mail'], "Prise de contact avec Noa ", $message, $header);
	}
	else {
		$message = '<p>Veuillez remplir tous les champs</p>';
	}
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Envoyer un Email</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 h-screen w-screen">
    <main class="flex h-full w-full">
        <form action="" method="post" class="container p-8 h-full grid grid-cols-1 grid-row-6 gap-4 h-full w-2/4">
            <input type="text" name="entreprise" id="" placeholder="Nom de l'entreprise" class=" shadow-md rounded-lg overflow-hidden hover:shadow-xl bg-white p-3" require><br>
            <input type="email" name="mail" id="" placeholder="Email proffesionel" class=" shadow-md rounded-lg overflow-hidden hover:shadow-xl bg-white p-3" require><br>
            <input type="text" name="objet" id="" placeholder="Objet du mail" class="shadow-md rounded-lg overflow-hidden hover:shadow-xl bg-white p-3" require><br>
            <textarea name="message" id="" cols="30" rows="10" placeholder="Votre Message" class=" shadow-md rounded-lg overflow-hidden hover:shadow-xl bg-white p-11" require></textarea><br>
            <input type="submit" name="mailform" value="Envoyer" class=" shadow-md rounded-lg overflow-hidden hover:shadow-xl bg-white p-5">
        </form>
        <section class="container p-8 h-full grid grid-cols-1 grid-row-6 gap-4 h-full w-2/4">
            <h1>ou a l'adresse mail <u><a href="mailto:noa.roussiere@icloud.com">noa.roussiere@icloud.com</a></u></h1>
        </section>
    </main>
</body>
</html>