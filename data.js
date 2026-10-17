'use strict';
window.COACH_DATA={
 title:'Student Grade Management System',
 rubric:[
 {name:'Fundamentals',clo:'CLO1',points:1,basis:'Team',evidence:'Correct variables and data types (0.5); averages and statistics (0.5).'},
 {name:'Selection statements',clo:'CLO2',points:1,basis:'Team',evidence:'Instructor-approved grade logic (0.5); menu decisions and input validation (0.5).'},
 {name:'Loops',clo:'CLO3',points:0.5,basis:'Team',evidence:'Menu repetition (0.25); traversal for search/summary (0.25).'},
 {name:'Methods',clo:'CLO4',points:1.5,basis:'Team',evidence:'At least four meaningful methods (0.5); parameters (0.5); return values and correct calls (0.5).'},
 {name:'Parallel 1D arrays',clo:'CLO5',points:1.5,basis:'Team',evidence:'Related arrays and count (0.5); search/update (0.5); display/summary (0.5).'},
 {name:'Console input/output',clo:'CLO6',points:0.5,basis:'Team',evidence:'Clear prompts (0.25); clear output and error messages (0.25).'},
 {name:'Explain personal code',clo:'CLO4',points:3,basis:'Individual',evidence:'Method, parameters and return (1.0); explain logic (1.0); trace input/output (1.0).'},
 {name:'NetBeans walkthrough',clo:'CLO7',points:1,basis:'Individual',evidence:'Run (0.25); debug (0.25); trace (0.25); make a small change (0.25).'}
 ],
 requirements:[
 {id:'menu',text:'Repeating menu with Exit and at least five meaningful operations.',step:2},
 {id:'methods',text:'At least four meaningful methods beyond main, using parameters and return values appropriately.',step:3},
 {id:'arrays',text:'At least two related 1D arrays, with matching record indexes and a counter.',step:4},
 {id:'capacity',text:'Capacity of 10 fictional student records; reject an 11th addition.',step:4},
 {id:'ids',text:'Each student has a nonblank fictional name and unique ID.',step:5},
 {id:'marks',text:'Two marks per student, each from 0 to 100, with equal weighting.',step:0},
 {id:'grades',text:'Assign grades according to the instructor-provided common grading scale.',step:1},
 {id:'search',text:'Search by student ID; unknown IDs must not change records.',step:5},
 {id:'update',text:'Update existing student marks safely.',step:5},
 {id:'summary',text:'Display all student results; class average, highest average, lowest average.',step:5},
 {id:'validation',text:'Validate menu choices, marks and IDs; handle duplicate IDs and empty class.',step:5},
 {id:'tests',text:'Document at least six tests with inputs, expected and actual outputs, including normal, invalid and boundary cases.',step:6},
 {id:'team',text:'Team has 4–5 members, identifiable code contributions, and a one-page plan.',step:0},
 {id:'submission',text:'Submit NetBeans source project, 2–3 page report, team demo and individual walkthrough.',step:6}
 ],
 tests:[
 {id:'t1',name:'Equal-weight average',kind:'Normal',input:'Marks: 80, 90',expected:'Average = 85'},
 {id:'t2',name:'Boundary marks',kind:'Boundary',input:'Marks: 0, 100',expected:'Both accepted; average = 50'},
 {id:'t3',name:'Out-of-range marks',kind:'Invalid',input:'Mark: -1 or 101',expected:'Reject invalid mark; record unchanged'},
 {id:'t4',name:'Duplicate student ID',kind:'Invalid',input:'Add ID ST001 twice',expected:'Second ID rejected; count unchanged'},
 {id:'t5',name:'Unknown ID',kind:'Invalid',input:'Search/update ST999 (not stored)',expected:'Not found; no record changed'},
 {id:'t6',name:'Capacity exceeded',kind:'Boundary',input:'Add 11th student after 10',expected:'Refuse addition; count remains 10'},
 {id:'t7',name:'Empty-class summary',kind:'Boundary',input:'Display summary with count = 0',expected:'Friendly message; no division by zero'}
 ],
 steps:[
 {
 title:'Start with the problem',subtitle:'Variables and averages',week:'Week 9',clo:'CLO1',icon:'01',time:'10–15 min',
 learn:'Each student has an ID, name and two assessment marks. A variable stores one value. Use double for marks if the instructor permits decimals. Both assessments carry equal weight.',
 why:'Start with the smallest working feature before building the full menu. This gives the team a result that can be checked immediately.',
 code:'double mark1 = 80;\ndouble mark2 = 90;\ndouble average = (mark1 + mark2) / 2.0;\nSystem.out.println(average);',
 build:'In NetBeans, create a Java console project. Read two marks for one fictional student. Validate that each mark is between 0 and 100, then calculate and display their average. Agree on one-page team responsibilities (4–5 students) and use fictional records only.',
 evidence:'Run marks 80 and 90 and show that the output average is 85. Keep a screenshot or note for your project report.',
 hint:'Begin with Scanner, two double variables, one condition, and the formula (mark1 + mark2) / 2.0.',
 quiz:[
 {kind:'Concept',q:'Why is a variable needed in this program?',options:['It stores a value that a program can use','It automatically repeats the menu','It creates 10 student records','It replaces a Java method'],answer:0,why:'Variables hold information such as an assessment mark, a student name or a count.',hint:'Think about where a mark is kept while a calculation runs.'},
 {kind:'Concept',q:'Why might double be a suitable type for assessment marks?',options:['It can represent decimal marks','It stores only names','It prevents duplicate IDs','It repeats code until Exit'],answer:0,why:'A double can represent values such as 89.5. The allowed mark format still depends on the instructor.',hint:'What type could represent 87.5?'},
 {kind:'Apply',q:'For marks 80 and 90, which Java expression calculates their equal-weight average?',options:['80 + 90 / 2','(80 + 90) / 2.0','80 * 90 / 2','80 / 90'],answer:1,why:'Parentheses ensure both marks are added before dividing by two. The result is 85.',hint:'Remember operator precedence: division happens before addition.'}
 ]
 },
 {
 title:'Make decisions',subtitle:'Conditions and grades',week:'Weeks 9–10',clo:'CLO2',icon:'02',time:'10–15 min',
 learn:'An if statement checks a condition. else if supports several grade ranges. Validate marks before calculating grades. Use your instructor’s official letter-grade thresholds, not an invented scale.',
 why:'Grade decisions and invalid-input checks use different conditions. Putting them in the right order prevents invalid data from being accepted.',
 code:'if (mark1 < 0 || mark1 > 100) {\n    System.out.println("Invalid mark");\n} else {\n    System.out.println("Valid mark");\n}',
 build:'Write a mark-validation condition and a grade-decision method using the grading scale supplied by the instructor. Test the boundary values of the approved grade ranges. Do not guess thresholds.',
 evidence:'Demonstrate that a mark of -1 or 101 is rejected and valid marks are accepted. Note where your instructor’s grade scale is recorded.',
 hint:'Use || for the invalid range: below 0 OR above 100. With several grade ranges, test the more restrictive thresholds in an appropriate order.',
 quiz:[
 {kind:'Concept',q:'What does the OR operator (||) mean in a Java condition?',options:['Both conditions must be true','At least one condition must be true','Repeat until the number is valid','Join two arrays'],answer:1,why:'The OR operator is true when either condition (or both) is true.',hint:'A mark is invalid if it is below 0 OR above 100.'},
 {kind:'Concept',q:'Why does the order of else-if grade conditions matter?',options:['Java sorts them automatically','The first matching branch is executed','Each branch runs for every student','It changes the marks stored in arrays'],answer:1,why:'Java executes the first matching branch in an if–else-if chain. Incorrect ordering can produce the wrong grade.',hint:'What happens after the first true condition?'},
 {kind:'Apply',q:'Which condition rejects a mark outside the allowed 0–100 range?',options:['mark >= 0 && mark <= 100','mark < 0 || mark > 100','mark == 50','mark >= 0 || mark <= 100'],answer:1,why:'Numbers below 0 or above 100 are invalid; 0 and 100 remain allowed.',hint:'Use OR to combine two invalid situations.'}
 ]
 },
 {
 title:'Build the repeating menu',subtitle:'Loops and selections',week:'Week 9 / revisit Week 10',clo:'CLO2 · CLO3',icon:'03',time:'15–20 min',
 learn:'A loop can display a menu repeatedly until the user selects Exit. Use an if or switch to choose an operation. The official guide requires at least five meaningful operations plus Exit.',
 why:'A menu makes the project a real interactive program rather than a single calculation. The Exit choice must stop the repetition.',
 code:'do {\n    // Show choices: add, list, search, update, summary, exit\n    // Read a choice and run the selected operation\n} while (choice != 6);',
 build:'Create a menu with: 1 Add student, 2 Display all, 3 Search by ID, 4 Update marks, 5 Class summary, and 6 Exit. Start with one functioning operation. Validate unknown menu choices. Keep operation bodies as small placeholders until methods and arrays are introduced.',
 evidence:'Run the menu twice without restarting the program, choose an invalid option, and then Exit.',
 hint:'A do-while menu runs at least once. Initialize and update choice correctly; Exit should end the loop.',
 quiz:[
 {kind:'Concept',q:'Why is a loop useful for a console menu?',options:['It stores 10 names at once','It lets users choose several operations until Exit','It converts a double to String','It assigns letter grades'],answer:1,why:'A loop repeats the menu while the user wants to continue.',hint:'Imagine adding two students without running the program twice.'},
 {kind:'Concept',q:'How does do-while differ from while?',options:['do-while always runs its body at least once','do-while never checks a condition','while can only use numbers','while runs only once'],answer:0,why:'do-while checks the condition after the loop body; while checks before the body.',hint:'Which loop tests the condition last?'},
 {kind:'Apply',q:'With menu choice 6 as Exit, which condition should continue the loop?',options:['choice == 6','choice != 6','choice < 0','choice > 10'],answer:1,why:'The loop repeats when the choice is not 6; choosing 6 ends it.',hint:'The loop should stop only after the Exit choice.'}
 ]
 },
 {
 title:'Organize the program',subtitle:'Methods and parameters',week:'Weeks 10–11',clo:'CLO4',icon:'04',time:'15–20 min',
 learn:'Methods make complex work easier to read and test. Parameters pass information into methods. A return value sends a result back to the caller. The project requires at least four meaningful methods beyond main.',
 why:'Methods let the team divide programming work, avoid repeated calculations, and explain individual contributions during the walkthrough.',
 code:'static double calculateAverage(double a, double b) {\n    return (a + b) / 2.0;\n}',
 build:'Plan method signatures on paper. For example: calculateAverage(double,double) returns double; findStudent(String[],int,String) returns int; validMark(double) returns boolean; assignGrade(double) returns String using the approved grade scale. Write and test four meaningful methods with suitable parameters and returns. Add additional operation methods as needed.',
 evidence:'Show a correct call to one method and explain each parameter and the returned result. Record which team member authored and tested each method.',
 hint:'Ask two questions: What information does this method need? What result should it give back?',
 quiz:[
 {kind:'Concept',q:'What is a parameter in a Java method?',options:['A variable that receives an argument when the method is called','A command that stops NetBeans','The name of an array index','The same thing as a menu'],answer:0,why:'A parameter receives the value supplied by the caller, allowing the method to work with different inputs.',hint:'Look at the a and b inside calculateAverage(double a, double b).'},
 {kind:'Concept',q:'Why should a project use meaningful methods?',options:['To avoid all conditions','To separate tasks into readable, testable pieces','Because every method must print','To increase the number of arrays'],answer:1,why:'Well-named methods clarify responsibilities and support testing, reuse and team explanations.',hint:'Think about the difference between one huge main method and smaller named tasks.'},
 {kind:'Apply',q:'Which signature returns a calculated average from two marks?',options:['static void calculateAverage()','static double calculateAverage(double a, double b)','static String calculateAverage()','static int[] calculateAverage(String name)'],answer:1,why:'The signature takes two decimal marks and returns a double result.',hint:'Choose two parameters and a return type that can store 85.5.'}
 ]
 },
 {
 title:'Store ten students',subtitle:'Parallel one-dimensional arrays',week:'Weeks 12–13',clo:'CLO5',icon:'05',time:'15–20 min',
 learn:'Parallel arrays store related values at matching indexes. For example, index 0 in IDs, names and both mark arrays all refer to one student. count indicates how many positions are occupied; the array capacity is 10.',
 why:'The program must handle multiple fictional records. Matching indexes make search, display and updates predictable.',
 code:'String[] studentIds = new String[10];\nString[] studentNames = new String[10];\ndouble[] firstMarks = new double[10];\ndouble[] secondMarks = new double[10];\nint count = 0;  // next unused position',
 build:'Add the four suggested arrays and a count variable. Build Add student with unique-ID checking, nonblank name and valid marks. Store fields at the same index; increment count only after successful addition. Reject new students when count reaches 10.',
 evidence:'Add three fictional students and explain which index stores the third student. Show that the 11th record is rejected.',
 hint:'Before storing a record, check count < 10. The new record uses index count; only then increase count.',
 quiz:[
 {kind:'Concept',q:'Why must parallel arrays use the same index for one student?',options:['Because all arrays have different lengths','So ID, name and marks for that student stay aligned','So Java sorts records automatically','Because arrays start from 1'],answer:1,why:'Matching indexes connect the separate fields of each student record.',hint:'Consider ID ST003 and its two marks: where should all three values be?'},
 {kind:'Concept',q:'What does count represent in a fixed-size array project?',options:['The maximum possible mark','The number of records currently stored','The value of the last student ID','The number of menu choices'],answer:1,why:'count increases when a valid student is added; the array length remains 10.',hint:'An array can have room for 10 but currently store only 3.'},
 {kind:'Apply',q:'If count is 3, at which index should you store the fourth student?',options:['Index 4','Index 3','Index 10','Index 0'],answer:1,why:'Indexes begin at 0, so the fourth record uses index 3; then count becomes 4.',hint:'The first record is at 0, the second at 1, and the third at 2.'}
 ]
 },
 {
 title:'Finish record operations',subtitle:'Search, update and summary',week:'Weeks 12–14',clo:'CLO1 · CLO4 · CLO5',icon:'06',time:'20–25 min',
 learn:'Linear search visits active records one by one. A found index lets the program update the matching marks. A summary can loop through every student average, calculate the class mean, highest and lowest, and handle count = 0 safely.',
 why:'These operations complete the project’s core functionality. Safe validation protects previously stored information.',
 code:'int index = -1;\nfor (int i = 0; i < count; i++) {\n    if (studentIds[i].equals(targetId)) {\n        index = i;\n        break;\n    }\n}\n// If index stays -1, the ID was not found.',
 build:'Implement search by student ID; update only the found student after mark validation; display all student results and letter grades; calculate class average, highest and lowest average. For an empty class, show a helpful message before division. Reject duplicate and unknown IDs. Use the instructor-approved grading scale.',
 evidence:'Demonstrate search for a known ID, safe rejection of an unknown ID, changed average after an update, and an empty-class summary.',
 hint:'For each summary: start with valid initial values; loop i from 0 to count - 1. Never divide by count when it is zero.',
 quiz:[
 {kind:'Concept',q:'What does a linear search do?',options:['It checks each relevant record until a match is found or none remain','It always sorts the whole array','It changes every mark at once','It creates new student names'],answer:0,why:'Linear search compares records one at a time, which is suitable for a small fixed array.',hint:'Imagine looking for ST003 from index 0 onward.'},
 {kind:'Concept',q:'Why should updateMarks search for the ID before changing data?',options:['To make the array longer','To find the correct record and avoid changing others','To skip input validation','To create an Exit option'],answer:1,why:'You should update only the matching record and leave all data unchanged for unknown IDs.',hint:'What happens if the ID is not in the array?'},
 {kind:'Apply',q:'What should a class-summary method do when count == 0?',options:['Divide total by zero','Print an empty-class message and skip the average calculation','Pretend there are 10 students','Use index -1 as the first student'],answer:1,why:'The class average is undefined for zero records; avoid dividing by zero.',hint:'Is total / count valid when count equals 0?'}
 ]
 },
 {
 title:'Test and present',subtitle:'Debug, demonstrate and explain',week:'Weeks 14–15',clo:'CLO4 · CLO7',icon:'07',time:'20–30 min',
 learn:'Testing checks normal, invalid and boundary inputs against expected results. Debugging finds why a program behaves incorrectly. The showcase includes a team demonstration and an individual walkthrough in NetBeans.',
 why:'A complete-looking program can still fail at the boundaries. Evidence of testing and individual explanation matters for the official marks.',
 code:'// Example test evidence (not an automatic Java test):\n// Input: 80 and 90\n// Expected average: 85\n// Actual average: ______\n// Result: Pass / Fail',
 build:'Document at least six tests including normal, invalid and boundary conditions, and keep expected and actual results. Prepare the NetBeans project folder, a 2–3 page report, a roughly 3-minute team demo and a roughly 2-minute explanation of your own code. Practice a trace and a small change in NetBeans.',
 evidence:'Fill at least six test records in the Testing tab, complete the official-requirement checklist, and practice your individual explanation and modification.',
 hint:'Begin with the seven suggested tests. Run each in NetBeans, observe the actual result, and record it rather than guessing.',
 quiz:[
 {kind:'Concept',q:'What is a boundary test?',options:['A test of a value at or near an allowed limit','Only a test with student name Ali','A test of the website color','A test that never runs the program'],answer:0,why:'Values such as 0, 100 and the 11th attempted record exercise boundaries.',hint:'Think about the minimum and maximum accepted marks.'},
 {kind:'Concept',q:'What is the main difference between a syntax error and a logic error?',options:['A syntax error breaks Java rules; a logic error can run but give a wrong result','Both always produce a compiler error','Logic errors are always spelling mistakes','A syntax error changes student IDs only'],answer:0,why:'The compiler may reject invalid syntax, while incorrect logic can still compile and run.',hint:'Can a program compile yet calculate the wrong average?'},
 {kind:'Apply',q:'A student tests mark 101. What should the expected behavior be?',options:['Store 101 because arrays can hold it','Reject the mark and keep stored data unchanged','Convert it automatically to 100','Exit without any message'],answer:1,why:'The project requires both marks to be in 0–100. Invalid updates should not alter records.',hint:'The official mark range is inclusive from 0 to 100.'}
 ]
 }
 ]
};
