// catálogo de filmes e séries

const catalogo = [
  {
    id: 1,
    titulo: "Smallville",
    tipo: "serie",
    ano: 2001,
    generos: ["ação", "drama"],
    nota: 9.0,
    assistido: true
  },
  {
    id: 2,
    titulo: "Vingadores: Ultimato",
    tipo: "filme",
    ano: 2019,
    generos: ["ação", "aventura"],
    nota: 9.4,
    assistido: true
  },
  {
    id: 3,
    titulo: "Homem de Ferro",
    tipo: "filme",
    ano: 2008,
    generos: ["ação"],
    nota: 8.9,
    assistido: true
  },
  {
    id: 4,
    titulo: "Sobrenatural",
    tipo: "serie",
    ano: 2005,
    generos: ["terror", "drama"],
    nota: 9.2,
    assistido: true
  },
  {
    id: 5,
    titulo: "Lucifer",
    tipo: "serie",
    ano: 2016,
    generos: ["fantasia", "crime"],
    nota: 8.8,
    assistido: true
  },
  {
    id: 6,
    titulo: "Batman Begins",
    tipo: "filme",
    ano: 2005,
    generos: ["ação", "aventura"],
    nota: 8.7,
    assistido: false
  }
];

// mostrar catálogo completo
console.log(catalogo);

// mostrar primeiro título
console.log("Primeiro título:", catalogo[0].titulo);

// mostrar ano do último
console.log("Ano do último:", catalogo[catalogo.length - 1].ano);

// mostrar segundo gênero do terceiro
if (catalogo[2].generos[1]) {
  console.log("Segundo gênero:", catalogo[2].generos[1]);
} else {
  console.log("O terceiro item só tem um gênero");
}

// listar títulos
catalogo.forEach(function(item) {
  console.log("- [" + item.tipo + "] " + item.titulo + " (" + item.ano + ")");
});

// títulos em maiúsculo
const titulosMaiusculos = catalogo.map(function(item) {
  return item.titulo.toUpperCase();
});

console.log(titulosMaiusculos);

// itens não assistidos
const naoAssistidos = catalogo.filter(function(item) {
  return item.assistido == false;
});

console.log("Não assistidos:", naoAssistidos.length);

// procurar nota alta
const notaAlta = catalogo.find(function(item) {
  return item.nota >= 9;
});

if (notaAlta) {
  console.log("Nota alta:", notaAlta.titulo, notaAlta.nota);
} else {
  console.log("Nenhum item com nota alta");
}

// média geral
const somaNotas = catalogo.reduce(function(total, item) {
  return total + item.nota;
}, 0);

const media = somaNotas / catalogo.length;

console.log("Média geral:", media.toFixed(2));

// média assistidos
const assistidos = catalogo.filter(function(item) {
  return item.assistido == true;
});

const somaAssistidos = assistidos.reduce(function(total, item) {
  return total + item.nota;
}, 0);

const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("Média assistidos:", mediaAssistidos.toFixed(2));

// verificar anos e gêneros
const antigo = catalogo.some(function(item) {
  return item.ano < 2000;
});

const genero = catalogo.every(function(item) {
  return item.generos.length > 0;
});

console.log("Tem item antes de 2000?", antigo);
console.log("Todos têm gênero?", genero);

// contar filmes e séries
const filmes = catalogo.filter(function(item) {
  return item.tipo == "filme";
}).length;

const series = catalogo.filter(function(item) {
  return item.tipo == "serie";
}).length;

// top 3 notas
const ranking = [...catalogo]
  .sort(function(a, b) {
    return b.nota - a.nota;
  })
  .slice(0, 3);

// mostrar resumo na tela
document.getElementById("output").innerHTML =
  "<h2>Resumo</h2>" +
  "<p>Total: " + catalogo.length + "</p>" +
  "<p>Filmes: " + filmes + "</p>" +
  "<p>Séries: " + series + "</p>" +
  "<p>Não assistidos: " + naoAssistidos.length + "</p>" +
  "<p>Média geral: " + media.toFixed(2) + "</p>" +
  "<h3>Top 3:</h3>" +
  "<ol>" +
  "<li>" + ranking[0].titulo + " - " + ranking[0].nota + "</li>" +
  "<li>" + ranking[1].titulo + " - " + ranking[1].nota + "</li>" +
  "<li>" + ranking[2].titulo + " - " + ranking[2].nota + "</li>" +
  "</ol>";