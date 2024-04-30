function submitForm() {

    let titulo = document.getElementById("titulo").value;
    let descricao = document.getElementById("descricao").value;

    if (titulo && descricao) {

        let formData = {
            titulo: titulo,
            descricao: descricao
        };

        addToTable(formData);

        document.getElementById("form").reset();
    } else {
        alert("Por favor, Preencha todos os campos!");
    }
}

function addToTable(formData) {
    let tableBody = document.getElementById("tableBody")
    let newRow = tableBody.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.textContent = formData.titulo;
    cell2.textContent = formData.descricao;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.onclick = function () {

        let row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
    };

    cell3.appendChild(deleteButton);

}

console.log(submitForm)