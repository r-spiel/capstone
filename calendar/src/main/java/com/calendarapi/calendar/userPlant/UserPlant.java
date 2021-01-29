package com.calendarapi.calendar.userPlant;

import com.calendarapi.calendar.plant.Plant;

public class UserPlant extends Plant {
    // extends attributes from Plant class
    // TODO: belongs to User
    // TODO: add has many Events, so will hold list of Events
    // TODO: consider UserPlant could have color attribute which would give all the events the same color in the calendar

    public UserPlant(Long id, String name, String scientificName, String notes, Integer lifespan, Integer harvest, String sunRequirement) {
        super(id, name, scientificName, notes, lifespan, harvest, sunRequirement);
    }


}
