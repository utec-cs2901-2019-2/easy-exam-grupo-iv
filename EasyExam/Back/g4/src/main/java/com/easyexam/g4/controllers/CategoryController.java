package com.easyexam.g4.controllers;

import com.easyexam.g4.model.Category;
import com.easyexam.g4.model.Subcategory;
import com.easyexam.g4.model.api.CategoryResponse;
import com.easyexam.g4.model.repository.CategoryRepository;
import com.easyexam.g4.model.repository.SubcategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

public class CategoryController {
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    SubcategoryRepository subcategoryRepository;

    @PostMapping("/api/category/create")
    public void setCat(CategoryResponse cat) {
        Category myCat = new Category();
        myCat.setName(cat.name);
        List<Subcategory> subs = new ArrayList<>();
        for (Long x : cat.subcategories) {
            Subcategory buffer = subcategoryRepository.findById(x).get();
            subs.add(buffer);
        }
        categoryRepository.save(myCat);
    }

    @GetMapping("/api/category/get")
    public @ResponseBody
    List<CategoryResponse> giveCategories() {
        List<Category> myList;
        List<CategoryResponse> returnList = new ArrayList<>();
        myList = categoryRepository.findAll();
        for (Category c : myList) {
            CategoryResponse buffer = new CategoryResponse();
            List<Long> subs = new ArrayList<>();
            for (Subcategory subcategoryPerCategory : c.getSubcategories()) {
                subs.add(subcategoryPerCategory.getId());
            }
            buffer.id = c.getId();
            buffer.subcategories = subs;
            buffer.name = c.getName();
            returnList.add(buffer);
        }
        return returnList;
    }
}
