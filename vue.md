## Formation Vue.js avec Rodolphe

URL : https://vue.formations.alsacreations.fr/
PW : kiwi 

Guidelines : https://github.com/alsacreations/guidelines/blob/master/Guidelines-Vue-Nuxt-Front-End.md

# Foncitionnement général de Vue, concept, outils

Tree shaking => etape lors de la compilation. Garder uniquement le code utile. On évacue le code mort.

SFC => single file component : un composant tient dans un fichier.

Composant : page, block contenant des boutons, un bouton.

SVG : compatible avec le changement de state

ESM : ECMAscript modules

Swagger : outils permettant de générer une documentation à partir des différentes routes d'une api. Va montrer une requête et afficher un résultat générique.

Exemple Server Less : création d'une page statique ou le seul élément ou il y a besoin d'un serveur c'est l'envoi de mail.
Service FaaS / Saas : Function as a Service
AWS.

PWA : un seul code à maintenir, pour plusieurs devices

ECMA organisme comme le W3C

Moteur JS : V8 (Pour html et css => WebKit)


Extensions : revoir la liste des extension à avoir dans le slide.

Node : fonctionne avec du javascript mais sans DOM. Donc toutes les fonction liées au DOM ne vont pas fonctionner.


NPM:

npm init => permet de créer un fichier package.json
npm install --save vue => rajoute dans package.json la dépendance de vue.
npm install --save-dev eslint => rajoute une dépendance uniquement en développement

npm install -g serve => installation globale sur le système 




# démarrer un nouveau projet

npm init vue@latest


Done. Now run:

  cd Vueflix
  npm install
  npm run dev





babel => permet la retro comptabilité. Exemple `() =>` pas connu par les anciens navigateurs et sera traduit dans une fonction normale. `function exemple (){}`

typescript => vue est pensé pour fonctionner avec typescript.

eslint => eslint.vue.js.org/rules/

JAMSTACK => équivalent Headless mais pour le front

# DOSSIER / FICHIER :
public : tous les fichiers non compilés (ex: favicon). Racine du serveur http

.eslintrc.cjs : toutes les régles liées à la validation du projet
Garantie que tout le monde va utiliser les même règles par projet.

vite.config.js : Comme WebPack mais plus rapide. Outil de compilation (avec esbuild)


SRC :
- assets : tous les fichiers compilés mais pas du JS
- main.js : point d'entrée de l'application
- dossier composant : on organise comme on peut (on peut par exemple créer un dossier spécialisé pour les menus, boutons etc.)



# convention 

- CamelCase => les composants toujours en 2 mots pour éviter l'évolution du HTML par exemple qui pourrait créer une balise (généralement en un seul mot) et créer un conflit.
- shadowDOM => cacher du DOM dans un élément HTML. exemple la balise video cache du html qui permet l'affichage d'une vidéo. (on peut paramétrer le navigateur pour le voir)
- TODO / FIXME => permet de retrouver facilement les endroit dans le code ou il faut opérer. TODO (important) / FIXME (pour plus tard) (extension : todo highlights)
- nommer les class du même nom que les composants (plus facile à retrouver)
- utiliser des classes à état (ex: is-active / has-items)

# créer la version de production

npm run build => va créer un dossier dist/ : version statique que l'on pourra rajouter sur l'hébergement.

Pour tester en local => terminal > dossier dist > serve

# autre

image => alt :
- si image décorative: alt="" 
- si non alt="nom de l'image"


# OPTIONS API / composition API

Syntaxe qui diffèrent pour les scripts. La documentation VueJs explique les deux façons.

## Composition API (nouvelle syntaxe)

- Organisation plus logique
- permet de réutiliser les composables (petites fonctions/methodes)
- meilleur typage avec TS

On doit utiliser des ref pour avoir des variables réactifs. (number, string, array)

exemple ``const total = ref(0)``

Pour des objets on utilisera reactive({})

  `exemple user = reactif({
    name: "evans",
    age: 42,
  })`   

