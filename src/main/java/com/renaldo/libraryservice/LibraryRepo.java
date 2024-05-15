package com.renaldo.libraryservice;

import com.renaldo.libraryservice.models.LibraryItem;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LibraryRepo extends JpaRepository<LibraryItem, Long> {


    LibraryItem findByIsbn(long isbn);
}