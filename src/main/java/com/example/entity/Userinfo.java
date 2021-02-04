/**
 * 
 */
package com.example.entity;

/**
 * @author ruby
 *
 */
public class Userinfo {

	private int id;
	private String name;
	private String gender;
	private String age;
	private String hobby;
	private String status;
	private String profession;
	/**
	 * @param id
	 * @param name
	 * @param gender
	 * @param age
	 * @param hobby
	 * @param status
	 * @param profession
	 */

	@Override
	public String toString() {
		return "Userinfo [id=" + id + ", name=" + name + ", gender=" + gender + ", age=" + age + ", hobby=" + hobby
				+ ", status=" + status + ", profession=" + profession + "]";
	}
	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * @return the gender
	 */
	public String getGender() {
		return gender;
	}
	/**
	 * @param gender the gender to set
	 */
	public void setGender(String gender) {
		this.gender = gender;
	}
	/**
	 * @return the age
	 */
	public String getAge() {
		return age;
	}
	/**
	 * @param age the age to set
	 */
	public void setAge(String age) {
		this.age = age;
	}
	/**
	 * @return the hobby
	 */
	public String getHobby() {
		return hobby;
	}
	/**
	 * @param hobby the hobby to set
	 */
	public void setHobby(String hobby) {
		this.hobby = hobby;
	}
	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}
	/**
	 * @return the profession
	 */
	public String getProfession() {
		return profession;
	}
	/**
	 * @param profession the profession to set
	 */
	public void setProfession(String profession) {
		this.profession = profession;
	}
	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return super.hashCode();
	}
	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		return super.equals(obj);
	}
	@Override
	protected Object clone() throws CloneNotSupportedException {
		// TODO Auto-generated method stub
		return super.clone();
	}
	@Override
	protected void finalize() throws Throwable {
		// TODO Auto-generated method stub
		super.finalize();
	}
	/**
	 * @param id
	 * @param name
	 * @param gender
	 * @param age
	 * @param hobby
	 * @param status
	 * @param profession
	 */
	public Userinfo(int id, String name, String gender, String age, String hobby, String status, String profession) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.hobby = hobby;
		this.status = status;
		this.profession = profession;
	}
	/**
	 * 
	 */
	public Userinfo() {
		super();
		// TODO Auto-generated constructor stub
	}



	
}
