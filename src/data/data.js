const data= [
    { 
        subject_title: 'EEE',
        img: 'https://lh3.googleusercontent.com/proxy/sxc_zsjsB7OCQuh8QM6KhT2e8ddsddaw7o-hYCnoBt4UWd3hFbGSPJOzMotWljNIaZQRxfwbWPi_SwwnzchFdS598Uwb' ,
        course_fee: 330000 , 
        key: 1 ,
        course_duration:  '4 Year' ,
        faculty: 'Science & Technology',
        detail:'in EEE program curriculum consists of 148 credits. The Engineering core consists of more than 30 courses (84 credits) covering a broad range of electrical, electronics, and communication topics, imparting the most updated knowledge in the relevant fields. Electrical & Electronics Engineering (EEE), deals with the engineering problems, opportunities and needs of electrical, electronics, computer, telecommunication systems and related industries.' 

    },
    { 
        subject_title: 'CSE',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhUffdzkx-RlCh0W3bsS1K6SzICSoi8saEeA9EY_AiyNWT-DHUTSvuJWjw0dyhUbzxRo&usqp=CAU' ,
        course_fee: 280000 , 
        key:  2,
        course_duration: '4 Year' ,
        faculty: 'Science & Technology' ,
        detail:'Major topics include in our CSE undergraduate degree course are Operating System, Design and Analysis of Algorithm, Programming Languages, Microprocessor, Computer Software, Database Management System, Mobile Communications, Cryptography and Network Security, Performance Evaluation, etc' 

    },
    { 
        subject_title: 'Civil',
        img: 'https://thumbs.dreamstime.com/b/innovative-architecture-civil-engineering-plan-building-construction-project-creative-graphic-design-showing-concept-174256642.jpg' ,
        course_fee: 360000 , 
        key: 3,
        course_duration: '4 Year' ,
        faculty: 'Science & Technology' ,
        detail:'Civil engineering is the professional practice of designing and developing infrastructure projects. ... This can include planning, design, budgeting, surveying, construction management and analysis, and often civil engineering careers encompass a combination of all these elements.' 

    },
    { 
        subject_title: 'BBA',
        img: 'https://eduguide.co.in/wp-content/uploads/2019/10/ilead...png' ,
        course_fee: 160000 , 
        key: 4,
        course_duration: '4 Year' ,
        faculty: 'Business' ,
        detail:'The BBA degree is offered with a choice of majors in Finance, Accounting, Marketing, Management, HRM and MIS. The university has initiated an active learning process that facilitates the business executives to gradually develop their conceptual, interpersonal and problem-solving skills.' 

    },
    {   subject_title: 'MBA',
        img: 'https://s3e8p5g8.rocketcdn.me/wp-content/uploads/2021/03/what-is-an-mba.jpg' ,
        course_fee: 280000 , 
        key: 5,
        course_duration: '3 Year' ,
        faculty: 'Business' ,
        detail:'Master of Business Administration (MBA) is a postgraduate degree that is awarded to students who have mastered the study of business. MBA programs are considered to be among the most prestigious ones in the world. Students of MBA programs study the theory and application of business and management principles.' 
    },
    {   subject_title: 'Accounting',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsw0Io2Mx7Tavj2A4fAzaKpQLpVyjPxcwmg&usqp=CAU'  ,
        course_fee: 280000 , 
        key: 6 ,
        course_duration: '4 Year' ,
        faculty: 'Business' ,
        detail:'The most common course to study for a career in accounting is a Diploma of Accounting. When studying accounting you will acquire knowledge about the laws that govern business, typical business administration schemes, the ethics of accountancy, statistics, and accounting theory.' 
    },
    {   subject_title: 'Bangla Literature',
        img: 'https://image.shutterstock.com/image-photo/beautiful-hut-village-bangladesh-260nw-561408769.jpg' ,
        course_fee: 120000 , 
        key: 7 ,
        course_duration: '4 Year' ,
        faculty: 'Arts' ,
        detail:'Bangla Literature dates back to the 7th century at least and it may be divided into three main periods: ancient, medieval, and modern. Bengali is one of the prominent languages in which literature enriched itself the most. Among most of the oldest literature in the world.' 
    },
    {   subject_title: 'English Literature',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxntUl6CISm6IPCb7NTP-x5uhow7DoQzBWw&usqp=CAU' ,
        course_fee: 140000 , 
        key: 8,
        course_duration: '4 Year' ,
        faculty: 'Arts' ,
        detail:'English Literature refers to the study of texts from around the world, written in the English language. ... Generally, literature refers to different types of text including novels, non-fiction, poetry, and plays, among other forms' 
    },
    {   subject_title: 'Law',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Svhawh1pkMLgishJ_q-8jFMAI341ypnxXTy-ElAdTpgZyTqkQVyun2NZbuBC88VJ5Qk&usqp=CAU' ,
        course_fee: 280000 , 
        key: 10,
        course_duration: '4 Year' ,
        faculty: 'Arts' ,
        detail:'A Law degree will provide you with the skills required to practice law, such as mooting (a mock legal hearing where you argue points of law) and pro bono work. Depending on the course, you may study Law in relation to specific areas such as family, commerce or finance.' 
    },
    {   subject_title: 'Archaeology',
        img: 'https://www.studyabroad.com/sites/default/files/images/Archaeology-Study-Abroad-Programs.jpg' ,
        img2: 'https://www.timeshighereducation.com/sites/default/files/styles/teaser_standard/public/archaeology.jpg?itok=IDdxDhUv',
        course_fee: 280000 , 
        key: 9,
        course_duration: '4 Year' ,
        faculty: 'Social Science',
        detail: 'Archaeology is an interdisciplinary activity which involves the investigation of material developed by previous human societies. The primary objective of the course is to study past human cultures through survey, identification and excavation of historical sites.' 
    },
    {   subject_title: 'Pshychology',
        img: 'https://rscil.com/wp-content/uploads/2020/05/Psychology-word-cloud-570x333.jpg' ,
        course_fee: 280000 , 
        key: 11 ,
        course_duration: '4 Year' ,
        faculty: 'Social Science',
        detail:'Psychology looks at the ways people think, act, react, and interact. It is the study of human (and animal) behaviour, and the thoughts and emotions that influence behaviour.'  
    },
    {   subject_title: 'Economics',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81QRUAd3FgS.jpg' ,
        course_fee: 220000 , 
        key: 12,
        course_duration: '4 Year' ,
        faculty: 'Social Science',
        detail:'Economics, at its very heart, is the study of people. It seeks to explain what drives human behaviour, decisions and reactions when faced with difficulties or successes. Economics is a discipline which combines politics, sociology, psychology and history.' 
    },
]