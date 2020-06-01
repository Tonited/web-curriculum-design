package com.staff.serviceImpl;
import com.staff.entity.Person;
import com.staff.entity.Personnel;
import com.staff.repository.DepartmentMapper;
import com.staff.repository.StaffMapper;
import com.staff.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StaffServiceImpl implements StaffService {

    @Autowired
    private StaffMapper staffMapper;

    @Autowired
    private DepartmentMapper departmentMapper;

    // 需要翻页的每页显示多少项
    private int pageItemCount = 8;

    @Override // 插入新员工
    public Boolean insertStaff(Person staff){
        // 时间戳生成员工号ID
        long timeGetIdLong = System.currentTimeMillis()+778604985L;
        String timeGetId = Long.toString(timeGetIdLong);
        staff.setId(timeGetId);

        // 设置新员工默认密码"123456"
        staff.setPasswd("123456");

        // 产生添加新成员的变动记录
        Personnel newPersonnel = new Personnel();
        newPersonnel.setChange(0); //0为新员工加入
        newPersonnel.setPerson(timeGetId); // 设置变动员工

        // 获取员工名 名称null时设置为""
        String staffName = staff.getName();
        if(staffName == null) staffName = "";

        newPersonnel.setDescription("新员工"+ staffName + "加入");
        try {
            // 插入
            // 插入和记录作为事务一同执行 接受异常
            insertStaffAndLog(staff, newPersonnel);
        }catch (Exception e){
            //插入失败
            return false;
        }
        // 插入成功
        return true;
    }
    @Transactional //插入和记录作为事务一同执行 失败抛出异常并回滚
    void insertStaffAndLog(Person newStaff,Personnel newPersonnel) throws Exception{
        staffMapper.insertStaff(newStaff);
        departmentMapper.insertPersonnel(newPersonnel);
     }

    @Override // 通过ID获取员工信息
    public Person getStaffInfo(String id) {
        Person person;
        try{
            person = staffMapper.queryStaffById(id);
        }catch (Exception e){
            // 获取失败返回空值
            person = null;
        }
        return person;
    }

    @Override // 修改员工信息
    public Boolean changeStaffInfo(Person newStaff) {

        Personnel personnel = null;
        Person lastStaff = null;
        try {
            // 获取之前的数据
            lastStaff = staffMapper.queryStaffById(newStaff.getId());
        }catch (Exception e){
            // 返回失败
            return false;
        }

        // 比较之前的数据与现在数据的 部门/职务
        // 有变动就创建人员变动记录
        if(
                !(lastStaff.getDepartment().equals(newStaff.getDepartment()) // 比较部门
                && lastStaff.getJob().equals(newStaff.getJob())) // 比较职务
        ){
            // 创建新人员变动记录
            personnel = new Personnel();

            personnel.setPerson(newStaff.getId());
            personnel.setChange(1); // 1为职务变动

            // 获取员工名 名称null时设置为""
            String staffName = newStaff.getName();
            if(staffName == null) staffName = "";

            personnel.setDescription(staffName+"职务变动: Dep " + lastStaff.getDepartment()+"->"+newStaff.getDepartment() +
                    " / Job " + lastStaff.getJob() + "->"+newStaff.getJob());
        }
        // 更新和记录作为事务一同执行
        try {
            updataStaffAndAddLog(newStaff, personnel);
        }catch (Exception e){
            return false;
        }

        return true;
    }
    @Transactional //更新和记录作为事务一同执行 失败抛出异常并回滚
    void updataStaffAndAddLog(Person newStaff,Personnel personnel) throws Exception{
        staffMapper.updataStaff(newStaff);
        // 如果 部门/职务 有变动就添加人员变动记录
        if(personnel != null){
            departmentMapper.insertPersonnel(personnel);
        }

    }

    @Override // 删除员工
    public Boolean deleteStaff(String staffID) {
        Personnel personnel = new Personnel();
        Person staff = null;
        personnel.setPerson(staffID);
        personnel.setChange(2); // 2为辞退

        try {
            // 获取之前的数据
            staff = staffMapper.queryStaffById(staffID);
        }catch (Exception e){
            // 返回失败
            return false;
        }

        // 获取员工名 名称null时设置为""
        String staffName = staff.getName();
        if(staffName == null) staffName = "";

        personnel.setDescription(staffName+"被辞退");

        // 执行删除和添加记录
        try{
            deleteStaffAndAddLog(staffID, personnel);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return false;
        }

        return true;
    }
    @Transactional // 删除和记录作为事务一同执行 失败抛出异常并回滚
    void deleteStaffAndAddLog(String staffID, Personnel personnel) throws Exception{
        staffMapper.deleteStaffById(staffID);
        departmentMapper.insertPersonnel(personnel);
    }

    @Override //按条件获取员工列表
    public List<Person> getStaffsByTags(String staffName, Integer departmentID, Integer jobID) {

        List<Person> staffList;
        try{
            staffList =  staffMapper.queryStaffByTag(staffName,departmentID,jobID);
        }catch (Exception e){
            // 失败返回空
            return null;
        }

        return staffList;
    }
}
