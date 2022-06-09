import React from "react";
import "./projectspagemenu.styles.css";

import MenuItem from "../menuitem/menuitem.component";

class ProjectsPageMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        {
          title: "Smart Thermostat",
          imageUrl:
            "data:image/jpeg;base64,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",
          id: 1,
          linkUrl: "https://github.com/SoroushSemer/SmartThermostat",
          language: "C/C++",
        },
        {
          title: "Smart Blinds",
          imageUrl:
            "https://m.media-amazon.com/images/I/71VkioxV9eS._AC_SX466_.jpg",
          id: 2,
          linkUrl: "https://github.com/SoroushSemer/SmartBlinds",
          language: "C/C++",
        },
        {
          title: "JSON Parser",
          imageUrl:
            "https://static.goanywhere.com/images/tutorials/read-json/ExampleJSON2.png",
          id: 3,
          linkUrl:
            "https://github.com/SoroushSemer/System-Fundementals-Projects/tree/master/hw1",
          language: "C",
        },
        {
          title: "Dynamic Memory Allocator",
          imageUrl:
            "https://study.com/cimages/multimages/16/1f3a8c28-4082-4714-b6fa-6bb81804095b_screen_shot_2017-12-01_at_1.31.10_pm.png",
          id: 4,
          linkUrl:
            "https://github.com/SoroushSemer/System-Fundementals-Projects/tree/master/hw3",
          language: "C",
        },
        {
          title: "MUSH Interpreter",
          imageUrl:
            "https://www.section.io/engineering-education/fork-in-c-programming-language/fork2.png",
          id: 5,
          linkUrl:
            "https://github.com/SoroushSemer/System-Fundementals-Projects/tree/master/hw4",
          language: "C",
        },
        {
          title: "PBX Telephone System",
          imageUrl:
            "https://www.anttelecom.co.uk/hs-fs/hubfs/bigstock-Phone-Switch-And-Digital-Telep-7105380.jpg?width=652&height=404&name=bigstock-Phone-Switch-And-Digital-Telep-7105380.jpg",

          id: 6,
          linkUrl:
            "https://github.com/SoroushSemer/System-Fundementals-Projects/tree/master/hw5",
          language: "C",
        },
        {
          title: "YelpCamp",
          imageUrl: "https://media.timeout.com/images/105658195/image.jpg",

          id: 7,
          linkUrl: "https://github.com/SoroushSemer/YelpCamp",
          language: "HTML/CSS/JS MongoDB Node.js Express.js",
        },
        {
          title: "Monster's Rolodex",
          imageUrl: "https://robohash.org/1?set=set2&size=180x180",

          id: 8,
          linkUrl: "https://soroushsemer.github.io/monsters-rolodex/",
          language: "React.js",
        },
        {
          title: "Date Calendar Generator",
          imageUrl:
            "https://media.geeksforgeeks.org/wp-content/uploads/calendar_month1.png",

          id: 9,
          linkUrl: "https://github.com/SoroushSemer/DateCalendarGenerator",
          language: "Python",
        },
        {
          title: "Connect 4",
          imageUrl:
            "https://i5.walmartimages.com/asr/cdcd002b-f553-4846-862c-eac46f708b3b_1.e3d921e3c6d41855a1e888bb2fc0fac0.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",

          id: 10,
          linkUrl: "https://replit.com/@SoroushSemerka2/Connect4#.replit",
          language: "Java",
        },
      ],
    };
  }

  render() {
    return (
      <div className="projectspage-menu">
        {this.state.categories.map(({ id, ...otherProps }) => {
          return <MenuItem key={id} {...otherProps} />;
        })}
      </div>
    );
  }
}
export default ProjectsPageMenu;