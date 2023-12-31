package com.historymaps.model;

import jakarta.persistence.*;

@Entity
@Table(name = "markers")
public class Marker {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "latitude")
    private String latitude;

    @Column(name = "longitude")
    private String longitude;

    @Column(name = "img")
    private String img;

    @Column(name = "title")
    private String title;

    @Column(name = "date")
    private String date;

    @Column(name = "year")
    private int year;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "wiki")
    private String wiki;

    public Marker() {}

    public Marker(String latitude, String longitude, String img, String title, String date, int year, String description, String wiki) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.img = img;
        this.title = title;
        this.date = date;
        this.year = year;
        this.description = description;
        this.wiki = wiki;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getWiki() {
        return wiki;
    }

    public void setWiki(String wiki) {
        this.wiki = wiki;
    }

    @Override
    public String toString() {
        return "Marker{" +
                "id=" + id +
                ", latitude='" + latitude + '\'' +
                ", longitude='" + longitude + '\'' +
                ", img='" + img + '\'' +
                ", title='" + title + '\'' +
                ", date='" + date + '\'' +
                ", year=" + year +
                ", desc='" + description + '\'' +
                ", wiki='" + wiki + '\'' +
                '}';
    }
}
