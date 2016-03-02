package com.example.service;

import com.example.data.UserData;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

@Component
public class MockService {
    public List<UserData> get1User() {
        return Stream.of(
                new UserData("name1", 1)
        ).collect(toList());
    }
    
    public List<UserData> get2Users() {
        return Stream.of(
                new UserData("name1", 1),
                new UserData("name2", 2)
        ).collect(toList());
    }
}
