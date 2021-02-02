package com.calendarapi.calendar.event;

import com.calendarapi.calendar.userPlant.UserPlant;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "events")
public class Event {
    @Id
    @SequenceGenerator(
            name = "event_sequence",
            sequenceName = "event_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "event_sequence"
    )
    
    private Long id;
    private String startTime;
    private String endTime;
    private String title;
    private String notes;

    @JsonIgnore // prevents from serializing userPlant
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "plant_fid", nullable = false)
    private UserPlant userPlant;

    public Event () {
    }

    public Event(Long id, String startTime, String endTime, String title, String notes) {
        this.id = id;
        this.startTime = startTime;
        this.endTime = endTime;
        this.title = title;
        this.notes = notes;
    }

    public Event(String startTime, String endTime, String title, String notes) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.title = title;
        this.notes = notes;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public UserPlant getUserPlant() {
        return userPlant;
    }

    public void setUserPlant(UserPlant userPlant) {
        this.userPlant = userPlant;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
