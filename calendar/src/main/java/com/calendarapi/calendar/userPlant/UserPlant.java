package com.calendarapi.calendar.userPlant;

import com.calendarapi.calendar.event.Event;
import com.calendarapi.calendar.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "userPlants",
        uniqueConstraints = {@UniqueConstraint( name = "idx_userfid_name", columnNames = {"user_fid", "name"})
}) // unique constraints validates the plant name is unique for that user's list
public class UserPlant {
    @Id
    @SequenceGenerator(
            name = "userPlant_sequence",
            sequenceName = "userPlant_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "userPlant_sequence"
    )

    private Long id;
    private String name;
    private String scientificName;
    private String notes;
    private Integer lifespan;
    private Integer harvest;
    private String sunRequirement;
    private String imageUrl;

    @JsonIgnore // prevents from serializing user
    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(name="user_fid", nullable = false)
    private User user;

    @OneToMany(mappedBy = "userPlant", cascade = CascadeType.REMOVE)
    List<Event> eventList = new ArrayList< >();

    public UserPlant () {
    }

    public UserPlant(Long id, String name, String scientificName, String notes, Integer lifespan, Integer harvest, String sunRequirement, String imageUrl) {
        this.id = id;
        this.name = name;
        this.scientificName = scientificName;
        this.notes = notes;
        this.lifespan = lifespan;
        this.harvest = harvest;
        this.sunRequirement = sunRequirement;
        this.imageUrl = imageUrl;
    }

    public UserPlant(String name, String scientificName, String notes, Integer lifespan, Integer harvest, String sunRequirement, String imageUrl) {
        this.name = name;
        this.scientificName = scientificName;
        this.notes = notes;
        this.lifespan = lifespan;
        this.harvest = harvest;
        this.sunRequirement = sunRequirement;
        this.imageUrl = imageUrl;
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

    public String getScientificName() {
        return scientificName;
    }

    public void setScientificName(String scientificName) {
        this.scientificName = scientificName;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Integer getLifespan() {
        return lifespan;
    }

    public void setLifespan(Integer lifespan) {
        this.lifespan = lifespan;
    }

    public Integer getHarvest() {
        return harvest;
    }

    public void setHarvest(Integer harvest) {
        this.harvest = harvest;
    }

    public String getSunRequirement() {
        return sunRequirement;
    }

    public void setSunRequirement(String sunRequirement) {
        this.sunRequirement = sunRequirement;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Event> getEventList() {
        return eventList;
    }

    public void setEventList(List<Event> eventList) {
        this.eventList = eventList;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
