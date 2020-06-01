package com.staff.serviceImpl;

import com.staff.entity.*;
import com.staff.repository.DepartmentMapper;
import com.staff.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DepartmentServiceImpl implements DepartmentService {

    @Autowired
    private DepartmentMapper departmentMapper;

    @Override // 获取人事变动信息
    public List<Personnel> getPersonnel() {

        List<Personnel> personnelList;

        try{
            personnelList =  departmentMapper.queryAllPersonnel();
        }catch (Exception e){
            // 失败返回空
            return null;
        }

        return personnelList;

    }

    @Override // 返回所有受教育程度
    public List<EduLevel> getAllEdulevel() {

        List<EduLevel> eduLevels = null;

        try{
            eduLevels = departmentMapper.queryAllEduLevel();
        }catch (Exception e){
            return null;
        }
        return eduLevels;
    }

    @Override // 返回所有职务
    public List<Job> getAllJob() {

        List<Job> jobList = null;

        try{
            jobList = departmentMapper.queryAllJob();
        }catch (Exception e){
            return null;
        }
        return jobList;
    }

    @Override // 返回人员变动类型
    public List<PersonnelChange> getAllPersonnelChange() {

        List<PersonnelChange> personnelChangeList = null;

        try{
            personnelChangeList = departmentMapper.queryAllPersonnelChange();
        }catch (Exception e){
            return null;
        }
        return personnelChangeList;
    }

    @Override // 返回所有部门
    public List<Department> getAllDepartment() {

        List<Department> departmentList = null;

        try{
            departmentList = departmentMapper.queryAllDepartment();
        }catch (Exception e){
            return null;
        }
        return departmentList;
    }
}
