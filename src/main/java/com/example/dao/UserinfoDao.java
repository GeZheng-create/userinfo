/**
 * 
 */
package com.example.dao;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.entity.Userinfo;

/**
 * @author ruby
 *
 */
import org.apache.ibatis.annotations.*;

import java.util.List;
@CrossOrigin

@Mapper
public interface UserinfoDao {

	public List<Userinfo> queryUserinfoList(Userinfo userinfo);

	
@CrossOrigin
@Select("SELECT  * FROM userinfo ORDER BY id")
List<Userinfo> findAll();

@Select("select * from userinfo where id=#{id} ORDER BY id")
public Userinfo selectId(int id);

@CrossOrigin
@Select("select max(id)+1 from userinfo")
String findMax();

@Delete("delete from userinfo where id=#{id}")
public int deleteUser(int id);

//@Insert("insert into DG_SUBN( ) values(#{RID},#{CUST_RID},#{BILLAGT})")
//public int insertAccount(Account account);

@CrossOrigin
@Update("update userinfo set name=#{name},age=#{age},gender=#{gender},hobby=#{hobby},status=#{status},profession=#{profession} where id=#{id}")
public int updateUser(int id, String name, String age, String gender, String hobby, String status, String profession  );

@CrossOrigin
@Insert("insert into userinfo (id,name,gender,age,hobby,status, profession) values (#{id}, #{name}, #{gender} , #{age} , #{hobby}, #{status} , #{profession})")
public int insertUser(int id, String name, String gender, String age, String hobby, String status, String profession);


}
