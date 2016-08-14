package pl.arczynskiadam.service;

import pl.arczynskiadam.data.UserData;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

@Component
public class UsersMockService {
    public List<UserData> getUsers1() {
        return Stream.of(
                new UserData("User 1", 15),
                new UserData("User 2", 22),
                new UserData("User 3", 60)
        ).collect(toList());
    }
    
    public List<UserData> getUsers2() {
        return Stream.of(
                new UserData("User 4", 19),
                new UserData("User 5", 23),
                new UserData("User 6", 17),
                new UserData("User 7", 49),
                new UserData("User 8", 38),
                new UserData("User 9", 20),
                new UserData("User 10", 18),
                new UserData("User 11", 53)
        ).collect(toList());
    }
}
