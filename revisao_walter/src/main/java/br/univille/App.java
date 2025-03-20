package br.univille;

import java.util.Arrays;

import br.univille.entity.Cidade;
import br.univille.entity.Pessoa;
import br.univille.entity.Pokemon;


public class App {
    public static void main(String[] args) throws Exception {
        //System.out.println("Hello, World!");
        //Instância
        Cidade jlle = new Cidade();
        jlle.setNome("Joinville");
        jlle.setEstado("Santa Catarina");
        
        Pokemon jigglypuff = new Pokemon("JigglyPuff");
        Pokemon porygon= new Pokemon("Porygon");

        Pessoa mariazinha = new Pessoa("Mariazinha");
        Pessoa zezinho = new Pessoa();
        zezinho.setNome("Zezinho");
        zezinho.setCidade(jlle);
        zezinho.getListaPokemon().add(jigglypuff);
        zezinho.getListaPokemon().add(porygon);
        //zezinho.getListaPokemon().add(123);
        //zezinho.getListaPokemon().add(112.2);
        //zezinho.getListaPokemon().add("eu nao acredito");
        //zezinho.getListaPokemon().add(true);
        //zezinho.getListaPokemon().add('a');

        for(int i=0;i<zezinho.getListaPokemon().size();i++){
            System.out.println(zezinho.getListaPokemon().get(i));
        }

        for(Pokemon umPokemon : zezinho.getListaPokemon()){
            System.out.println(umPokemon);
        }
        zezinho.getListaPokemon().stream().forEach(System.out::println);
        

        System.out.println(mariazinha);
        System.out.println(zezinho);



    }
}
