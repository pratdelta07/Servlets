package com.infinite.boot.AsynchronousEx;
 
import java.math.BigInteger;
import java.util.concurrent.CompletableFuture;
 
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
 
@Service
public class MyService {
	
	@Async
	public CompletableFuture asyncMethod()
	{
		BigInteger result = BigInteger.valueOf(1);
        for (int i = 2; i <= 5; i++) {
            result = result.multiply(BigInteger.valueOf(i));
        }
        return CompletableFuture.completedFuture("Result: " + result.toString());
	}
}
