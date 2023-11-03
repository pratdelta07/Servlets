package com.infinite.boot.AsynchronousEx;

import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {
	@Autowired
	private MyService myService;
	
	@GetMapping("/asyn")
	public CompletableFuture<String> asynEndpoint() {
		CompletableFuture<String> futureResult = myService.asyncMethod();
        futureResult.thenApply(result -> {
            // handle the result here
            return "Result is "+ result;
        });
 
        return futureResult;
	}

}
