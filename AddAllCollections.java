package com.infinite.core;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class AddAllCollections {
	public static void main (String[] args){
		List<String> a1= new ArrayList<>();
		a1.add("a");
		a1.add("b");
		a1.add("c");
		a1.add("d");
		
		System.out.println("Before addAll : "+a1);
		Collections.addAll(a1, "1","2","3");
		System.out.println("After addAll: "+a1);
	}

}
