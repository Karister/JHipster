package pl.arczynskiadam.demo.jhipster.service;

import pl.arczynskiadam.demo.jhipster.data.UserData;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

@Component
public class UsersMockService {
    public List<UserData> getUnderageUsers() {
        return Stream.of(
                new UserData("User 1", 15),
                new UserData("User 2", 8),
                new UserData("User 3", 17)
        ).collect(toList());
    }
    
    public List<UserData> getAdultUsers() {
        return Stream.of(
                new UserData("User 4", 19),
                new UserData("User 5", 23),
                new UserData("User 6", 18),
                new UserData("User 7", 49),
                new UserData("User 8", 38),
                new UserData("User 9", 20),
                new UserData("User 10", 18),
                new UserData("User 11", 53)
        ).collect(toList());
    }
}
