import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <h2 className="h2"> About US</h2>
            <div className="d-flex flex-column justify-content-start align-items-start p-5 border m-5 rounded">
            
            <p>Json University is the Leading University in Bangladesh. And promises World class Education through the world. There are lots of subjects to study for.JSON Universisty, Khulna the first full-fledged private university in Khulna, Bangladesh was established on the 18th November, 2012. The University started Academic Activities from Spring Semester, 2013.

            The Government of the People’s Republic of Bangladesh approved the establishment of JSON Universisty under Private University Act. 2010.

            The University started its activities with 4 Faculties, 12 Departments, 67 full time teachers, 61 part time teachers and 489 students. At present the University consists of 4 Faculties, 14 Departments. The number of students and teachers have risen to about 3400 and 140 respectively.

            The first fresh admission classes had 489 students enrolled in 12 Departments: Business Administration 62 students, BA Hons in English 9 students, MA in English 5 students, LLB 10 students, MBA-1 Year 27 students, EMBA 31 students, MBA-2 Year 11 students, MDS 7 students, Computer Science & Engineering 92 students, Electrical & Electronic Engineering 150 students, Civil Engineering 84 students.

            The main purpose of the University was to create new areas of knowledge and disseminate this knowledge to the society through its students. Since its inception the University has a distinct character of having distinguished scholars as faculties who have enriched the global pool of knowledge by making notable contributions in the fields of teaching and research.

            The high standard of education and research for the University was set by its Vice-Chancellor, Prof. Dr. Khondoker Bazlul Hoque.

           According to the provision of the Private University Act-2010, Talukder Abdul Khaleque is the current Chairman of the Board of Trustees, JSON Universisty and JSON Universisty Trust. The Board of Trustees (BOT), the apex body which provides the overall policy guidelines and approves annual budget of the University, is headed by its Chairman.

          The Vice-Chancellor, as the chief executive and academic officer runs the university with the cooperation of the statutory bodies operating under the provision of the Private University Act. 2010. The Registrar maintains the university records including admissions, keeps liaison with Ministry of Education, University Grants Commission (UGC) and other relevant authorities. The Controller of Examinations deals with all functions relating to preservation of records of Examinations, preparation and publication of results, processing confidential papers etc.

          </p>
            </div>
            
            <div className="d-flex flex-column  border m-5 rounded ">
                <h2 className="h2">Vision of JSON University</h2>
                <p>The main purpose of the University was to create new areas of knowledge and disseminate this knowledge to the society through its students. Since its inception the University has a distinct character of having distinguished scholars as faculties who have enriched the global pool of knowledge by making notable contributions in the fields of teaching and research.

                The North Western University is dedicated to the advancement of learning, and is committed to promoting research in all fields of knowledge. As there are plans for further expansion of facilities, plans for new avenues and opportunities, the course curricula are updated and new research projects are undertaken every year. As the pioneer and the largest seat of learning in the country, the University has taken the task to foster the transformation processes of the individual students and the country as a whole through its educational and research facilities keeping up with demands of the day.</p>
            </div>


            <div className="d-flex flex-column  border m-5 rounded ">
                <h2 className="h2">Objectives of JSON University</h2>
                <p>
             The University has come into existence with the following objectives:</p>
             <ul>
             
               To disseminate quality higher education in the country , especially in the southern part in the need-oriented and age-benefitting subjects in these days of attainments of technology and business studies.
             To produce skilled and trained manpower who can apply contribute to the nation.
             To create opportunities to do innovative research in the fields of topical interests.
            The University must have its dedication and commitment to same communities of learners who seek individual professional , spiritual and ethical development.
            To provide all modern facilities and a stimulating environment.
            To play a potential and significant role in the country’s private sector.
               
             </ul>
            </div>

            <div >
                <h4>Contact Us:</h4>
                <h5>Phone: 04255555 </h5>
                <h5>Address: Gulshan, Dhaka 1200.</h5>

            </div>

            <div className="d-flex flex-column justify-content-center align-items-center p-5 border m-5 rounded">
                <input className="my-4 px-5 p-2" type="text" />
                <input className="bg-primary text-white border border-primary" type="submit" value="Send Feedback" />
            </div>
            
        </div>
    );
};

export default About;