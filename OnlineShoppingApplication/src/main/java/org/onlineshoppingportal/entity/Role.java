package org.onlineshoppingportal.entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Role")
public class Role {
	private Long id;
	private String name;
	private Set<Account> accounts;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	/*
	 * public Set<Account> getAccounts() { return accounts; } public void
	 * setAccounts(Set<Account> accounts) { this.accounts = accounts; }
	 */

	@ManyToMany(mappedBy = "roles")

	public Set<Account> getUsers() {

		return accounts;

	}

	public void setUsers(Set<Account> accounts) {

		this.accounts = accounts;

	}

}
