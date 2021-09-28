// Classe livro
class livro {
    constructor(titulo, autor, isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
    }
    
}

// Listando os livros 



function mostraLivro(livro){     // Função que mostra os livros alocados
    const mostra = document.getElementById("mostra");

   const row = document.createElement("tr");
   row.innerHTML += "<td id='nome_titulo' >" + livro.titulo + "</td><td>" + livro.autor + "</td><td>" + livro.isbn + "</td><td><button id='deleta'>Delete</button</td></tr>"
   mostra.appendChild(row);
    
}

function removeLivro(linha){  // Função que deleta os livros da pagina
    linha.parentNode.parentNode.remove();
}

function getLivros(){
    let livros;
    if(localStorage.getItem("livros") == null){
        livros = [];
    }
    else{
        livros =  JSON.parse(localStorage.getItem("livros"));
    }
    return livros;
}
function adicionaLivro(livro){
    const livros = getLivros();
    livros.push(livro);
    localStorage.setItem("livros", JSON.stringify(livros));
}

function excluiLivro(isbn){
    const livros = getLivros();

    livros.forEach((livro, index) => {
        if(livro.isbn == isbn){
            livros.splice(index, 1);
        }
    })

    localStorage.setItem("livros", JSON.stringify(livros));
}
       
const lista = getLivros();

let i = 0;

while(lista[i]!=null){
    mostraLivro(lista[i]);
    i++;
}


document.getElementById("enviar").addEventListener("click", (e) => {

        e.preventDefault();
        const titulo = document.getElementById("titulo").value;
        const autor = document.getElementById("autor").value;
        const isbn = document.getElementById("isbn").value;
        
        const novoLivro = new livro(titulo,autor,isbn); 
             // Enviando Livro
        
        if(titulo == " " || autor == " " || isbn == " "){
            alert("Por favor, preencha todos os campos!!");
        }else{

        

        
        

        document.getElementById("titulo").value = " ";
        document.getElementById("autor").value = " ";
        document.getElementById("isbn").value = " ";

        adicionaLivro(novoLivro); 
        mostraLivro(novoLivro);
           
        
        }
        
    
    
})
document.getElementById("mostra").addEventListener("click", (e) => {
    excluiLivro(e.target.parentNode.previousElementSibling.textContent);
    removeLivro(e.target);    

})
        



