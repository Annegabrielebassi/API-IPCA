import  historicoInflacao  from '../dados/dados.js';

export const buscar_td_dados_ipca= () => {
  return historicoInflacao;
}

export const buscar_ipcaPorAno = (nomeUf) => {
  return historicoInflacao.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};