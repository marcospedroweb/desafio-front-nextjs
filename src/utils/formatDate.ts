export function formatDate(date: Date): string {

  const diasSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ]

  const diaSemana = diasSemana[date.getDay()]
  const dia = String(date.getDate()).padStart(2, "0")
  const mes = String(date.getMonth() + 1).padStart(2, "0")
  const ano = date.getFullYear()

  return `${diaSemana}, ${dia}/${mes}/${ano}`
}
