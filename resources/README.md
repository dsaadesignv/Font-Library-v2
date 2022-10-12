# Importer des polices fontlib dans votre page web

1. Télécharger le dossier `fonts/`
2. Placer le dossier `fonts/` dans le dossier de votre projet, à côté du dossier`css/`
3. Télécharger le fichier `fonts.css`
4. Placer le fichier `fonts.css` dans le dossier `css/` de votre projet
5. Dans votre fichier `index.html`, ajouter la ligne HTML suivante au-dessus de vos balises `<link>` existantes qui appellent votre propre fichier CSS et `normalize.css` :
```html
<link rel="stylesheet" href="./css/fonts.css">
<!-- Votre propre fichier CSS et votre normalize.css doivent être appelés juste en dessous de cette ligne --> 
```
6. Dans votre CSS, vous pouvez maintenant utiliser les typos suivantes :

| Nom de la typo               | Pour l'utiliser en CSS                                  | Lien fontlib  |
|------------------------------|---------------------------------------------------------|---------------|
| Lemon                 | `font-family: 'lemonregular', inherit;`                 | https://fontlibrary.org/en/font/lemon |
| Acari Sans              | `font-family: 'acari_sansblack', inherit;`              | https://fontlibrary.org/en/font/acari-sans |
| Clickuper                | `font-family: 'clickuperbold', inherit;`                | https://fontlibrary.org/en/font/clickuper |
| Cramaten              | `font-family: 'cramatenregular', inherit;`              | https://fontlibrary.org/en/font/cramaten |
| Echotopia             | `font-family: 'echotopiaregular', inherit;`             | https://fontlibrary.org/en/font/echotopia |
| Grotesque Bourgeoisie | `font-family: 'grotesque_bourgeoisieregular', inherit;` | https://fontlibrary.org/en/font/grotesque-bourgeoisie |
| Khushanuma    | `font-family: 'khushanuma_regularregular', inherit;`    | https://fontlibrary.org/en/font/nafees-nastaleeq-v1-02-ttf |
| L'internationale       | `font-family: 'linternationaleregular', inherit;`       | https://fontlibrary.org/en/font/l-internationale |
| Misto                    | `font-family: 'mistobook', inherit;`                    | https://fontlibrary.org/en/font/misto |
| Sans Guilt          | `font-family: 'sans_guilt_mbmedium', inherit;`          | https://fontlibrary.org/en/font/sans-guilt |
| Uglytypist            | `font-family: 'uglytypistregular', inherit;`            | https://fontlibrary.org/en/font/uglytypist |
