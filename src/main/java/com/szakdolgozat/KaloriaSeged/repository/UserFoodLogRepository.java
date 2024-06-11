package com.szakdolgozat.KaloriaSeged.repository;

import com.szakdolgozat.KaloriaSeged.entity.UserFoodLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserFoodLogRepository extends JpaRepository<UserFoodLog, Long> {
    List<UserFoodLog> findByFoodId(Long foodId);
}
