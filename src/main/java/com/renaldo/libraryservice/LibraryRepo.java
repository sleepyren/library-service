package com.renaldo.libraryservice;

import com.renaldo.libraryservice.models.LibraryItem;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LibraryRepo extends JpaRepository<LibraryItem, Long> {


    LibraryItem findByIsbn(long isbn);

    //must return int because The int/Integer return value is the number of rows that where updated in the database.
    //source : https://stackoverflow.com/questions/22818598/what-does-the-return-value-of-modifying-methods-in-spring-data-jpa-mean

    int deleteByIsbn(long isbn);

    //This will show all elements that contain the numbers in the sequence
    @Query("SELECT e FROM LibraryItem e WHERE CAST(e.isbn AS string) LIKE %:sequence%")
    List<LibraryItem> findByISBNContaining(@Param("sequence") String sequence);

}