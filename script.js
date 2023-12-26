var estoque = [];

if (localStorage.getItem('estoque')) {
    estoque = JSON.parse(localStorage.getItem('estoque'));
    mostrarEstoque();
}

function adicionarProduto() {
    var produtoInput = document.getElementById("produto");
    var quantidadeInput = document.getElementById("quantidade");

    var produto = produtoInput.value;
    var quantidade = parseInt(quantidadeInput.value);

    if (produto && !isNaN(quantidade) && quantidade > 0) {
        estoque.push({ produto: produto, quantidade: quantidade });


        localStorage.setItem('estoque', JSON.stringify(estoque));

        mostrarEstoque();
    } else {
        alert("Por favor, preencha os campos corretamente.");
    }

    produtoInput.value = "";
    quantidadeInput.value = "";
}

function removerProduto(index) {
    estoque.splice(index, 1);


    localStorage.setItem('estoque', JSON.stringify(estoque));

    mostrarEstoque();
}

function mostrarEstoque() {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    for (var i = 0; i < estoque.length; i++) {
        var produto = estoque[i].produto;
        var quantidade = estoque[i].quantidade;

        var produtoDiv = document.createElement("div");
        produtoDiv.innerHTML = "<strong>Produto:</strong> " + produto + " | <strong>Quantidade:</strong> " + quantidade;

        var removeButton = document.createElement("button");
        removeButton.innerHTML = "Remover";
        removeButton.className = "remove-btn";
        removeButton.onclick = (function (index) {
            return function () {
                removerProduto(index);
            };
        })(i);

        produtoDiv.appendChild(removeButton);
        outputDiv.appendChild(produtoDiv);
    }
}



const btnGenerate = document.querySelector("#generate-pdf");

btnGenerate.addEventListener("click", () => {

    const content = document.querySelector("#content")


    var opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 8 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

    html2pdf().set(options).from(content).save()
}
)
