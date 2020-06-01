package com.staff.service;

import com.staff.entity.*;

import java.util.List;
import java.util.Map;

public interface DepartmentService {

    // 获取Personnel
    List<Personnel> getPersonnel();

    // 获取所有受教育程度
    List<EduLevel> getAllEdulevel();

    // 获取所有职务
    List<Job> getAllJob();

    // 获取所有人员变动类型
    List<PersonnelChange> getAllPersonnelChange();

    // 获取所有部门
    List<Department> getAllDepartment();

}
