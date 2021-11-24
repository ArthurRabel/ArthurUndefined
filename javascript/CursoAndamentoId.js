let organizacao = document.querySelector("#section1-titulo");
let curso = document.querySelector("#curso");
let detalhes = document.querySelector("#InfoDetalhes");
let skill1 = document.querySelector("#skill1");
let skill2 = document.querySelector("#skill2");
let skill3 = document.querySelector("#skill3");
let skill4 = document.querySelector("#skill4");
let skill5 = document.querySelector("#skill5");
let skill6 = document.querySelector("#skill6");
let skill7 = document.querySelector("#skill7");
let skill8 = document.querySelector("#skill8");
let img = document.querySelector("#matriculaCertificado");
const idCurso = localStorage.getItem("idCurso");
const Cursos = [
    {
        'Organizacao': 'Instituto Federal de Brasilia',
        'Curso' : 'Tecnico de informática',
        'Detalhes' : 'Tecnico integrado ao ensino médio 2020-2023, atualmente no 2°ano',
        'Skill1' : '-Desenvolvimento web (Javascript e html)',
        'Skill2' : '-Desenvolvimento desktop (javascript)',
        'Skill3' : '-Sistema operacionais',
        'Skill4' : '-Banco de dados',
        'Skill5' : '-basico de engenharia de software',
        'Skill6' : '-Logica de programação',
        'Skill7' : '-Segurança da Informação',
        'Skill8' : '-Web Designer',
        'Image' : '../img/matricula.png'
    },
    {
        'Organizacao': 'Udemy',
        'Curso' : 'front-end e back-end',
        'Detalhes' : 'estudo em 20% do curso',
        'Skill1' : '-Javascript',
        'Skill2' : '-Typescript ',
        'Skill3' : '-Node.js, Frameworks e bibliotecas',
        'Skill4' : '-NoSql',
        'Skill5' : '-React',
        'Skill6' : '-Design Patterns',
        'Skill7' : '-HTML5 e CSS3 ',
        'Skill8' : '',
        'Image' : '../img/Image Error.png',
    }
]
document.addEventListener("DOMContentLoaded", function(event) {

    organizacao.innerText = Cursos[idCurso].Organizacao
    curso.innerText = Cursos[idCurso].Curso
    detalhes.innerText = Cursos[idCurso].Detalhes
    skill1.innerText = Cursos[idCurso].Skill1
    skill2.innerText = Cursos[idCurso].Skill2
    skill3.innerText = Cursos[idCurso].Skill3
    skill4.innerText = Cursos[idCurso].Skill4
    skill5.innerText = Cursos[idCurso].Skill5
    skill6.innerText = Cursos[idCurso].Skill6
    skill7.innerText = Cursos[idCurso].Skill7
    skill8.innerText = Cursos[idCurso].Skill8
    img.src = Cursos[idCurso].Image

});