package com.staff.entity;

public class PersonnelChange {

    private Integer code;

    @Override
    public String toString() {
        return "PersonnelChange{" +
                "code=" + code +
                ", description='" + description + '\'' +
                '}';
    }

    private String description;

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
