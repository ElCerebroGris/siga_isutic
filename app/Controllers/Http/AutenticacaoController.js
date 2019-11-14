'use strict'

const usuario = use('App/Models/Usuario');
const pessoa = use('App/Models/Pessoa')
class AutenticacaoController {

	//== Metodo principal, faz a chamada da view de login
	async index({view})
	{
         return view.render('login')
	}

	async Autenticar({request,view})
	{
		//Apenas para teste,sem autenticacao ainda
		const dados = request.only(['nome','senha'])
		if( dados.nome == 'Jelson Neto' && dados.senha == '1234' )
		   return view.render('Estudante/Layout/main')
		else
			return 'Usuario nao encontrado'
	}
}

module.exports = AutenticacaoController
