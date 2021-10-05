import React from 'react';
import'./Admission.css'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Admission = () => {
    return (
    <div className="admission">
   
   <Card className="from">
  
   <Card.Body>
   <Card.Title>
     <p>Application Form for Admission</p>
   </Card.Title>
   <Card.Text>
     <h2> Entry Requirements</h2>
     <p>Please click the link ( https://www.nwu.edu.bd/admission_requirement.php ) to see the minimum requirement for admission.</p>
  </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><h2>Pre-requisites for Admission</h2>
    <ul>
    1. An applicant should have at least second division both in SSC & HSC Exams or minimum GPA 2.50 in both the exams or equivalent exams ( GPA 5.00). But if any student gets at least 2.00 in any exam, he/she has to get total GPA at least 6.00 in both the exams.
    <br />

    2. An ‘O’ level student must have at least five subjects in ‘O’ level exam and an ‘A’ level student must have at least two subjects in ‘A’ level exam. Out of at least seven subjects of those ‘O’ level and ‘A’ level exams, the student must have B grade or GPA 4.0 in the exam, of four subjects and C grade or GPA 3.5 in remaining three subjects.
    <br />

    3. For admission to Faculty of Science and Technology, students must have had Physics and Mathematics in HSC/A-Level or equivalent level.
    <br />

    4. For the wards of freedom fighters a student must have total GPA 5.0 in SSC and HSC or equivalent public exams.
    <br />
    5. For graduate program, a student should have at least a Bachelor’s degree. A relevant Bachelor Degree with at least second divisions/classes in all previous exams or undergraduate degree from a recognized university with a GPA of 2.00 or above in a scale of 4.00.
    <br />

    6. Credit transferred students will be able to get admission to an undergraduate / graduate program of NWU.

     7. GED result will not be accepted.
    </ul>

    </ListGroupItem>
    <ListGroupItem> <h2>
    Admission Helpline: +8801755-226611 , 01970-226611
    </h2>
    <p>
    Admission fees will not be refunded if the application form is rejected due to inaccurate information and ineligibility of admission.
    </p>

    </ListGroupItem>
   
     </ListGroup>
    <Card.Body>
    <Card.Link href="#">Admission Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
     </Card>
        </div>
    );
};

export default Admission;