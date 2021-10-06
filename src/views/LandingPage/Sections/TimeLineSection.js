import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
const useStyles = makeStyles(styles);

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { ReactComponent as Moon } from "assets/svg/moon.svg";



export default function TimeLineSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>TIMELINE</h2>
          <VerticalTimeline>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              // date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<Moon />}
            >
              <h3 className="vertical-timeline-element-title">Project inception</h3>
              <h4 className="vertical-timeline-element-subtitle">August 1st 2021</h4>
              <p>
                Paddy and Craig flesh out the idea of Cardano System and beginning working on Series 1 Planets
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2010 - 2011"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<Moon />}
            >
              <h3 className="vertical-timeline-element-title">Series 1 - Planets Art Complete </h3>
              <h4 className="vertical-timeline-element-subtitle">October 4th 2021</h4>
              <p>
                After countless hours working on the planets we have been able to finalise 5000 unique planets.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              icon={<Moon />}
            >
              <h3 className="vertical-timeline-element-title">Backend and Website</h3>
              <h4 className="vertical-timeline-element-subtitle">October 8th 2021</h4>
              <p>
                Finalisation of the backend system and deployment of Website.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              icon={<Moon />}
            >
              <h3 className="vertical-timeline-element-title">Private Sale</h3>
              <h4 className="vertical-timeline-element-subtitle">October 11th 2021</h4>
              <p>
                Small private sale to verify all production systems are a go for Series 1 Go Live.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              icon={<Moon />}
            >
              <h3 className="vertical-timeline-element-title">Series 1 Public Sale</h3>
              <h4 className="vertical-timeline-element-subtitle">October 15th 2021</h4>
              <p>
                Cardano System Series 1 planets will be available for public purchasing.
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </GridItem>
      </GridContainer>
    </div>
  );
}
