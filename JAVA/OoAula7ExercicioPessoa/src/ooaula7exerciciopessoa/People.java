
package ooaula7exerciciopessoa;
public class People {
    
    // Atributos
    private String name;
    private int age;
    private String sexo;

    public People(String name, int age, String sexo) {
        this.name = name;
        this.age = age;
        this.sexo = sexo;
    }
    
    
    
    public void havingBirthday(){
        this.age++;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }
    
    
}
