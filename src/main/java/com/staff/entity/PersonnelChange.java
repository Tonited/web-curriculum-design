package com.staff.entity;

public class PersonnelChange {

    private Integer id;

    @Override
    public String toString() {
        return "PersonnelChange{" +
                "id=" + id +
                ", description='" + description + '\'' +
                '}';
    }

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
}
