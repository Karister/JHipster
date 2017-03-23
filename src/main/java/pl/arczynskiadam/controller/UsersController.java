package pl.arczynskiadam.controller;

import pl.arczynskiadam.data.UserData;
import pl.arczynskiadam.service.UsersMockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {
    
    @Autowired
    UsersMockService usersService;
    
    @RequestMapping("/underage")
    public List<UserData> underageUsers(HttpServletRequest request) {
        return usersService.getUnderageUsers();
    }

    @RequestMapping("/adult")
    public List<UserData> adultUsers(HttpServletRequest request) {
        return usersService.getAdultUsers();
    }
}
