package com.example.demo.dto;

import lombok.Data;

@Data
public class ReplyDto {
	private int no;
	private String title;
	private String writer;
	private String comment;
	private String reg_date;
	private int book_no;
	private int user_no;
	private String name;
	private String team; 
}
