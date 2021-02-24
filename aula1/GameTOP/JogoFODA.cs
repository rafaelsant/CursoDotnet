using GameTOP.Interface;
using GameTOP.Lib;
namespace GameTOP

{
    public class JogoFODA
    {
        private readonly Jogador _jogador1;
        private readonly Jogador _jogador2;

        public JogoFODA(Jogador jogador1, Jogador jogador2)
        {
            _jogador1 = jogador1;
            _jogador2 = jogador2;

        }
        public void iniciarJogo()
        {
            System.Console.Write(_jogador1.corre());
            System.Console.Write(_jogador1.chuta());
            System.Console.Write(_jogador1.passe());
            System.Console.Write("\n************Jogador 2************\n");
            System.Console.Write(_jogador2.corre());
            System.Console.Write(_jogador2.chuta());
            System.Console.Write(_jogador2.passe());
        }
    }
}