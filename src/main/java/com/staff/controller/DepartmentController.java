package com.staff.controller;

import com.staff.entity.*;
import com.staff.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("admin")
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    // 获取所有人事变动
    @RequestMapping(value = "/get/department/change/list", method = RequestMethod.GET)
    public List<Personnel> getPersonnel(){
        return departmentService.getPersonnel();
    }

    // 返回受教育水平
    @RequestMapping(value = "/get/edulv", method = RequestMethod.GET)
    public List<EduLevel> getAllEduLevel(){
        return departmentService.getAllEdulevel();
    }

    // 返回所有职务
    @RequestMapping(value = "/get/job", method = RequestMethod.GET)
    public List<Job> getAllJob(){
        return departmentService.getAllJob();
    }

    // 返回人事变动类型
    @RequestMapping(value = "/get/personnel/change", method = RequestMethod.GET)
    public List<PersonnelChange> getAllPersonnelChange(){
        return departmentService.getAllPersonnelChange();
    }

    // 返回所有部门
    @RequestMapping(value = "/get/department", method = RequestMethod.GET)
    public List<Department> getAllDepartment(){
        return departmentService.getAllDepartment();
    }

}
