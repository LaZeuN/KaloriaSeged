package com.szakdolgozat.KaloriaSeged.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FoodDto {

    private Long id;
    private String name;
    private Integer calorie;
    private Integer fat;
    private Integer carbohydrate;
    private Integer protein;
}
