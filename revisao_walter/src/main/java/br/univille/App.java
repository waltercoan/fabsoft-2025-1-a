package br.univille;
public class App {
    public static void main(String[] args) throws Exception {
        //System.out.println("Hello, World!");
        //Instância
        Pessoa mariazinha = new Pessoa("Mariazinha");
        Pessoa zezinho = new Pessoa();
        zezinho.setNome("Zezinho");

        System.out.println(mariazinha);
        System.out.println(zezinho);



    }
}
