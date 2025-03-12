package br.univille;
public class Pessoa {
    //atributo (variável)
    private String nome;

    //Construtor (mesmo nome da classe, não tem retorno)
    public Pessoa(String nome) {
        //this referencia a classe
        this.nome = nome;
    }
    //Dois métodos com assinatura semelhante = polimorfismo
    public Pessoa() {
        
    }

    //método
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    //Sobreescrita de método (overwrite)
    @Override
    public String toString(){
        
        return super.toString() + getNome();
    }
    
}
