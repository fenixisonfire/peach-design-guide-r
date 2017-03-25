import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'
import Image from '../../../src/Image';

var LineTooltip = require('react-d3-tooltip').LineTooltip;

export default function DataVisTooltipLine() {

  var chartData = [
  {
    "name": "Aguirre Hatfield",
    "BMI": 45.31,
    "age": 21,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Mcdonald",
    "married": false,
    "index": 0
  },
  {
    "name": "Marquita Kennedy",
    "BMI": 26.18,
    "age": 29,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Lowery",
    "married": true,
    "index": 1
  },
  {
    "name": "Sharron Medina",
    "BMI": 64.42,
    "age": 35,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Bradley",
    "married": true,
    "index": 2
  },
  {
    "name": "Freda Franks",
    "BMI": 47.17,
    "age": 20,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Mack",
    "married": false,
    "index": 3
  },
  {
    "name": "Reid Maddox",
    "BMI": 21.5,
    "age": 24,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Atkinson",
    "married": false,
    "index": 4
  },
  {
    "name": "Nikki Trevino",
    "BMI": 45.15,
    "age": 26,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Laurel",
    "married": false,
    "index": 5
  },
  {
    "name": "Abbott Barr",
    "BMI": 25.11,
    "age": 24,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Guerra",
    "married": true,
    "index": 6
  },
  {
    "name": "Knapp Boyer",
    "BMI": 48.83,
    "age": 38,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Santos",
    "married": true,
    "index": 7
  },
  {
    "name": "Frances Bird",
    "BMI": 64.19,
    "age": 34,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Ross",
    "married": true,
    "index": 8
  },
  {
    "name": "Miller Keller",
    "BMI": 26.16,
    "age": 28,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Head",
    "married": false,
    "index": 9
  },
  {
    "name": "Coleman Greene",
    "BMI": 90.01,
    "age": 23,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Huber",
    "married": false,
    "index": 10
  },
  {
    "name": "Riddle Wright",
    "BMI": 87.55,
    "age": 33,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Vinson",
    "married": true,
    "index": 11
  },
  {
    "name": "Rowe Potts",
    "BMI": 94.54,
    "age": 32,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Thomas",
    "married": true,
    "index": 12
  },
  {
    "name": "Krista Riddle",
    "BMI": 83.06,
    "age": 23,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Hillary",
    "married": false,
    "index": 13
  },
  {
    "name": "Luna Gordon",
    "BMI": 90.38,
    "age": 31,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Barton",
    "married": false,
    "index": 14
  },
  {
    "name": "Elsa Marshall",
    "BMI": 34.68,
    "age": 21,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Mullen",
    "married": true,
    "index": 15
  },
  {
    "name": "Antoinette Beach",
    "BMI": 45.14,
    "age": 26,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Darla",
    "married": true,
    "index": 16
  },
  {
    "name": "Avis Austin",
    "BMI": 27.21,
    "age": 35,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Jensen",
    "married": true,
    "index": 17
  },
  {
    "name": "Kitty Mccarty",
    "BMI": 66.91,
    "age": 25,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Joyce",
    "married": true,
    "index": 18
  },
  {
    "name": "Annabelle Buck",
    "BMI": 85.26,
    "age": 40,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Christina",
    "married": false,
    "index": 19
  },
  {
    "name": "Desiree Baldwin",
    "BMI": 21.62,
    "age": 25,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Kathleen",
    "married": false,
    "index": 20
  },
  {
    "name": "Rogers Shaffer",
    "BMI": 18.04,
    "age": 40,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Kirby",
    "married": false,
    "index": 21
  },
  {
    "name": "Rosales Mcclain",
    "BMI": 67.04,
    "age": 20,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Emerson",
    "married": false,
    "index": 22
  },
  {
    "name": "Blackwell Cardenas",
    "BMI": 88.86,
    "age": 35,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Schneider",
    "married": true,
    "index": 23
  },
  {
    "name": "Shawn Sanders",
    "BMI": 77.71,
    "age": 21,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Candy",
    "married": true,
    "index": 24
  },
  {
    "name": "Mildred Johnston",
    "BMI": 58.75,
    "age": 24,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Polly",
    "married": true,
    "index": 25
  },
  {
    "name": "Valerie Holden",
    "BMI": 38.31,
    "age": 35,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Gracie",
    "married": true,
    "index": 26
  },
  {
    "name": "Hilda Fischer",
    "BMI": 94.44,
    "age": 20,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Cabrera",
    "married": false,
    "index": 27
  },
  {
    "name": "Stevens Mercer",
    "BMI": 50.24,
    "age": 34,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Alexis",
    "married": false,
    "index": 28
  },
  {
    "name": "Bernice Carlson",
    "BMI": 51.19,
    "age": 39,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Rodriguez",
    "married": false,
    "index": 29
  },
  {
    "name": "Irwin Velez",
    "BMI": 82.46,
    "age": 33,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Jeanine",
    "married": false,
    "index": 30
  },
  {
    "name": "Oneal Winters",
    "BMI": 67.17,
    "age": 34,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Delaney",
    "married": false,
    "index": 31
  },
  {
    "name": "Galloway Hampton",
    "BMI": 48.78,
    "age": 35,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Colette",
    "married": false,
    "index": 32
  },
  {
    "name": "Morgan Gutierrez",
    "BMI": 97.93,
    "age": 24,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Jenna",
    "married": true,
    "index": 33
  },
  {
    "name": "Penelope Yang",
    "BMI": 12.97,
    "age": 26,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Levine",
    "married": true,
    "index": 34
  },
  {
    "name": "Johanna Davis",
    "BMI": 42.18,
    "age": 21,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Marian",
    "married": true,
    "index": 35
  },
  {
    "name": "Moss Kirk",
    "BMI": 25.34,
    "age": 26,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Cantu",
    "married": true,
    "index": 36
  },
  {
    "name": "Bowers Camacho",
    "BMI": 88,
    "age": 29,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Whitney",
    "married": false,
    "index": 37
  },
  {
    "name": "Donovan Anderson",
    "BMI": 29.45,
    "age": 25,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Imelda",
    "married": false,
    "index": 38
  },
  {
    "name": "Juliana Duncan",
    "BMI": 59.82,
    "age": 39,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Poole",
    "married": true,
    "index": 39
  },
  {
    "name": "Reed Harrell",
    "BMI": 23.45,
    "age": 33,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Trujillo",
    "married": true,
    "index": 40
  },
  {
    "name": "Warren Stark",
    "BMI": 88.89,
    "age": 35,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Karina",
    "married": true,
    "index": 41
  },
  {
    "name": "Dionne Rhodes",
    "BMI": 43.99,
    "age": 25,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Rena",
    "married": false,
    "index": 42
  },
  {
    "name": "Anastasia Bowen",
    "BMI": 16.37,
    "age": 36,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Reilly",
    "married": false,
    "index": 43
  },
  {
    "name": "Lula Hess",
    "BMI": 70.76,
    "age": 34,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Macias",
    "married": false,
    "index": 44
  },
  {
    "name": "Rhoda Beasley",
    "BMI": 15.93,
    "age": 29,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Kirk",
    "married": true,
    "index": 45
  },
  {
    "name": "Maria Norton",
    "BMI": 76.53,
    "age": 36,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Orr",
    "married": false,
    "index": 46
  },
  {
    "name": "Pollard Williamson",
    "BMI": 96.55,
    "age": 22,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Johns",
    "married": true,
    "index": 47
  },
  {
    "name": "Salazar Bailey",
    "BMI": 95.49,
    "age": 39,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Pearl",
    "married": true,
    "index": 48
  },
  {
    "name": "David English",
    "BMI": 39.82,
    "age": 37,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Strong",
    "married": false,
    "index": 49
  },
  {
    "name": "Kelley Monroe",
    "BMI": 11.62,
    "age": 35,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Simone",
    "married": true,
    "index": 50
  },
  {
    "name": "Lamb David",
    "BMI": 53.4,
    "age": 34,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Dudley",
    "married": true,
    "index": 51
  },
  {
    "name": "Mcguire Good",
    "BMI": 91.75,
    "age": 29,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Serena",
    "married": true,
    "index": 52
  },
  {
    "name": "Harrison Dixon",
    "BMI": 98.93,
    "age": 33,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Amanda",
    "married": true,
    "index": 53
  },
  {
    "name": "Henderson Huff",
    "BMI": 74.08,
    "age": 34,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Melton",
    "married": true,
    "index": 54
  },
  {
    "name": "Webster Benson",
    "BMI": 41.74,
    "age": 33,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Laurie",
    "married": false,
    "index": 55
  },
  {
    "name": "Joyce Branch",
    "BMI": 71.91,
    "age": 30,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Dolly",
    "married": true,
    "index": 56
  },
  {
    "name": "Short Horton",
    "BMI": 77.2,
    "age": 34,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Janelle",
    "married": false,
    "index": 57
  },
  {
    "name": "Zimmerman Miller",
    "BMI": 98.59,
    "age": 32,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Francis",
    "married": false,
    "index": 58
  },
  {
    "name": "Dyer Graves",
    "BMI": 67.82,
    "age": 23,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Bethany",
    "married": true,
    "index": 59
  },
  {
    "name": "Clay Spencer",
    "BMI": 95.05,
    "age": 27,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Aurelia",
    "married": false,
    "index": 60
  },
  {
    "name": "Davenport Cash",
    "BMI": 70.79,
    "age": 32,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Everett",
    "married": false,
    "index": 61
  },
  {
    "name": "Riley Cervantes",
    "BMI": 10.21,
    "age": 34,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Branch",
    "married": false,
    "index": 62
  },
  {
    "name": "Billie Chambers",
    "BMI": 95.36,
    "age": 39,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Patty",
    "married": true,
    "index": 63
  },
  {
    "name": "Snyder Welch",
    "BMI": 54.81,
    "age": 20,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Olivia",
    "married": false,
    "index": 64
  },
  {
    "name": "Tonya Melendez",
    "BMI": 97.43,
    "age": 39,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Mcfadden",
    "married": true,
    "index": 65
  },
  {
    "name": "Mccoy Wolf",
    "BMI": 42.37,
    "age": 28,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Lyons",
    "married": false,
    "index": 66
  },
  {
    "name": "Agnes Burt",
    "BMI": 17.01,
    "age": 23,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Ophelia",
    "married": false,
    "index": 67
  },
  {
    "name": "Esmeralda Murphy",
    "BMI": 69.78,
    "age": 27,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Stewart",
    "married": true,
    "index": 68
  },
  {
    "name": "Loretta Wagner",
    "BMI": 74.9,
    "age": 30,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Robertson",
    "married": true,
    "index": 69
  },
  {
    "name": "James Oneal",
    "BMI": 43.81,
    "age": 22,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Dale",
    "married": false,
    "index": 70
  },
  {
    "name": "Ethel Koch",
    "BMI": 21.57,
    "age": 28,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Knight",
    "married": true,
    "index": 71
  },
  {
    "name": "Melendez Page",
    "BMI": 74.83,
    "age": 37,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Amalia",
    "married": true,
    "index": 72
  },
  {
    "name": "Kelli Garrett",
    "BMI": 88.26,
    "age": 37,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Berry",
    "married": false,
    "index": 73
  },
  {
    "name": "Buckley Jimenez",
    "BMI": 73.17,
    "age": 40,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Mccray",
    "married": true,
    "index": 74
  },
  {
    "name": "Mckay Sweeney",
    "BMI": 60.1,
    "age": 38,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Byers",
    "married": true,
    "index": 75
  },
  {
    "name": "Hyde Freeman",
    "BMI": 21.23,
    "age": 38,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Russo",
    "married": true,
    "index": 76
  },
  {
    "name": "Stanley Nieves",
    "BMI": 42.96,
    "age": 31,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Angelia",
    "married": true,
    "index": 77
  },
  {
    "name": "Taylor Mcleod",
    "BMI": 76.53,
    "age": 25,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Celeste",
    "married": false,
    "index": 78
  },
  {
    "name": "Silva Kent",
    "BMI": 50.68,
    "age": 37,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Vincent",
    "married": false,
    "index": 79
  },
  {
    "name": "Conrad Dorsey",
    "BMI": 25.29,
    "age": 34,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Maryanne",
    "married": true,
    "index": 80
  },
  {
    "name": "Baxter Floyd",
    "BMI": 84.55,
    "age": 30,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Weiss",
    "married": false,
    "index": 81
  },
  {
    "name": "Patricia Foley",
    "BMI": 42.01,
    "age": 30,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Monique",
    "married": false,
    "index": 82
  },
  {
    "name": "Allie Perry",
    "BMI": 49.61,
    "age": 28,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Suarez",
    "married": false,
    "index": 83
  },
  {
    "name": "Klein Frost",
    "BMI": 18.43,
    "age": 23,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Pamela",
    "married": true,
    "index": 84
  },
  {
    "name": "Luisa Kramer",
    "BMI": 84,
    "age": 32,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Mclaughlin",
    "married": false,
    "index": 85
  },
  {
    "name": "Lee Douglas",
    "BMI": 54.58,
    "age": 40,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Owens",
    "married": false,
    "index": 86
  },
  {
    "name": "Bradford Bryant",
    "BMI": 91.66,
    "age": 23,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Wade",
    "married": false,
    "index": 87
  },
  {
    "name": "Noreen Pena",
    "BMI": 59.54,
    "age": 20,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Pickett",
    "married": false,
    "index": 88
  },
  {
    "name": "Alyssa Valenzuela",
    "BMI": 70.47,
    "age": 37,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Iris",
    "married": true,
    "index": 89
  },
  {
    "name": "Jaclyn Garza",
    "BMI": 81.94,
    "age": 32,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Cristina",
    "married": true,
    "index": 90
  },
  {
    "name": "Graves Hudson",
    "BMI": 29.09,
    "age": 29,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Osborn",
    "married": true,
    "index": 91
  },
  {
    "name": "Bessie Alvarado",
    "BMI": 97.49,
    "age": 29,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Fulton",
    "married": true,
    "index": 92
  },
  {
    "name": "Crane Roy",
    "BMI": 45.98,
    "age": 28,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Tiffany",
    "married": false,
    "index": 93
  },
  {
    "name": "Dickerson Pickett",
    "BMI": 20.55,
    "age": 28,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Fowler",
    "married": false,
    "index": 94
  },
  {
    "name": "Erika Hogan",
    "BMI": 54.99,
    "age": 33,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Crosby",
    "married": true,
    "index": 95
  },
  {
    "name": "Jeannie Adkins",
    "BMI": 35.15,
    "age": 35,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Concetta",
    "married": true,
    "index": 96
  },
  {
    "name": "Arline Hunter",
    "BMI": 92.23,
    "age": 25,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Ella",
    "married": false,
    "index": 97
  },
  {
    "name": "Dianne Mcmahon",
    "BMI": 27.8,
    "age": 32,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Janna",
    "married": true,
    "index": 98
  },
  {
    "name": "Bradshaw Jones",
    "BMI": 51.37,
    "age": 35,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Solomon",
    "married": false,
    "index": 99
  },
  {
    "name": "Roberts Maldonado",
    "BMI": 75.38,
    "age": 37,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Summer",
    "married": true,
    "index": 100
  },
  {
    "name": "Browning Salinas",
    "BMI": 56.7,
    "age": 27,
    "birthday": "1985-08-09T00:00:00.000Z",
    "city": "Julia",
    "married": true,
    "index": 101
  }
];

  var width = 700,
    height = 300,
    margins = {left: 100, right: 100, top: 50, bottom: 50},
    title = "User sample",
    // chart series,
    // field: is what field your data want to be selected
    // name: the name of the field that display in legend
    // color: what color is the line
    chartSeries = [
      {
        field: 'BMI',
        color: '#ff7f0e'
      }
    ],
    // your x accessor
    x = function(d) {
      return d.index;
    }

    return (
        <div className="bs-docs-section">
            <h2 className="page-header">
                <Anchor id="datavistooltipline">Tooltip Line</Anchor>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet rutrum erat, sit amet venenatis orci sodales at. Aliquam eu erat eu diam pellentesque sollicitudin id eget est. Mauris nec pellentesque risus. Integer at interdum massa. Ut ac iaculis ante, sit amet finibus massa. Mauris a mi a metus volutpat molestie. In mauris odio, ullamcorper a vulputate nec, dapibus finibus nisl. Duis aliquet, velit eget laoreet tristique, enim ligula gravida ipsum, vel accumsan lectus purus id enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam at lectus at tellus eleifend efficitur ut vestibulum nunc. Nulla facilisis accumsan dapibus. Pellentesque efficitur vestibulum lectus, vel facilisis elit scelerisque sed. Curabitur lacus purus, pellentesque nec dui nec, feugiat scelerisque neque. Fusce sed augue non lectus varius semper vel eget ex.

              Mauris vel condimentum magna. In eu tortor nibh. Morbi auctor augue a nisl dictum, a maximus nisl bibendum. Vestibulum vitae lorem et dui mattis sollicitudin. Quisque ullamcorper mauris arcu, in interdum nunc aliquet id. Fusce dapibus libero eu placerat faucibus. Nulla tristique nisi in elementum faucibus. Phasellus ornare orci id elementum efficitur. Nunc luctus nisi at libero ornare, eu semper quam ultricies. Etiam eget magna dui. Donec interdum imperdiet lorem. Vivamus ultrices velit in justo rhoncus ultricies. Nulla sagittis pharetra efficitur. Etiam vitae pretium nisl. Vivamus eros nulla, imperdiet mattis sem sit amet, pretium volutpat ex.
              <br></br><br></br>

            </p>

            <LineTooltip
              showLegend= {false}
              showXGrid= {true}
              showYGrid= {true}
              margins= {margins}
              title={title}
              data={chartData}
              width={width}
              height={height}
              chartSeries={chartSeries}
              x={x}
            />

        </div>
    );
}
