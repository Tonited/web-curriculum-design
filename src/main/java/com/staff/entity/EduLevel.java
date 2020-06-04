package com.staff.entity;

public class EduLevel {

    private Integer id;

    private String description;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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
                "id=" + id +
                ", description='" + description + '\'' +
                '}';
    }
}