Pour utiliser la `ref` : on doit y accéder avec `value` => `nombre.value`
Par contre dans le template, pas besoin d'utiliser la value : `{{ nombre }}` fonctionnera.

Ref est aussi utiliser pour identifier un composant lors de la réclaration de celui-ci.

## Options API (PopLab)

- organisation plus stricte mais de base bien structurée

data () {} => contient toutes les donnnées. Doit retourner une fonction pour permettre d'avoir des composants indépendants.

## Données internes (data)

lorsque l'on fait une copie d'une variable cela créée une nouvelle variable mais indépendante.
Par contre pour les objets et les tableaux, cela fait une nouvelle variable mais elles sont dépendantes lesunes des autres.

Pour hacker cela on peut utiliser pour les objets :
JSON.stringify => pour passer l'objet en string
JSON.parce => passer la string en objet.

Cela force la création d'une variable indépendante et non plus un pointage vers l'objet de référence.

Pour hacker avec les tableaux on peut utiliser le spread opérator => let newTableau = [...tableau]

## destructuration (destructuring)


Prennons un objet :
`let menu = {a: "Knack", b: "Pizza", c: "Chocolat"}`

Si on fait
`let { a, b, c} = menu`

Cela retournera :
`a = Knack`
`b = Pizza`
`c = Chocolat`


`function getSucre(c){`
`  console.log(c)` // retournera "Chocolat"
`}`


## données héritées (props)

`props {`
`  type: String,`
`  default: 'anyValue',`
`  required: true`
`}`

Pas besoin de retourner une valeur. Mais on essaye d'être le plus précis possible. Ici, le type de variable, la valeur, et si c'est requis.


Exemple : 
<script>
export default {
  props: {
    nom: {
      type: String,
      default: ''
    }
  },
  methods: {
    print() {
      // on utilise this
      console.log(this.nom)
    }
  }
}
</script>

Pour utiliser une props dans un method, dans la syntaxe Options API : `this.nom`
Pour utilsier dans le template `{{ nom }}`


## Emit 

Va permettre de remonter des informations d'un enfant vers un parent.
Dans le composant parent il faudra alors un Handle dans les attributs du composant.

## Computed


nomComplet => prenom + ' ' + nom.toUpperCase()

Ici fonction fléchée. Dès que prénom ou nom change, la computed nomComplet va changer automatiquement.

exemple 

computed:{
  total(){
  return this.posts.lenght
  }
}

## Watch

On surveille une donnée et on réagit lorsqu'il y a un changement (comme UseEffect() dans React)


## MEMO : ref / reactive / computed / watch / methods : on résume

- ref : crée un objet réactif avec une propriété .value (qui pointe sur sa valeur)
- reactive : crée un proxy réactif d'un objet et de toutes ses propriétés
- methods : fonctions à déclencher manuellement ou sur événement (v-on)
- computed : propriété réactive, calculée à partir d'une ou plusieurs autres variables
- watch : surveille une ou plusieurs variables et déclenche une fonction
- hooks on* : fonctions qui se déclenchent à des moments précis du lifecycle

## Traduction

internationalization = i18n
localization = L10n

## Lifecycle 

`Hooks` => permet de se brancher lors d'un événement du cycle de vie de Vue

Ex:

Options APi   |   Composition APi
`mounted`     |   `onMounted()`
`unmounted`   |   `onUnmounted()`

## Styles

npm add Sass

<style scoped></style>
  - Portée des modifications à apporter sur le document. Va rajouter un attribut sur le premier élément du template et donc éviter de modifier les autres éléments de la page par erreur (bleed)
- Permet de lazy load les styles.
- Plus propre

<style module></style>
Comme le scoped, mais va rajouter préfixer directement les classes et non le premier composant du template


On peut dynamiser le style :style dans le template
On peut aussi injecter des v-bind dans le css pour avoir des valeurs dynamiques.
