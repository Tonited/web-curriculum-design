package com.staff.service;

import com.staff.entity.Person;

import java.util.List;
import java.util.Map;

public interface StaffService {

    // 添加员工
    Boolean insertStaff(Person staff);

    // 通过ID获取用户信息
    Person getStaffInfo(String id);

    // 修改用户信息
    Boolean changeStaffInfo(Person staff);

    // 删除用户
    Boolean deleteStaff(String staffID);

    // 根据条件分页查询用户列表
    List<Person> getStaffsByTags(String staffName, Integer departmentID, Integer jobID);

}
