package com.infinite.SpringAop;

public class MyAdviceClass {
	@Pointcut("execution(* com.infinite.business.*.*(..))")
	private void All(){
	}
	@Before("All") //method level annotation.
	public void beforeAdvice(){
		System.out.println("Before advice executed.");
	}
	@After("All")  //method level annotation.
	public void afterAdvice(){
		System.out.println("After advice executed.");
	}

}
