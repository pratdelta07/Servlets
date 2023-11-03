package com.infinite.boot.AsynchronousEx;

import java.math.BigInteger;

public class BigIntegerExample {

	public static void main(String[] args) {
			// TODO Auto-generated method stub
			BigInteger result = BigInteger.valueOf(1);
	        for (int i = 2; i <= 6; i++) {
	            result = result.multiply(BigInteger.valueOf(i));
	            System.out.println(result);
	        }

	}}
