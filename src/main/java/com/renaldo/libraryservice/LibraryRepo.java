package com.renaldo.libraryservice;

import com.renaldo.libraryservice.models.LibraryItem;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LibraryRepo extends JpaRepository<LibraryItem, Long> {

}