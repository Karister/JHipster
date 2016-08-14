package pl.arczynskiadam.controller;

import pl.arczynskiadam.data.UserData;
import pl.arczynskiadam.service.UsersMockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController()
public class PagesController {
    
    @Autowired
    UsersMockService usersService;
    
    @RequestMapping("users1")
    public List<UserData> get1User(HttpServletRequest request) {
        return usersService.getUsers1();
    }

    @RequestMapping("users2")
    public List<UserData> get2Users(HttpServletRequest request) {
        return usersService.getUsers2();
    }
}