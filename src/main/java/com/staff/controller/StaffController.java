package com.staff.controller;

import com.staff.entity.Person;
import com.staff.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(value = "*")
@RestController
@RequestMapping("admin")
public class StaffController {

    @Autowired
    private StaffService staffService;

    // 添加员工
    @RequestMapping(value = "/staff/add", method = RequestMethod.POST)
    public Boolean addStaff(
            @RequestBody Person newPerson
    ){
        return staffService.insertStaff(newPerson);
    }

    // 通过ID获取员工信息
    @RequestMapping(value = "/get/staff/info", method = RequestMethod.GET)
    public Person getStaffInfo(
            @RequestParam("staffID") String staffID
    ){
        return staffService.getStaffInfo(staffID);
    }

    // 修改员工信息
    @RequestMapping(value = "/staff/change", method = RequestMethod.POST)
    public Boolean changeStafInfo(
            @RequestBody Person newStaff
    ){
        return staffService.changeStaffInfo(newStaff);
    }

    @RequestMapping(value = "/staff/delete", method = RequestMethod.GET)
    public Boolean deleteStaff(
            @RequestParam("staffID") String staffID
    ){
        return staffService.deleteStaff(staffID);
    }

    // 根据条件查询员工 都为空时返回总列表
    @RequestMapping(value = "/get/staff/list", method = RequestMethod.POST)
    public List<Person> getStaffListByTag(
            @RequestBody Map<String, Object> paraMap
    ){
        String staffName = (String) paraMap.get("staffName");
        Integer departmentID = (Integer) paraMap.get("departmentID");
        Integer jobID = (Integer) paraMap.get("jobID");


        // 整理错误处理

        if(staffName != null && staffName.equals("")) staffName = null;
        if(departmentID != null && departmentID == -1) departmentID = null;
        if(jobID != null && jobID == -1) jobID = null;

        return staffService.getStaffsByTags(staffName, departmentID, jobID);
    }


}