var i = 0


function lista_vendas() {
    /* Base de Dados */
    var sell = [
        { id: 1, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 2, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 3, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 4, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 5, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 6, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 7, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 1, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 2, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 3, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 4, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 5, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 6, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 7, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 1, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 2, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 3, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 4, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 5, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 6, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 7, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' },
        { id: 8, subtot: 100, stats: 'P', descon: '10%', tot: 100, cpf: '000,000,000-01', formpag: 'Crédito' }
    ]

    const lista_venda = document.querySelector('.dados_venda')
    /* Inserção de Dados Dinâmicamente */
    lista_venda.insertAdjacentHTML('beforeend',
    `<tr class="dados_item">
        <th scope="row">${sell[i].id}</th>
        <td>${sell[i].subtot}</td>
        <td>${sell[i].stats}</td>
        <td>${sell[i].descon}</td>
        <td>${sell[i].tot}</td>
        <td>${sell[i].cpf}</td>
        <td>${sell[i].formpag}</td>
        <td><img src="../../images/contrato.png" alt=""></td>
        <td><img src="../../images/lixeira-de-reciclagem.png" alt=""></td>
    </tr>`
    )
    i = i + 1
}