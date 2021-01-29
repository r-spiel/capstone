package com.calendarapi.calendar.plant;

import javax.persistence.*;

@Entity
@Table(name = "plant")
public class Plant {
    @Id
    @SequenceGenerator(
            name = "plant_sequence",
            sequenceName = "plant_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "plant_sequence"
    )

    private Long id;
    private String name;
    private String scientificName;
    private String notes;
    private Integer lifespan;
    private Integer harvest;
    private String sunRequirement;

    // User plant is inheriting this constructor
    public Plant(Long id, String name, String scientificName, String notes, Integer lifespan, Integer harvest, String sunRequirement) {
        this.id = id;
        this.name = name;
        this.scientificName = scientificName;
        this.notes = notes;
        this.lifespan = lifespan;
        this.harvest = harvest;
        this.sunRequirement = sunRequirement;
    }

    public Plant(String name, String scientificName, String notes, Integer lifespan, Integer harvest, String sunRequirement) {
        this.name = name;
        this.scientificName = scientificName;
        this.notes = notes;
        this.lifespan = lifespan;
        this.harvest = harvest;
        this.sunRequirement = sunRequirement;
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
}
