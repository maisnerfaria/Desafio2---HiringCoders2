function validarClientes(idIdentCliente, idEndCliente, idEmailCliente, idTelCliente) {
    let ident = document.getElementById(idIdentCliente).value;
    let endereco = document.getElementById(idEndCliente).value;
    let email = document.getElementById(idEmailCliente).value;
    let telefone = document.getElementById(idTelCliente).value;

    if (ident == "")
        alert("Nome do cliente não pode estar em branco. Favor preenchê-lo!");
    else if (endereco == "")
        alert("Endereço do cliente não pode estar em branco. Favor preenchê-lo!");
    else cadastrarCliente(ident, endereco, email, parseInt(telefone));
}

function cadastrarCliente(ident, adress, mail, tele) {
    let novoCliente = {nome:ident, endereco:adress, email:mail, telefone:tele};

    if (typeof(Storage) !== "undefined") {
        let clientes = localStorage.getItem("clientes");
        if (clientes == null) clientes = []; // Nenhum cliente ainda foi cadastrado
        else clientes = JSON.parse(clientes);
        clientes.push(novoCliente); // Adiciona um novo cliente
        localStorage.setItem("clientes",JSON.stringify(clientes))
        alert("O cliente "+ident+" foi cadastrado com sucesso!");
        atualizarTotalClientes("totalClientes");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}


function atualizarTotalClientes(idCampo) {
    localStorage.setItem("totalClientes",++document.getElementById(idCampo).innerHTML)
}

function carregarTotalClientes(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalClientes = localStorage.getItem("totalClientes");
        if (totalClientes == null) totalClientes = 0;
        document.getElementById(idCampo).innerHTML = totalClientes;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

function listarClientes() {
    if (typeof(Storage) !== "undefined") {
        let clientes = localStorage.getItem("clientes");
        document.write("<h1>Clientes:</h1>")
        if (clientes == null)
            document.write("<h3>Ainda não há nenhum cliente cadastrado</h3>");
        else {
            clientes = JSON.parse(clientes);
            clientes.forEach(cliente => {
                document.write("<ul>");
                document.write("<li>Nome do cliente: "+cliente.nome+"</li>");
                document.write("<li>Endereço do cliente: "+cliente.endereco+"</li>");
                document.write("<li>E-mail do cliente: "+cliente.email+"</li>");
                document.write("<li>Telefone do cliente: "+cliente.telefone+"</li>");
                document.write("</ul>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}