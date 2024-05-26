package com.renaldo.libraryservice;

import com.renaldo.libraryservice.models.LibraryItem;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

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
        //return new LibraryItem("Life of Pi", "renaldo hyacinthe", isbn,4);
        return repository.findByIsbn(isbn);
    }

    @PostMapping(value="/save", consumes = "application/json")
    public LibraryItem save(@RequestBody LibraryItem item)
    {
        return repository.save(item);
    }

    //Enables cross-origin requests from the frontend. The server will approve a preflight CORS request
    @RequestMapping("/findall")
    public List<LibraryItem> findAll(){
        return repository.findAll();
    }

    //This annotation basically means that if there is an exception during
    //the database edit it will be rolled back

    /*NOTE
    * If an exception is thrown in a transactional method, Spring will automatically roll back the transaction.
    * If you catch the exception and handle it yourself, the transaction may not be rolled back as expected.
    * From : https://medium.com/javarevisited/transactional-annotation-in-spring-framework-d571e91bf6bb
    * */
    @Transactional
    //want to make sure that the Java App is ready to receive a header of this type
    @PostMapping(value = "/delete", consumes = "text/plain")
    public long delete(@RequestBody String body)
    {
            long isbn = Long.parseLong(body);
            repository.deleteByIsbn(isbn);
            return isbn;

    }

    //This will show all elements that contain the numbers in the sequence
    //@RequestParam is used to extract query parameters from the URL.
    //example request: http://host/search?sequence=978059344
    @GetMapping("/search")
    public List<LibraryItem> searchByISBNContaining(@RequestParam String sequence)
    {
        return repository.findByISBNContaining(sequence);
    }





}
