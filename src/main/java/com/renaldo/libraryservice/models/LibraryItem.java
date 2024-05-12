package com.renaldo.libraryservice.models;

public class LibraryItem {
    private String title;
    private String author;
    private String photo;
    private int[] isbn;
    private int reading_level;
    public LibraryItem(String title, String author, String photo, int[] isbn, int reading_level) {
        this.title = title;
        this.author = author;
        this.photo = photo;
        this.isbn = isbn;
        this.reading_level = reading_level;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int[] getIsbn() {
        return isbn;
    }

    public void setIsbn(int[] isbn) {
        this.isbn = isbn;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public int getReading_level() {
        return reading_level;
    }

    public void setReading_level(int reading_level) {
        this.reading_level = reading_level;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
