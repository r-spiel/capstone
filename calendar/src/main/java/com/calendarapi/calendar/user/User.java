package com.calendarapi.calendar.user;

import com.calendarapi.calendar.userPlant.UserPlant;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "user_account")
public class User {
    // TODO: User has many UserPlants
    // TODO: User has many Events thru Plants
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )

    private Long id;
    private String name;
    private String email;
    @OneToMany(mappedBy = "user")
//    @JoinColumn(name = "user_fid", referencedColumnName = "id")
    List<UserPlant> userPlantList = new ArrayList< >();

    public User() {
    }

    public User(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List < UserPlant > getUserPlantList() {
        return userPlantList;
    }

    public void setUserPlantList(List < UserPlant > userPlantList) {
        this.userPlantList = userPlantList;
    }
}
