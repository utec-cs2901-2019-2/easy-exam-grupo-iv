package model;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    String email;
    String last_name;
    String name;
    String password ;
    String phone;

    public User(){    }

    public User(String email, String last_name, String name, String password, String phone ){
        this.setEmail(email);
        this.setLast_name(last_name);
        this.setName(name);
        this.setPassword(password);
        this.setPhone(phone);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}