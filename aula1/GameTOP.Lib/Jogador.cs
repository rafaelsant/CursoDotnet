using System;
using GameTOP.Interface;

namespace GameTOP.Lib
{
    public class Jogador : iJogador
    {
        public readonly string _nome;

        public Jogador(string nome)
        {
            _nome = nome;
        }
        public string chuta()
        {
            return $"{_nome} está chutando \n";
        }
        public string corre()
        {
            return $"{_nome} está correndo \n";
        }
        public string passe()
        {
            return $"{_nome} está passando \n";
        }
    }
}