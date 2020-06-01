package com.staff.repository;

import com.staff.entity.*;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface DepartmentMapper {

    // 添加人事变动
    void insertPersonnel(Personnel personnel);

    // 查询所有人事变动列表
    List<Personnel> queryAllPersonnel();

    // 查询所有人事变动类型
    List<PersonnelChange> queryAllPersonnelChange();

    // 查询所有受教育程度
    List<EduLevel> queryAllEduLevel();

    // 查询所有职务
    List<Job> queryAllJob();

    // 查询所有部门
    List<Department> queryAllDepartment();

}
