/**
 * 
 */
package com.example.service.impl;

/**
 * @author ruby
 *
 */


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Userinfo;
import com.example.dao.UserinfoDao;

import java.util.List;

@Service
public interface UserinfoService {

 
	public List<Userinfo> queryUserinfoList(Userinfo userinfo);

}
