var h = 1000;
var w = 1450;

var radar_arcs = [
  {
    "name": "ADOPT",
    "r": 130
  },
  {
    "name": "TRIAL",
    "r": 220
  },
  {
    "name": "ASSESS",
    "r": 310
  },
  {
    "name": "HOLD",
    "r": 400
  }
];

// movement:
//   t = moved (triangle)
//   c = stayed put (circle)
//
// blipSize: 
//  This is optional, if you omit this property, then blip size will be 70.
//
// url:
//  This is optional, if you add it then blips will be clickable to some URL.
//
// pc: (polar coordinates)
//  r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
var radar_data = [
  { 
    "quadrant": "Techniques; Frameworks & Tools",
    "left" : 45,
    "top" : 188,
    "color" : "#8FA227",
    "items" : [
  {
    "name": "NODE.JS",
    "pc": {
      "r": 93,
      "t": 152
    },
    "movement": "t"
  },
  {
    "name": "Symfony 3.2",
    "pc": {
      "r": 99,
      "t": 113
    },
    "movement": "c"
  },
  {
    "name": "Symfony 2",
    "pc": {
      "r": 365,
      "t": 166
    },
    "movement": "c"
  },
  {
    "name": "Symfony 4.1",
    "pc": {
      "r": 178,
      "t": 170
    },
    "movement": "t"
  }
]
  },
  { 
    "quadrant": "Data Management",
    "left": w-300+30,
    "top" : 188,
    "color" : "#587486",
    "items" : [
  {
    "name": "AWS S3",
    "pc": {
      "r": 73,
      "t": 10
    },
    "movement": "c"
  },
  {
    "name": "AWS SNS/SQS",
    "pc": {
      "r": 57,
      "t": 75
    },
    "movement": "t"
  },
  {
    "name": "Elasticsearch",
    "pc": {
      "r": 95,
      "t": 36
    },
    "movement": "t"
  },
  {
    "name": "Redis",
    "pc": {
      "r": 99,
      "t": 23
    },
    "movement": "t"
  },
  {
    "name": "RabbitMQ",
    "pc": {
      "r": 197,
      "t": 68
    },
    "movement": "t"
  }
]
  },
  {   
    "quadrant": "Platforms & Infrastructure",
    "left" :45,
    "top" : (h/2 + 38),
    "color" : "#DC6F1D",
    "items" : [
  {
    "name": "Docker",
    "pc": {
      "r": 79,
      "t": 242
    },
    "movement": "t"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 60,
      "t": 229
    },
    "movement": "t"
  },
  {
    "name": "Nginx",
    "pc": {
      "r": 65,
      "t": 216
    },
    "movement": "t"
  },
  {
    "name": "AWS Lambda",
    "pc": {
      "r": 296,
      "t": 216
    },
    "movement": "t"
  },
  {
    "name": "Puppet",
    "pc": {
      "r": 345,
      "t": 192
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Languages",
    "color" : "#B70062",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": "Go",
    "pc": {
      "r": 52,
      "t": 293
    },
    "movement": "t"
  },
  {
    "name": "JavaScript",
    "pc": {
      "r": 85,
      "t": 306
    },
    "movement": "t"
  },
  {
    "name": "OpenAPI (Swagger)",
    "pc": {
      "r": 61,
      "t": 332
    },
    "movement": "t"
  },
  {
    "name": "PHP7",
    "pc": {
      "r": 84,
      "t": 345
    },
    "movement": "c"
  },
  {
    "name": "Python",
    "pc": {
      "r": 110,
      "t": 319
    },
    "movement": "t"
  },
  {
    "name": "PHP5.5",
    "pc": {
      "r": 341,
      "t": 298
    },
    "movement": "c"
  }
]
  }
];
