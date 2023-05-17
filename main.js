const Alunos = [
    {nome: "Matheus", nota: 10},
    {nome: "josé", nota: 5},
    {nome: "Laura", nota: 3},
    {nome: "Roberto", nota: 8},
    {nome: "Nathan", nota: 9.5},
    {nome: "Heitor", nota: 4},
    {nome: "Cristiano", nota: 7}    
]

const verifNota = Alunos.filter(({nota}) => nota >= 6)
.map(({nome, nota}) => console.log(`Nome do aluno: ${nome} Nota: ${nota}`))
