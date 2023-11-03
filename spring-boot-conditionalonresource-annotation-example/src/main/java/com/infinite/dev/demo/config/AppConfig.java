package com.infinite.dev.demo.config;

import org.springframework.boot.autoconfigure.condition.ConditionalOnResource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.infinite.demo.service.EmailNotificationService;
import com.infinite.demo.service.TwitterNotificationService;

@Configuration
@ConditionalOnResource(resources = {"notification.properties"})
public class AppConfig {
    @Bean("emailNotification")
    public EmailNotificationService emailNotificationService()
    {
        return new EmailNotificationService();
    }
    @ConditionalOnResource(resources = {"message.properties"})
    @Bean("twitterNotification")
    public TwitterNotificationService twitterNotificationService()
    {
        return new TwitterNotificationService();
    }
}
