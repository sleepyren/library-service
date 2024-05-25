package com.renaldo.libraryservice.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

//This annotation is necessary for Spring to recognize it as the database entity
@Entity
public class LibraryItem {
    private String title;
    private String author;
    @Id
    // @GeneratedValue this will generate an autoincrementing ID which I dont want
    private Long isbn;



    // private int reading_level;
    private int year_published;
    public LibraryItem(){}
    public LibraryItem(String title, String author, Long isbn, int reading_level) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.year_published = year_published;
        // this.reading_level = reading_level;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Long getIsbn() {
        return isbn;
    }

    public void setIsbn(Long isbn) {
        this.isbn = isbn;
    }

    /*
    public int getReading_level() {
        return reading_level;
    }

    public void setReading_level(int reading_level) {
        this.reading_level = reading_level;
    }*/

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYear_published() {
        return year_published;
    }

    public void setYear_published(int year_published) {
        this.year_published = year_published;
    }
}
