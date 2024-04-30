
function imprimirAlunoscomNotaMédiaMaiorouIguala7(alunos) {

    for (const estudante of alunos) {
        const notamédia = estudante.notas.reduce((soma, nota) => soma + nota, 0) / estudante.notas.length;

        if (notamédia >= 7) {
            console.log(`Nome: ${estudante.nome}`);
            console.log(`Média Aritmética: ${notamédia.toFixed(2)}`);
            console.log(`Curso: ${estudante.curso}`);
            console.log();
        }
    }
}
const alunos = [
    { nome: "Maria Joaquinha", notas: [8, 7.5, 9], curso: "Sistemas para Internet" },
    { nome: "João Ricardo", notas: [8, 8.5, 5], curso: "Direito" },
    { nome: "José Henrique", notas: [4, 10, 7], curso: "Administração" },
    { nome: "Pedro da Silva", notas: [6, 7.6, 7.5], curso: "Sistemas para Internet" },
    { nome: "Silvana Morais", notas: [6, 7.5, 9.5], curso: "Sistemas de Informação" },
    { nome: "Patricia Castro", notas: [1, 9, 10], curso: "Arquitetura" },
    { nome: "Joana Ribeiro", notas: [8, 9, 9], curso: "Contabilidade" },
    { nome: "Rafael Rocha", notas: [4, 4, 9], curso: "Sistemas para Internet" },
    { nome: "Gustavo Henrique", notas: [8, 7.5, 5], curso: "Sistemas para Internet" }
];

imprimirAlunoscomNotaMédiaMaiorouIguala7(alunos);