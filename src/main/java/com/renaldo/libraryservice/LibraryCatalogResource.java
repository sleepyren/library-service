package com.renaldo.libraryservice;

import com.renaldo.libraryservice.models.LibraryItem;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/catalog")
public class LibraryCatalogResource {

    @RequestMapping("/{isbn}")

    public LibraryItem getBookInfo(@PathVariable int [] isbn)
    {
        /*
        I have hardcoded the return value here.
        In its completed form, it should use the isbn to go through the database and
        return the actual details based on that
        * */
        return new LibraryItem("Life of Pi", "renaldo hyacinthe", "deadlink", isbn,4);
    }
}
