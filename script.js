function gerarRelatorio() {
  var dataInicio = prompt("Data de Início (DD/MM/AAAA):");
  if (dataInicio === null) return; // User pressed cancel
  if (!isValidDate(dataInicio)) {
    alert("Data de início inválida. Por favor, insira uma data válida no formato DD/MM/AAAA.");
    return;
  }
  
  var dataFim = prompt("Data de Fim (DD/MM/AAAA):");
  if (dataFim === null) return; // User pressed cancel
  if (!isValidDate(dataFim)) {
    alert("Data final inválida. Por favor, insira uma data válida no formato DD/MM/AAAA.");
    return;
  }
  
  var idFila = prompt("ID da Fila:");
  if (idFila === null) return; // User pressed cancel
  if (!Number.isInteger(Number(idFila))) {
    alert("O ID da fila deve ser um número inteiro.");
    return;
  }

  fetchCallHistory(dataInicio, dataFim, idFila);
}

function isValidDate(dateString) {
  var regexDate = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
  if (!regexDate.test(dateString)) return false;
  var parts = dateString.split("/");
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10);
  if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;
  var maxDays = [0, 31, 28 + (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day > 0 && day <= maxDays[month];
}
