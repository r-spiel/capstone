package com.calendarapi.calendar.event;

import java.time.LocalDate;

public class Event {
    // TODO: belongs to Plant
    
    private Long id;
    private LocalDate startTime;
    private LocalDate endTime;

    public Event(Long id, LocalDate startTime, LocalDate endTime) {
        this.id = id;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public Event(LocalDate startTime, LocalDate endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDate startTime) {
        this.startTime = startTime;
    }

    public LocalDate getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDate endTime) {
        this.endTime = endTime;
    }
}
