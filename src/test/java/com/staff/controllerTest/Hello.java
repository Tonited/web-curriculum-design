package com.staff.controllerTest;

import com.staff.basejunit4test.BaseJunit4Tests;
import com.staff.controller.StaffController;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

public class Hello extends BaseJunit4Tests {

    @Autowired
    private StaffController staffController;

    @Test
    public void test(){
        System.out.println(staffController.getStaffInfo("1"));
    }

}
