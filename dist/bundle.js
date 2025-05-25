/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\n// Create two students\nvar student1 = {\n    firstName: 'Alice',\n    lastName: 'Johnson',\n    age: 22,\n    location: 'Nairobi',\n};\nvar student2 = {\n    firstName: 'Bob',\n    lastName: 'Smith',\n    age: 24,\n    location: 'Mombasa',\n};\n// Add students to an array\nvar studentsList = [student1, student2];\n// Create a table element\nvar table = document.createElement('table');\n// Create and append table header row\nvar headerRow = document.createElement('tr');\nvar header1 = document.createElement('th');\nheader1.textContent = 'First Name';\nvar header2 = document.createElement('th');\nheader2.textContent = 'Location';\nheaderRow.appendChild(header1);\nheaderRow.appendChild(header2);\ntable.appendChild(headerRow);\n// Append a row for each student\nstudentsList.forEach(function (student) {\n    var row = document.createElement('tr');\n    var firstNameCell = document.createElement('td');\n    firstNameCell.textContent = student.firstName;\n    var locationCell = document.createElement('td');\n    locationCell.textContent = student.location;\n    row.appendChild(firstNameCell);\n    row.appendChild(locationCell);\n    table.appendChild(row);\n});\n// Add the table to the body of the document\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://frontend-javascript-task0/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;