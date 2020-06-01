package com.staff.controller;

import com.staff.entity.Role;
import com.staff.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping("admin")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Map<String,String> login(
            @RequestBody Map<String,String> paraMap
            ){
        String staffID = paraMap.get("staffID");
        String password = paraMap.get("password");

        Map<String, String> resultMap = new HashMap<String, String>();

        String resString;

        if(staffID == null || password== null)
            resString = "请填写完整用户信息";
        else resString = loginService.login(staffID, password);

        resultMap.put("result",resString);

        return resultMap;
    }
}
