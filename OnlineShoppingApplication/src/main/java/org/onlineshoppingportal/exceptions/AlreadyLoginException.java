package org.onlineshoppingportal.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.TEMPORARY_REDIRECT, reason = " User already logged in", code = HttpStatus.TEMPORARY_REDIRECT)
public class AlreadyLoginException extends RuntimeException {
	public AlreadyLoginException() {
		super("Already Logged in User tried to access signup/ login ");
	}

}
