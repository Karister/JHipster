package pl.arczynskiadam.controller;

import pl.arczynskiadam.data.UserData;
import pl.arczynskiadam.service.MockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController()
public class TestController {
    
    @Autowired
    MockService service;
    
    @RequestMapping("user1")
    public List<UserData> get1User(HttpServletRequest request) {
        return service.get1User();
    }

    @RequestMapping("user2")
    public List<UserData> get2Users(HttpServletRequest request) {
        return service.get2Users();
    }
}
