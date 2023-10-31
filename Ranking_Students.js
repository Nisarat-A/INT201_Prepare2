//rank student
    let student = [
        {
            name: 'Sophia',
            attendance: [true, true, false, true, true],
            testScores: [88, 92, 85, 78, 90]
          },
          {
            name: 'Mason',
            attendance: [true, true, true, true, false],
            testScores: [70, 82, 88, 75, 62]
          },
          {
            name: 'Isabella',
            attendance: [true, false, false, true, true],
            testScores: [68, 71, 70, 60, 78]
          },
          {
            name: 'Emma',
            attendance: [true, true, false, false, true],
            testScores: [75, 70, 80, 75, 100]
            },
            {
            name: 'Olivia',
            attendance: [true, true, false, false, false],
            testScores: [55, 70, 55, 60, 100]
            },
            {
            name: 'Ava',
            attendance: [true, false, false, false, false],
            testScores: [40, 50, 45, 20, 100]
            },
            {
            name: 'Liam',
            attendance: [true, false, false, false, false],
            testScores: [40, 50, 45, 20, 100]
            },
            {
            name: 'Noah',
            attendance: [true, false, false, false, false],
            testScores: [40, 50, 70, 20, 81]
            },
            {
            name: 'William',
            attendance: [true, false, false, false, false],
            testScores: [40, 50, 30, 69, 68]
            },
            {
            name: 'James',
            attendance: [true, false, true, true, true],
            testScores: [60, 70, 45,48, 79]
          }
    ]


    function attendanceRate(student) {
        const attendance = student.attendance.filter((atd) => atd === true);
        return (attendance.length / student.attendance.length) * 100;
    }

    function avgTestScores(student) {
        const total = student.testScores.reduce((acc, cur) => acc + cur, 0);
        return total / student.testScores.length;
    }
    
    //sort student by score descending if score is equal sort by name ascending
    function rankStudents(students) {
        const rankedStudents = students.sort((a, b) => {
          if (avgTestScores(a) === avgTestScores(b)) 
          {return a.name.localeCompare(b.name);}return avgTestScores(b) - avgTestScores(a); });
          return rankedStudents; // Return the sorted array.
      }

    function rankStudentsNameandAverage(students) {
        const rankedStudents = students.slice().sort((a, b) => {
            if (avgTestScores(a) === avgTestScores(b)) {
              return a.name.localeCompare(b.name);
            }
            return avgTestScores(b) - avgTestScores(a);
          });
      
        // Create an array of objects with name and average score
        const rankedStudentsWithAvg = rankedStudents.map(student => ({
          name: student.name,
          avgScore: avgTestScores(student)
        }));
        return rankedStudentsWithAvg; // Return the array with name and average score.
      }
      const rankedStudents = rankStudents(student);
    console.log("Ranking Students by AverageScore:");
      rankedStudents.forEach(student => {
        console.log(`Name: ${student.name}, Average Score: ${avgTestScores(student)}`);
      });

      
    
      console.log("Ranking Students by Score and Name:");
      console.log(rankStudents(student));
      console.log("Ranking Students by Name and Average Score:");
      console.log(rankStudentsNameandAverage(student));

      function getTopStudents(student, n) {
        const rankedStudents = rankStudents(student);
        return rankedStudents.slice(0, n);
      }
      console.log("Top 5 Students by Average Score:");
     getTopStudents(student,5).forEach(student => {
     console.log(`Name: ${student.name}, Average Score: ${avgTestScores(student)}`);});