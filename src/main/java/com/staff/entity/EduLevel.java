package com.staff.entity;

public class EduLevel {

    private Integer code;

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

    @Override
    public String toString() {
        return "EduLevel{" +
                "code=" + code +
                ", description='" + description + '\'' +
                '}';
    }
}
