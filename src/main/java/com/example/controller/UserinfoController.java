/**
 * 
 */
package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Userinfo;
import com.example.dao.UserinfoDao;
import com.example.entity.Userinfo;
import com.example.service.impl.UserinfoService;
import com.example.service.impl.UserinfoServiceImpl;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import java.util.List;
import java.lang.Object;

import javax.annotation.Resource;

/**
 * @author ruby
 *
 */
@CrossOrigin
@RestController
//	@RequestMapping("/")
public class UserinfoController {

	@Autowired
	UserinfoService userService;

	@Autowired
	UserinfoDao userinfoDao;
	
	@GetMapping("/")
	public List<Userinfo> getAll() {
		return userinfoDao.findAll();
	}

	@CrossOrigin
	@GetMapping("/id")
	public String getMax() {
		return userinfoDao.findMax();
	}
	
	
	@RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
	public Userinfo getUser(@PathVariable("id") int id) {
		return userinfoDao.selectId(id);
	}

	@CrossOrigin
		  @RequestMapping(value="/update", method = RequestMethod.PUT)
	       public Userinfo updUser(@RequestParam("name") String name,@RequestParam("id") int id,@RequestParam("age") String age,@RequestParam("hobby") String hobby,@RequestParam("gender") String gender,@RequestParam("status") String status,@RequestParam("profession") String profession){
			   userinfoDao.updateUser(id, name, age, gender, status, hobby,profession);
	           return userinfoDao.selectId(id);
	}
	
	@CrossOrigin
	@RequestMapping(value = "/insert", method = RequestMethod.PUT)
	public Userinfo insertUser(@RequestParam("id") int id,@RequestParam("name") String name,@RequestParam("age") String age,@RequestParam("hobby") String hobby,@RequestParam("gender") String gender,@RequestParam("status") String status,@RequestParam("profession") String profession) {
		userinfoDao.insertUser(id, name, age, gender, status, hobby,profession);
		return userinfoDao.selectId(id);
	}
	

	@CrossOrigin
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public List<Userinfo> deleteUser(@PathVariable("id") int id) {
		userinfoDao.deleteUser(id);
		return userinfoDao.findAll();
	}

}
