package com.renaldo.libraryservice;

import com.renaldo.libraryservice.models.LibraryItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class LibraryCatalogResource {
    @Autowired
    private LibraryRepo repository;

    @RequestMapping("/catalog/{isbn}")

    public LibraryItem getBookInfo(@PathVariable Long isbn)
    {
        /*
        I have hardcoded the return value here.
        In its completed form, it should use the isbn to go through the database and
        return the actual details based on that
        * */
        return new LibraryItem("Life of Pi", "renaldo hyacinthe", isbn,4);
    }

    @RequestMapping("/save/{title}")
    public String save(@PathVariable String title)
    {
        repository.save(new LibraryItem(title, "renaldo hyacinthe", (long) 1234,4));
        return "Saved";
    }

    @RequestMapping("/findall")
    public List<LibraryItem> findAll(){
        return repository.findAll();
    }


}
