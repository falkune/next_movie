import Document, { Html, Head, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Ajouter ici les balises <meta>, <link>, <style>, <script> ou autres */}
          <link rel="stylesheet" href="/css/style.css" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
          <link rel="icon" href="/imgs/clap.ico" type="image/x-icon" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous" />
        </Head>
        <body>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

/**
 Le fichier _document.tsx dans Next.js est un composant spécial qui permet de personnaliser le document HTML qui est servi au client. Il est utilisé pour définir la structure de base de la page HTML et inclure des éléments qui doivent être présents sur toutes les pages de l'application.

 Le fichier _document.tsx est chargé une seule fois lors du rendu initial de l'application, contrairement aux autres fichiers de pages qui peuvent être chargés à chaque navigation client. Il est donc utilisé pour inclure des balises HTML, des méta-informations, des feuilles de styles globales, des scripts ou tout autre contenu qui doit être partagé sur toutes les pages.
 */
