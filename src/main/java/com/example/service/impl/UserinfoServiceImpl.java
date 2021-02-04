/**
 * 
 */
package com.example.service.impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.dao.UserinfoDao;
import com.example.entity.Userinfo;
import com.example.service.impl.UserinfoService;

import java.util.List;

import javax.annotation.Resource;
/**
 * @author ruby
 *
 */
@Service
public class UserinfoServiceImpl implements UserinfoService{
	@Resource
	private UserinfoDao userinfoDao;

    @Override
    public List<Userinfo> queryUserinfoList(Userinfo userinfo){
    	return userinfoDao.queryUserinfoList(userinfo);
    	
    }
}
