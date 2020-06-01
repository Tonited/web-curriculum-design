package com.staff.serviceImpl;

import com.staff.entity.Person;
import com.staff.entity.Role;
import com.staff.repository.StaffMapper;
import com.staff.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private StaffMapper staffMapper;

    // 登陆
    public String login(String staffID, String password) {

        String loginResult = "登陆失败";

        try {
            // 根据ID查询staff
            Person nowStaff =  staffMapper.queryStaffById(staffID);

            if ( nowStaff != null) {
                // 验证密码
                if (nowStaff.getPasswd().equals(password)) {
                    loginResult = "OK";
                } else {
                    loginResult = "密码错误";
                }
            } else {
                // 查询结果为空
                loginResult = "用户不存在";
            }
        }
        catch (Exception e){
            loginResult = "程序异常";
        }
        return loginResult;
    }

}
