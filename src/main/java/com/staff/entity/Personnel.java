package com.staff.entity;

public class Personnel {

    private Integer id;

    private String person;

    private Integer change;

    private String description;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPerson() {
        return person;
    }

    public void setPerson(String person) {
        this.person = person;
    }

    public Integer getChange() {
        return change;
    }

    public void setChange(Integer change) {
        this.change = change;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Personnel{" +
                "id=" + id +
                ", person='" + person + '\'' +
                ", change=" + change +
                ", description='" + description + '\'' +
                '}';
    }
}
