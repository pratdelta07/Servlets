public class HibernateUtil {
	private static final SessionFactory sessionFactory = buildSessionFactory();

	private static SessionFactory buildSessionFactory() {
		SessionFactory sessionFactory = null;
		try {
			// Create the configuration object.
			Configuration configuration = new Configuration();
			// Initialize the configuration object with the configuration file
			// data
			configuration.configure("hibernate.cfg.xml");
			// Get the SessionFactory object from configuration.
			sessionFactory = configuration.buildSessionFactory();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return sessionFactory;
	}

	public static SessionFactory getSessionFactory() {
		return sessionFactory;
	}
}
public Integer addStudent(Student student){
	Transaction tx = null;
    Integer studentId = null;
    //Get the session object.
	Session session = HibernateUtil.getSessionFactory().openSession();
    try{
         tx = session.beginTransaction();
         studentId = (Integer) session.save(student); 
         tx.commit();
      }catch (HibernateException e) {
         if(tx!=null){
        	 tx.rollback();
         }
         e.printStackTrace(); 
      }finally {
         session.close(); 
      }
      return studentId;	
}

public void showAllStudentDetails(){
	Transaction tx = null;
    //Get the session object.
	Session session = HibernateUtil.getSessionFactory().openSession();
    try{
         tx = session.beginTransaction();
         List<Student> students = session.createQuery("FROM Student").list();
         for(Student student : students){
        	 System.out.println("First Name: " + student.getFirstName()); 
        	 System.out.println("Last Name: " + student.getLastName()); 
        	 System.out.println("Class: " + student.getClassName()); 
        	 System.out.println("RollNo: " + student.getRollNo()); 
        	 System.out.println("Age: " + student.getAge()); 
        	 Set<Subject> subjects = student.getSubjects();
        	 for(Subject subject : subjects){
        		 System.out.println("Subject Name:" + subject.getSubjectName());
        	 }
         }
         tx.commit();
      }catch (HibernateException e) {
         if(tx!=null){
        	 tx.rollback();
         }
         e.printStackTrace(); 
      }finally {
         session.close(); 
      }
    
    
    public class HibernateUtil {

    	private static final SessionFactory sessionFactory = buildSessionFactory();


        private static SessionFactory buildSessionFactory() {

        	SessionFactory sessionFactory = null;

            try {

            	//Create the configuration object.

            	Configuration configuration = new Configuration(); 

            	//Initialize the configuration object with the configuration file data

            	configuration.configure("hibernate.cfg.xml");

            	// Get the SessionFactory object from configuration.

            	sessionFactory = configuration.buildSessionFactory();

            }

            catch (Exception e) {

               e.printStackTrace();

            }

            return sessionFactory;

        }


        public static SessionFactory getSessionFactory() {

            return sessionFactory;

        }

    }
}