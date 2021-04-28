//import Head from 'next/head'
//mport styles from '../styles/Home.module.css'
import { Pessoa } from "../lib/Pessoa.js"

export default function Home(){  
  var pessoa = new Pessoa('Mário Nak','123.456.789/12')
    return <div>{pessoa.cpf} ------ {pessoa.nome}</div>
}
