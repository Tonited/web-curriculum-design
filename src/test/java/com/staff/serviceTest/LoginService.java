package com.staff.serviceTest;

import com.staff.basejunit4test.BaseJunit4Tests;
import com.staff.repository.DepartmentMapper;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class LoginService extends BaseJunit4Tests {
    @Autowired
    DepartmentMapper departmentMapper;

    @Test
    public void test() {
//        String str = UUID.randomUUID().toString().replaceAll("-","");
//        List<PersonnelChange> personnelChangeList = departmentMapper.queryAllPersonnelChange();
//        for (PersonnelChange i : personnelChangeList) {
//            System.out.println(i.toString());
//
//        }
        System.out.println((int)Math.ceil(12.0/5));
    }
}
