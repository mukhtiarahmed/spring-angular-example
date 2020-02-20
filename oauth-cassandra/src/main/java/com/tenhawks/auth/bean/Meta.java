package com.tenhawks.auth.bean;

import org.springframework.http.HttpStatus;

public class Meta {
	private int status;
	private String message;

    public Meta(HttpStatus status) {
    		this.status = status.value();
    		this.message = status.getReasonPhrase();
    }


    public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
