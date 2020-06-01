package com.staff.repository;

import com.staff.entity.Person;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface StaffMapper {
    // 根据ID查找员工
    Person queryStaffById(String id);

    // 添加员工
    void insertStaff(Person staff);

    // 修改员工信息
    void updataStaff(Person staff);

    // 删除员工
    void deleteStaffById(String id);

    // 根据条件查找员工
    // 属性都为null时表示返回所有员工
    List<Person> queryStaffByTag(String staffName, Integer departmentID, Integer jobID);
}
