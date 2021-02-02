package com.calendarapi.calendar.event;

import com.calendarapi.calendar.userPlant.UserPlant;
import com.calendarapi.calendar.userPlant.UserPlantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class EventService {

    private final EventRepository eventRepository;
    private final UserPlantService userPlantService;

    @Autowired
    public EventService(EventRepository eventRepository, UserPlantService userPlantService) {
        this.eventRepository = eventRepository;
        this.userPlantService = userPlantService;
    }

    // Index: list of a User Plant's events
    public List<Event> getSinglePlantEvents(Long plantId) {
        UserPlant userPlant = userPlantService.showUserPlant(plantId);
        List<Event> plantEventList = userPlant.getEventList();
        return plantEventList;
    }

    // Show - by Event ID
    public Event showEvent(Long eventId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new IllegalStateException("Event with ID: " + eventId + "does not exist")
                );
        return event;
    }

    // Create
    public void addNewEvent(Event event, Long plantId) {
        UserPlant userPlant = userPlantService.showUserPlant(plantId);

        event.setUserPlant(userPlant);
        eventRepository.save(event);
    }

    // Update
    @Transactional
    public void updateEvent(Long eventId, String startTime, String endTime, String title, String notes) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new IllegalStateException("Event with ID: " + eventId + " does not exist")
                );

        if (startTime != null && startTime.length() > 0 ) {
            event.setStartTime(startTime);
        }
        if (endTime != null && endTime.length() > 0 ) {
            event.setEndTime(endTime);
        }
        if (notes != null && notes.length() > 0 ) {
            event.setNotes(notes);
        }
        if (title != null && title.length() > 0 ) {
            event.setTitle(title);
        }

        eventRepository.save(event);
    }

    public void deleteEvent(Long eventId) {
        boolean exists = eventRepository.existsById(eventId);
        if (!exists) {
            throw new IllegalStateException("Event with ID: " + eventId + " does not exist");
        }
        eventRepository.deleteById(eventId);
    }
}
