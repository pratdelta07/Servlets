package com.infinite.SpringBootMVC;

import java.util.Properties;

import javax.sql.DataSource;

@Configuration
@EnableTransactionManagement
public class HibernateConfiguration {
	@Value("${db.driver}")
	private String DRIVER;
	@Value("${db.password}")
	private String PASSWORD;
	@Value("${db.username}")
	private String USERNAME;
	@Value("${hibernate.dialect}")
	private String DIALECT;
	@Value("${db.url}")
	private String URL;
	@Value("${hibernate.show_sql}")
	private String SHOW_SQL;
	@Value("${entitymanager.packagesToScan}")
	private String PACKAGES_TO_SCAN;
	@Value("${hibernate.hbm2ddl.auto}")
	private String HBM2DDL_AUTO;

	@Bean
	public DataSource dataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName(DRIVER);
		dataSource.setUrl(URL);
		dataSource.setUsername(USERNAME);
		dataSource.setPassword(PASSWORD);
		return dataSource;

	}

	@Bean
	public LocalSessionFactoryBean sessionFactory() {
		LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
		sessionFactory.setDataSource(dataSource());
		sessionFactory.setPackagesToScan(PACKAGES_TO_SCAN);
		Properties hibernateProperties = new Properties();
		hibernateProperties.put("hibernate.dialect", DIALECT);
		hibernateProperties.put("hibernate.show_sql", SHOW_SQL);
		hibernateProperties.put("hibernate.hbm2ddl.auto", HBM2DDL_AUTO);
		sessionFactory.setHibernateProperties(hibernateProperties);
		return sessionFactory;
	}

	@Bean
	public HibernateTransactionManager transactionManager() {
		HibernateTransactionManager transactionManager = new HibernateTransactionManager();
		transactionManager.setSessionFactory(sessionFactory().getObject());
		return transactionManager;
	}

}
