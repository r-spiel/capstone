package com.calendarapi.calendar.event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EventController {
    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    // Index for a plant's events only
    @GetMapping(path = "userPlants/{plantId}/events")
    public List<Event> getPlantEvents(@PathVariable("plantId") Long plantId) {
        List<Event> plantEventList = eventService.getSinglePlantEvents(plantId);
        return plantEventList;
    }

    // Show
    @GetMapping(path = "userPlants/{plantId}/events/{eventId}")
    public Event showEvent(@PathVariable("eventId") Long eventId) {
        return eventService.showEvent(eventId);
    }

    // Create
    @PostMapping(path = "userPlants/{plantId}/events")
    public void addEvent(@RequestBody Event event, @PathVariable("plantId") Long plantId) {
        eventService.addNewEvent(event, plantId);
    }

    // Update
    @PutMapping(path = "userPlants/{userPlantId}/events/{eventId}")
    public void updateUserPlant(
            @PathVariable("eventId") Long eventId,
            @RequestParam(required = false) String startTime,
            @RequestParam(required = false) String endTime,
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String notes
    ) {
        eventService.updateEvent(eventId, startTime, endTime, title, notes
        );
    }

    // Delete
    @DeleteMapping(path = "userPlants/{userPlantId}/events/{eventId}")
    public void deleteEvent(@PathVariable("eventId") Long eventId) {
        eventService.deleteEvent(eventId);
    }
}
