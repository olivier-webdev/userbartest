export const dataBeers = [
  {
    id: 1,
    name: "Paix-Dieux",
    price: 7,
    image: "assets/images/paix_dieu.png",
    description:
      "Cette bière était autrefois produite à l’abbaye de Paix Dieu, où le calendrier lunaire jouait un rôle central. Afin de conserver l’âme de l’abbaye, la Brasserie s’impose la rigueur de ne brasser que par période de pleine lune. Le résultat? Une triple de 10% onctueuse et pleine de caractère; une bière artisanale dans la plus pure tradition des bières belges d’abbaye.",
  },
  {
    id: 2,
    name: "Triple Karmeliet 3K Test le roi de la flechette",
    price: 6.5,
    image: "assets/images/tripleK.jpg",
    description:
      "A la dégustation, cette bière belge présente une robe blonde dorée et une mousse crémeuse. Le nez s'avère à la fois raffiné et complexe. On retrouve ainsi les notes d'épices et de banane propres à la levure utilisée mêlées aux arômes agrumes du houblon Styrians. En bouche, ce sont les différentes céréales qui s'expriment en premier, associées ensuite aux touches houblonnées du Styrian. La texture, à la fois sèche et crémeuse rend la Tripel Karmeliet délicieusement équilibrée.",
  },
  {
    id: 3,
    name: "Queue de charrue",
    price: 5.5,
    image: "assets/images/queue_de_charrue.png",
    description:
      "La Queue de Charrue Blonde est une bière belge de fermentation haute qui présente dans le verre une robe de couleur blond clair à la transparence limpide mais troublée par la présence de levure dans la bouteille. Le tout est couvert d'une couche de mousse assez abondante mais peu persistante. Elle présente moins d'amertume que la Triple mais reste très moelleuse en bouche et présente un léger arôme fruité ainsi qu'un goût doux et généreux.",
  },
  {
    id: 4,
    name: "Duvel",
    price: 5,
    image: "assets/images/duvel.png",
    description:
      "La Duvel est une bière naturelle dotée d’une amertume subtile, d’un arôme raffiné et d’un goût prononcé de houblon. La refermentation en bouteille et une longue maturation garantissent un style authentique, un perlant délicat et un goût doux d’alcool agréable.",
  },
  {
    id: 5,
    name: "La fruit déféndu",
    price: 6,
    image: "assets/images/fruit_defendu.jpg",
    description:
      "La Fruit Défendu présente dans le verre une étonnante robe acajou tirant sur le bordeaux qui libère des arômes maltés et épicés relativement doux et qui évoquent la coriandre et les fruits. En bouche, on retrouve des saveurs très douces qui masquent parfaitement les 9° de cette bière. Avec un ton presque mielleux, la Fruit Défendu développe sur le palais des saveurs maltées et épicées avec des notes de fruits et de levure. La coriandre donne à l'ensemble une certaine rondeur tandis que l'alcool n'est perceptible que dans le réchauffement de la gorge.",
  },
  {
    id: 6,
    name: "Kasteel rouge",
    price: 6.5,
    image: "assets/images/kasteel_rouge.jpg",
    description:
      "La Kasteel Rouge est un mélange de la traditionnelle Kasteel Brune avec une bière aux cerises du Nord ayant mûri pendant une période d’au moins six mois. Cette bière se présente sous une robe de couleur rouge à l'éclat rubis. Couverte d'une mousse dense et crémeuse de couleur rosée, elle présente une vive effervescence. Au nez on retrouve la cerise dans tous ses états : cerise, cerise confite, sirop de cerise...",
  },
  {
    id: 7,
    name: "Anosteke",
    price: 5.5,
    image: "assets/images/anosteke.jpg",
    description:
      "Cette Bière Blonde de haute fermentation dorée est légèrement trouble exhale un nez épicé, la bouche est puissante , la finale est trés houblonnée.",
  },
].sort((a, b) => a.name.localeCompare(b.name));
