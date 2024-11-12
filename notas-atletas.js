// Função que recebe a matriz de atletas e calcula a média válida
function calcularMediaAtletas(atletas) {
    // Loop que percorre cada atleta
    atletas.forEach(atleta => {
      // Ordena as notas do atleta para facilitar a remoção da maior e menor
      let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
  
      // Remove a maior e menor nota, considerando as 3 notas do meio
      let notasValidas = notasOrdenadas.slice(1, 4);
  
      // Calcula a média das 3 notas do meio
      let somaNotas = notasValidas.reduce((acc, nota) => acc + nota, 0);
      let media = somaNotas / notasValidas.length;
  
      // Exibe o nome do atleta, as notas e a média
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);
      console.log(`Média Válida: ${media.toFixed(6)}`);
      console.log(''); // Linha em branco para separar os resultados de cada atleta
    });
  }
  
  // Dados dos atletas
  let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas: [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
  ];
  
  // Chama a função para calcular as médias
  calcularMediaAtletas(atletas);
  